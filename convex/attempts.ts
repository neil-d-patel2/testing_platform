import { v } from 'convex/values'
import { mutation, query } from './_generated/server'
import { getTest } from './content'
import type { Id } from './_generated/dataModel'
import type { MutationCtx, QueryCtx } from './_generated/server'

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
      // Keyed by question id so the client can look up a response directly.
      answers: Object.fromEntries(answers.map((a) => [a.questionId, a.value])),
    }
  },
})

/**
 * Starts an attempt, or returns the existing one.
 *
 * Idempotent on purpose: the runner calls this on mount, and a double-click or
 * a Strict Mode double-render must not create two attempts for the same test.
 */
export const start = mutation({
  args: { testSlug: v.string() },
  returns: v.id('attempts'),
  handler: async (ctx, args) => {
    const userId = await requireUserId(ctx)

    // Reject slugs that aren't real tests, so a client can't create attempts
    // against arbitrary strings.
    if (!getTest(args.testSlug)) {
      throw new Error(`Unknown test: ${args.testSlug}`)
    }

    const existing = await ctx.db
      .query('attempts')
      .withIndex('by_user_and_test', (q) =>
        q.eq('userId', userId).eq('testSlug', args.testSlug),
      )
      .order('desc')
      .first()

    if (existing) {
      return existing._id
    }

    return await ctx.db.insert('attempts', {
      userId,
      testSlug: args.testSlug,
      status: 'in_progress',
      startedAt: Date.now(),
    })
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

    const question = test.modules
      .flatMap((m) => m.questions)
      .find((q) => q.id === args.questionId)

    if (!question) {
      throw new Error(`Unknown question: ${args.questionId}`)
    }

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
    })

    return null
  },
})
