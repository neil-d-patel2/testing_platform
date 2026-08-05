import { v } from 'convex/values'
import { internal } from './_generated/api'
import { internalMutation, mutation, query } from './_generated/server'
import { getTest } from './content'
import { asTimeOption, moduleSeconds } from './timing'
import type { Doc, Id } from './_generated/dataModel'
import type { MutationCtx, QueryCtx } from './_generated/server'
import type { Question, Test } from './content/types'
import type { TimeOption } from './timing'

/** Argument/field validator for the time accommodation. */
const timeOptionValidator = v.union(
  v.literal('standard'),
  v.literal('extended50'),
  v.literal('extended100'),
)

/**
 * Slack allowed past a module deadline before a write is refused.
 *
 * A student who clicks a choice with half a second left deserves to have it
 * counted; the request still has to cross the network. Small enough that it
 * cannot be used to work past the timer in any meaningful way.
 */
const DEADLINE_GRACE_MS = 2_000

/** Throws unless a Clerk identity is attached to the request. */
async function requireUserId(ctx: QueryCtx | MutationCtx) {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) {
    throw new Error('Not signed in')
  }
  return identity.subject
}

/**
 * Loads an attempt and verifies the caller owns it.
 *
 * Every mutation goes through this. A client can post any `_id` it likes, so
 * "the query only returned your attempts" is not authorization.
 */
async function requireOwnedAttempt(ctx: MutationCtx, id: Id<'attempts'>) {
  const userId = await requireUserId(ctx)
  const attempt = await ctx.db.get(id)

  if (!attempt || attempt.userId !== userId) {
    // Same error for missing and forbidden, so this can't be used to probe
    // which attempt ids exist.
    throw new Error('Attempt not found')
  }

  return attempt
}

/**
 * When a module that starts at `from` runs out, for this student's
 * accommodation.
 */
function deadlineFor(
  test: Test,
  moduleIndex: number,
  option: TimeOption,
  from: number,
) {
  const base = test.modules[moduleIndex].timeLimitSeconds
  return from + moduleSeconds(base, option) * 1000
}

/**
 * Books the wake-up that ends a module.
 *
 * This is what makes the timer real rather than decorative: it fires whether
 * or not a browser is still open, so closing the tab on a running module
 * doesn't pause it. Scheduling is fire-and-forget — the job re-checks the
 * attempt when it runs and no-ops if the module has already moved on, which is
 * the normal case when a student finishes early.
 */
async function scheduleExpiry(
  ctx: MutationCtx,
  attemptId: Id<'attempts'>,
  moduleIndex: number,
  expiresAt: number,
) {
  await ctx.scheduler.runAt(expiresAt, internal.attempts.expireModule, {
    attemptId,
    moduleIndex,
  })
}

/** A question and the index of the module holding it. Throws if unknown. */
function locateQuestion(test: Test, questionId: string) {
  for (let moduleIndex = 0; moduleIndex < test.modules.length; moduleIndex++) {
    const question = test.modules[moduleIndex].questions.find(
      (q) => q.id === questionId,
    )
    if (question) return { question, moduleIndex }
  }
  throw new Error(`Unknown question: ${questionId}`)
}

/**
 * Refuses a write aimed at a module the student is not currently in, or one
 * whose time has run out.
 *
 * This is where the timer stops being advisory. A countdown in React can be
 * paused with devtools, and the module a request claims to be for is just a
 * question id — so both have to be re-derived and checked here.
 *
 * Attempts predating timing carry no `moduleExpiresAt`; those stay writable,
 * since retroactively locking someone out of a test they started under the old
 * rules would lose their work.
 */
function requireOpenModule(attempt: Doc<'attempts'>, moduleIndex: number) {
  if ((attempt.currentModuleIndex ?? 0) !== moduleIndex) {
    throw new Error('That section is closed')
  }

  // `currentModuleIndex` moves to the next section as the break begins, so
  // without this the break would be a screen the client could simply skip.
  if (attempt.breakEndsAt !== undefined && Date.now() < attempt.breakEndsAt) {
    throw new Error('You are on a break')
  }

  const expiresAt = attempt.moduleExpiresAt
  if (expiresAt !== undefined && Date.now() > expiresAt + DEADLINE_GRACE_MS) {
    throw new Error('Time is up for this section')
  }
}

/**
 * Moves the attempt onto the next module, or submits it if there isn't one.
 *
 * The single place a module boundary is crossed — reached both when a student
 * finishes early and when their time runs out, so the two paths can't drift.
 * `from` is when the new module starts counting.
 */
async function advanceOrSubmit(
  ctx: MutationCtx,
  attempt: Doc<'attempts'>,
  from: number,
) {
  const test = getTest(attempt.testSlug)
  const currentIndex = attempt.currentModuleIndex ?? 0
  const nextIndex = currentIndex + 1

  // An unknown slug can only mean content was deleted out from under a live
  // attempt. Submitting is the safe end state: answers are kept, and the
  // student isn't stranded on a module that no longer exists.
  if (!test || nextIndex >= test.modules.length) {
    await ctx.db.patch(attempt._id, {
      status: 'submitted',
      submittedAt: from,
      moduleExpiresAt: undefined,
      breakEndsAt: undefined,
    })
    return
  }

  /*
   * A break between the two sections pushes the next module's start back. The
   * deadline is fixed here, at the far side of the break, rather than when the
   * break ends — so the next section is exactly its full length no matter how
   * or when the break is closed out.
   */
  const breakSeconds = test.modules[currentIndex].breakAfterSeconds ?? 0
  const breakEndsAt = breakSeconds > 0 ? from + breakSeconds * 1000 : undefined
  const option = asTimeOption(attempt.timeOption)
  const expiresAt = deadlineFor(test, nextIndex, option, breakEndsAt ?? from)

  await ctx.db.patch(attempt._id, {
    currentModuleIndex: nextIndex,
    moduleExpiresAt: expiresAt,
    breakEndsAt,
  })
  await scheduleExpiry(ctx, attempt._id, nextIndex, expiresAt)

  if (breakEndsAt !== undefined) {
    // Ends the break on its own, so a student who closes the tab over the
    // break comes back to a section already running rather than to a break
    // screen that never lets go.
    await ctx.scheduler.runAt(breakEndsAt, internal.attempts.finishBreak, {
      attemptId: attempt._id,
      breakEndsAt,
    })
  }
}

/**
 * Clears the break flag, but only once it has genuinely elapsed.
 *
 * The break is mandatory, so this is the one thing standing between a student
 * and skipping it — both callers route through here, and an early request is a
 * no-op rather than an error.
 */
async function clearBreakIfOver(ctx: MutationCtx, attempt: Doc<'attempts'>) {
  const breakEndsAt = attempt.breakEndsAt
  if (breakEndsAt === undefined) return
  if (Date.now() < breakEndsAt) return

  await ctx.db.patch(attempt._id, { breakEndsAt: undefined })
}

/**
 * The caller's in-progress attempt at a test, with everything they've answered
 * so far. `null` when they haven't started, or aren't signed in.
 *
 * Returns `null` rather than throwing when signed out so a page that loses auth
 * mid-session degrades instead of crashing — see the note on `tests.list`.
 */
export const getActive = query({
  args: { testSlug: v.string() },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) {
      return null
    }

    const attempt = await ctx.db
      .query('attempts')
      .withIndex('by_user_and_test', (q) =>
        q.eq('userId', identity.subject).eq('testSlug', args.testSlug),
      )
      .order('desc')
      .first()

    if (!attempt) {
      return null
    }

    const answers = await ctx.db
      .query('answers')
      .withIndex('by_attempt', (q) => q.eq('attemptId', attempt._id))
      .collect()

    return {
      attemptId: attempt._id,
      status: attempt.status,
      startedAt: attempt.startedAt,
      submittedAt: attempt.submittedAt,
      timeOption: attempt.timeOption,
      /*
       * Timing is handed over raw, as absolute instants. Deliberately not a
       * "seconds remaining" number: this is a query, and a query is not rerun
       * because time passed, so any countdown computed here would be frozen at
       * whatever the cache last saw. The client ticks against these.
       */
      currentModuleIndex: attempt.currentModuleIndex ?? 0,
      moduleExpiresAt: attempt.moduleExpiresAt,
      breakEndsAt: attempt.breakEndsAt,
      // Keyed by question id so the client can look up a response directly.
      answers: Object.fromEntries(answers.map((a) => [a.questionId, a.value])),
    }
  },
})

/**
 * The caller's latest attempt, marked against the answer key.
 *
 * Grading happens here rather than in the browser because the key is the one
 * thing that must never be bundled into the client. The key and explanations
 * are only attached once `status` is `submitted` — before that this returns
 * the shell of a report and nothing else, so a student can't read the answers
 * out of a network response mid-test.
 *
 * A question with no key grades to `null`, not `false`. Practice Test 1 has no
 * key at all, and reporting 0 out of 98 would be a lie about the student's
 * work rather than a gap in the content.
 */
export const report = query({
  args: { testSlug: v.string() },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) return null

    const attempt = await ctx.db
      .query('attempts')
      .withIndex('by_user_and_test', (q) =>
        q.eq('userId', identity.subject).eq('testSlug', args.testSlug),
      )
      .order('desc')
      .first()

    if (!attempt) return null

    const test = getTest(attempt.testSlug)
    if (!test) return null

    const rows = await ctx.db
      .query('answers')
      .withIndex('by_attempt', (q) => q.eq('attemptId', attempt._id))
      .collect()
    const byQuestion = new Map(rows.map((a) => [a.questionId, a.value]))

    const released = attempt.status === 'submitted'

    const modules = test.modules.map((module) => {
      const questions = module.questions.map((question, index) => {
        const yourAnswer = byQuestion.get(question.id) ?? null
        const isCorrect = released ? grade(question, yourAnswer) : null

        return {
          id: question.id,
          number: index + 1,
          prompt: question.prompt,
          type: question.type,
          choices:
            question.type === 'multiple-choice' ? question.choices : undefined,
          // Classification, not an answer field — safe to send whether or not
          // the attempt is submitted.
          domain: question.domain ?? null,
          skill: question.skill ?? null,
          yourAnswer,
          correctAnswer: released ? displayKey(question) : null,
          isCorrect,
          explanation: released ? question.explanation : undefined,
        }
      })

      return {
        id: module.id,
        title: module.title,
        total: questions.length,
        answered: questions.filter((q) => q.yourAnswer !== null).length,
        correct: questions.filter((q) => q.isCorrect === true).length,
        graded: questions.filter((q) => q.isCorrect !== null).length,
        questions,
      }
    })

    const allQuestions = modules.flatMap((m) => m.questions)

    return {
      status: attempt.status,
      testSlug: test.slug,
      testTitle: test.title,
      timeOption: attempt.timeOption,
      startedAt: attempt.startedAt,
      submittedAt: attempt.submittedAt,
      total: modules.reduce((n, m) => n + m.total, 0),
      answered: modules.reduce((n, m) => n + m.answered, 0),
      correct: modules.reduce((n, m) => n + m.correct, 0),
      // Zero here is the "no answer key supplied" state the whole screen
      // hinges on, not a score of zero.
      graded: modules.reduce((n, m) => n + m.graded, 0),
      modules,
      byDomain: breakdownBy(allQuestions, (q) => q.domain),
      bySkill: breakdownBy(allQuestions, (q) => q.skill),
    }
  },
})

/**
 * Accuracy grouped by a classification field (domain or skill), in the order
 * each label first appears. Questions with no label (older content, or a
 * transcription gap) are left out of the grouping rather than lumped into an
 * "unknown" bucket — nothing to show the tutor there.
 */
function breakdownBy<
  TQuestion extends {
    domain: string | null
    skill: string | null
    yourAnswer: string | null
    isCorrect: boolean | null
  },
>(questions: Array<TQuestion>, key: (q: TQuestion) => string | null) {
  const order: Array<string> = []
  const counts = new Map<
    string,
    { total: number; answered: number; correct: number; graded: number }
  >()

  for (const question of questions) {
    const label = key(question)
    if (label === null) continue

    if (!counts.has(label)) {
      order.push(label)
      counts.set(label, { total: 0, answered: 0, correct: 0, graded: 0 })
    }
    const bucket = counts.get(label)!
    bucket.total += 1
    if (question.yourAnswer !== null) bucket.answered += 1
    if (question.isCorrect !== null) bucket.graded += 1
    if (question.isCorrect === true) bucket.correct += 1
  }

  return order.map((label) => ({ label, ...counts.get(label)! }))
}

/**
 * Whether a response is right: `null` when the question carries no key, which
 * is not the same as wrong.
 */
function grade(question: Question, response: string | null): boolean | null {
  if (question.type === 'multiple-choice') {
    if (question.correctAnswer === undefined) return null
    return response !== null && Number(response) === question.correctAnswer
  }

  const accepted = question.acceptedAnswers
  if (!accepted || accepted.length === 0) return null
  if (response === null) return false

  // Grid-ins are compared as trimmed, case-insensitive strings — every
  // spelling that counts has to be listed in `acceptedAnswers`.
  const normalized = response.trim().toLowerCase()
  return accepted.some((value) => value.trim().toLowerCase() === normalized)
}

/** The key in the same shape a stored answer takes, or `null` if unsupplied. */
function displayKey(question: Question): string | null {
  if (question.type === 'multiple-choice') {
    return question.correctAnswer === undefined
      ? null
      : String(question.correctAnswer)
  }
  return question.acceptedAnswers?.length
    ? question.acceptedAnswers.join(' or ')
    : null
}

/**
 * Starts an attempt, or returns the existing one.
 *
 * Idempotent on purpose: a double-click on "Begin" must not create two
 * attempts, and must not restart the clock on one already running.
 *
 * `timeOption` is the accommodation chosen on the instructions screen. It is
 * only honoured when an attempt is actually created — re-sending it against a
 * live attempt would hand a student a fresh, longer deadline mid-module.
 */
export const start = mutation({
  args: { testSlug: v.string(), timeOption: timeOptionValidator },
  returns: v.id('attempts'),
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) {
      throw new Error('Not signed in')
    }

    // Reject slugs that aren't real tests, so a client can't create attempts
    // against arbitrary strings.
    const test = getTest(args.testSlug)
    if (!test) {
      throw new Error(`Unknown test: ${args.testSlug}`)
    }

    const existing = await ctx.db
      .query('attempts')
      .withIndex('by_user_and_test', (q) =>
        q.eq('userId', identity.subject).eq('testSlug', args.testSlug),
      )
      .order('desc')
      .first()

    /*
     * Returns the newest attempt whatever its status. A submitted attempt is
     * therefore reopened read-only rather than replaced — starting a fresh one
     * requires `retake`, which is an explicit student action.
     */
    if (existing) {
      return existing._id
    }

    const startedAt = Date.now()
    const expiresAt = deadlineFor(test, 0, args.timeOption, startedAt)

    const attemptId = await ctx.db.insert('attempts', {
      userId: identity.subject,
      userName: identity.name,
      userEmail: identity.email,
      testSlug: args.testSlug,
      status: 'in_progress',
      timeOption: args.timeOption,
      currentModuleIndex: 0,
      moduleExpiresAt: expiresAt,
      startedAt,
    })
    await scheduleExpiry(ctx, attemptId, 0, expiresAt)

    return attemptId
  },
})

/**
 * Begins a fresh attempt, leaving the previous one intact.
 *
 * Old attempts are kept rather than overwritten: the tutor grades submissions,
 * and silently discarding a prior submission on retake would destroy work
 * they may not have looked at yet.
 */
export const retake = mutation({
  args: { testSlug: v.string(), timeOption: timeOptionValidator },
  returns: v.id('attempts'),
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) {
      throw new Error('Not signed in')
    }

    const test = getTest(args.testSlug)
    if (!test) {
      throw new Error(`Unknown test: ${args.testSlug}`)
    }

    const latest = await ctx.db
      .query('attempts')
      .withIndex('by_user_and_test', (q) =>
        q.eq('userId', identity.subject).eq('testSlug', args.testSlug),
      )
      .order('desc')
      .first()

    // Nothing to retake from — an unsubmitted attempt is already the live one,
    // and starting a second would orphan the answers in it.
    if (latest && latest.status !== 'submitted') {
      return latest._id
    }

    const startedAt = Date.now()
    const expiresAt = deadlineFor(test, 0, args.timeOption, startedAt)

    const attemptId = await ctx.db.insert('attempts', {
      userId: identity.subject,
      userName: identity.name,
      userEmail: identity.email,
      testSlug: args.testSlug,
      status: 'in_progress',
      timeOption: args.timeOption,
      currentModuleIndex: 0,
      moduleExpiresAt: expiresAt,
      startedAt,
    })
    await scheduleExpiry(ctx, attemptId, 0, expiresAt)

    return attemptId
  },
})

/**
 * The caller's latest attempt per test, for the test list. Metadata only — no
 * answers, so this stays cheap as attempt history grows.
 */
export const listMine = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) {
      return []
    }

    const attempts = await ctx.db
      .query('attempts')
      .withIndex('by_user', (q) => q.eq('userId', identity.subject))
      .order('desc')
      .take(200)

    // `order('desc')` puts the newest first, so the first row seen for a slug
    // is the current one.
    const latestBySlug = new Map<string, (typeof attempts)[number]>()
    for (const attempt of attempts) {
      if (!latestBySlug.has(attempt.testSlug)) {
        latestBySlug.set(attempt.testSlug, attempt)
      }
    }

    return await Promise.all(
      [...latestBySlug.values()].map(async (attempt) => {
        const answers = await ctx.db
          .query('answers')
          .withIndex('by_attempt', (q) => q.eq('attemptId', attempt._id))
          .collect()

        return {
          testSlug: attempt.testSlug,
          status: attempt.status,
          submittedAt: attempt.submittedAt,
          answeredCount: answers.length,
        }
      }),
    )
  },
})

/**
 * Ends the current module early, at the student's request.
 *
 * One-way, and the last module has nowhere to go, so this submits instead —
 * see `submit` for the confirmed, deliberate version of that.
 *
 * `moduleIndex` is what the client believes it is finishing. Mismatches are a
 * silent no-op rather than an error: a second tab, a retried request, or a
 * click that races the expiry job all arrive here, and none of them should
 * skip a module the student never saw.
 */
export const advanceModule = mutation({
  args: { attemptId: v.id('attempts'), moduleIndex: v.number() },
  returns: v.null(),
  handler: async (ctx, args) => {
    const attempt = await requireOwnedAttempt(ctx, args.attemptId)

    if (attempt.status === 'submitted') return null
    if ((attempt.currentModuleIndex ?? 0) !== args.moduleIndex) return null

    // Nothing to end during a break — the section on the far side of it hasn't
    // started, and advancing would skip it outright.
    if (attempt.breakEndsAt !== undefined && Date.now() < attempt.breakEndsAt) {
      return null
    }

    await advanceOrSubmit(ctx, attempt, Date.now())
    return null
  },
})

/**
 * Ends the break once it has run out, releasing the next section.
 *
 * The scheduled `finishBreak` normally gets here first; this exists so the
 * student's own tab can close the break out the instant their countdown hits
 * zero instead of waiting on a job, and so a break can still end if that job
 * never runs. Early calls do nothing — see `clearBreakIfOver`.
 */
export const endBreak = mutation({
  args: { attemptId: v.id('attempts') },
  returns: v.null(),
  handler: async (ctx, args) => {
    const attempt = await requireOwnedAttempt(ctx, args.attemptId)
    if (attempt.status === 'submitted') return null

    await clearBreakIfOver(ctx, attempt)
    return null
  },
})

/** Scheduled at the end of a break. Never called from a client. */
export const finishBreak = internalMutation({
  args: { attemptId: v.id('attempts'), breakEndsAt: v.number() },
  returns: v.null(),
  handler: async (ctx, args) => {
    const attempt = await ctx.db.get(args.attemptId)
    if (!attempt || attempt.status === 'submitted') return null

    // Stale job: the attempt is on a different break than the one this was
    // booked for, so leave that one to its own scheduled call.
    if (attempt.breakEndsAt !== args.breakEndsAt) return null

    await clearBreakIfOver(ctx, attempt)
    return null
  },
})

/**
 * Closes a module whose time has run out. Scheduled at the deadline by
 * `scheduleExpiry`; never called from a client.
 *
 * Answers are already saved as the student works, so "auto-submit" here means
 * sealing what they have and moving on — there is nothing buffered to lose.
 */
export const expireModule = internalMutation({
  args: { attemptId: v.id('attempts'), moduleIndex: v.number() },
  returns: v.null(),
  handler: async (ctx, args) => {
    const attempt = await ctx.db.get(args.attemptId)

    // Already finished, or the student moved on before the deadline. Both are
    // the expected outcome of finishing a module early.
    if (!attempt || attempt.status === 'submitted') return null
    if ((attempt.currentModuleIndex ?? 0) !== args.moduleIndex) return null

    const expiresAt = attempt.moduleExpiresAt
    if (expiresAt === undefined) return null

    /*
     * The deadline moved further out after this job was booked. Rebook rather
     * than return, or nothing would be left to close the module.
     */
    if (Date.now() < expiresAt - DEADLINE_GRACE_MS) {
      await scheduleExpiry(ctx, args.attemptId, args.moduleIndex, expiresAt)
      return null
    }

    // Counts the next module from the deadline, not from whenever the job
    // actually ran, so scheduler lag can't quietly hand out extra time.
    await advanceOrSubmit(ctx, attempt, expiresAt)
    return null
  },
})

/**
 * Upserts the caller's response to one question.
 *
 * Validates that the question actually belongs to the attempt's test, so a
 * client can't stuff arbitrary question ids (or unbounded values) into the
 * table. Multiple-choice values must be a real index into that question's
 * choices.
 */
export const saveAnswer = mutation({
  args: {
    attemptId: v.id('attempts'),
    questionId: v.string(),
    value: v.string(),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    const attempt = await requireOwnedAttempt(ctx, args.attemptId)

    if (attempt.status === 'submitted') {
      throw new Error('This attempt has already been submitted')
    }

    const test = getTest(attempt.testSlug)
    if (!test) {
      throw new Error(`Unknown test: ${attempt.testSlug}`)
    }

    const { question, moduleIndex } = locateQuestion(test, args.questionId)
    requireOpenModule(attempt, moduleIndex)

    if (question.type === 'multiple-choice') {
      const index = Number(args.value)
      if (
        !Number.isInteger(index) ||
        index < 0 ||
        index >= question.choices.length
      ) {
        throw new Error(`Invalid choice for ${args.questionId}`)
      }
    } else if (args.value.length > 100) {
      // A grid-in response is a short number; anything longer is abuse.
      throw new Error('Response too long')
    }

    const existing = await ctx.db
      .query('answers')
      .withIndex('by_attempt_and_question', (q) =>
        q.eq('attemptId', args.attemptId).eq('questionId', args.questionId),
      )
      .unique()

    if (existing) {
      await ctx.db.patch(existing._id, {
        value: args.value,
        updatedAt: Date.now(),
      })
    } else {
      await ctx.db.insert('answers', {
        attemptId: args.attemptId,
        userId: attempt.userId,
        questionId: args.questionId,
        value: args.value,
        updatedAt: Date.now(),
      })
    }

    return null
  },
})

/**
 * Clears a response, for when a student wants a question back to unanswered.
 */
export const clearAnswer = mutation({
  args: { attemptId: v.id('attempts'), questionId: v.string() },
  returns: v.null(),
  handler: async (ctx, args) => {
    const attempt = await requireOwnedAttempt(ctx, args.attemptId)

    if (attempt.status === 'submitted') {
      throw new Error('This attempt has already been submitted')
    }

    // Clearing is a write like any other: a closed module is closed in both
    // directions, or a student could erase answers after time was called.
    const test = getTest(attempt.testSlug)
    if (test) {
      requireOpenModule(
        attempt,
        locateQuestion(test, args.questionId).moduleIndex,
      )
    }

    const existing = await ctx.db
      .query('answers')
      .withIndex('by_attempt_and_question', (q) =>
        q.eq('attemptId', args.attemptId).eq('questionId', args.questionId),
      )
      .unique()

    if (existing) {
      await ctx.db.delete(existing._id)
    }

    return null
  },
})

/**
 * Marks the attempt finished. No scoring — this test has no answer key yet.
 *
 * Submitting an already-submitted attempt is a no-op rather than an error, so a
 * retried request can't fail spuriously.
 */
export const submit = mutation({
  args: { attemptId: v.id('attempts') },
  returns: v.null(),
  handler: async (ctx, args) => {
    const attempt = await requireOwnedAttempt(ctx, args.attemptId)

    if (attempt.status === 'submitted') {
      return null
    }

    await ctx.db.patch(args.attemptId, {
      status: 'submitted',
      submittedAt: Date.now(),
      // Dropped so nothing downstream renders a countdown against a deadline
      // that no longer applies. The scheduled expiry job no-ops on status.
      moduleExpiresAt: undefined,
    })

    return null
  },
})
