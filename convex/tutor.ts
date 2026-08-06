import { v } from 'convex/values'
import { env, query } from './_generated/server'
import { getTest } from './content'
import { displayKey, gradeResponse } from './content/grading'
import type { QueryCtx } from './_generated/server'
import type { Id } from './_generated/dataModel'

/**
 * Tutor access is a single shared password, checked **here** rather than in the
 * React page.
 *
 * A password checked in the browser is decoration: these queries are reachable
 * over the public internet with nothing but the deployment URL, so a client-
 * side gate would hand every student's submissions to anyone who opened
 * devtools. The password must be an argument the server verifies before it
 * returns a single row.
 *
 * Known limits of a shared secret, in case they matter later:
 *   - No identity. Every tutor is the same principal; there is no record of
 *     who viewed what.
 *   - No revocation short of rotating the value for everyone.
 * The upgrade path is a role claim on the Clerk user, at which point these
 * functions check `identity` instead of an argument.
 */
function passwordMatches(supplied: string): boolean {
  const expected = env.TUTOR_PASSWORD

  // Fail closed. An unset variable must deny, never allow.
  if (!expected) return false

  // Length is compared first and leaks only the length; the rest is compared
  // without an early exit so timing doesn't reveal a correct prefix.
  if (supplied.length !== expected.length) return false

  let mismatch = 0
  for (let i = 0; i < supplied.length; i++) {
    mismatch |= supplied.charCodeAt(i) ^ expected.charCodeAt(i)
  }
  return mismatch === 0
}

function requireTutor(password: string) {
  if (!passwordMatches(password)) {
    throw new Error('Incorrect password')
  }
}

/** Lets the page verify a password without pulling any student data. */
export const checkPassword = query({
  args: { password: v.string() },
  returns: v.boolean(),
  handler: (_ctx, args) => passwordMatches(args.password),
})

async function countAnswers(ctx: QueryCtx, attemptId: Id<'attempts'>) {
  const answers = await ctx.db
    .query('answers')
    .withIndex('by_attempt', (q) => q.eq('attemptId', attemptId))
    .collect()
  return answers.length
}

/**
 * Every attempt by every student, newest first.
 *
 * Bounded with `.take()` rather than `.collect()` — this table grows with every
 * student who ever starts a test.
 */
export const listAttempts = query({
  args: { password: v.string() },
  handler: async (ctx, args) => {
    requireTutor(args.password)

    const attempts = await ctx.db.query('attempts').order('desc').take(500)

    return await Promise.all(
      attempts.map(async (attempt) => {
        const test = getTest(attempt.testSlug)
        return {
          attemptId: attempt._id,
          userId: attempt.userId,
          userName: attempt.userName,
          userEmail: attempt.userEmail,
          testSlug: attempt.testSlug,
          testTitle: test?.title ?? attempt.testSlug,
          totalQuestions:
            test?.modules.reduce((n, m) => n + m.questions.length, 0) ?? 0,
          status: attempt.status,
          startedAt: attempt.startedAt,
          submittedAt: attempt.submittedAt,
          answeredCount: await countAnswers(ctx, attempt._id),
        }
      }),
    )
  },
})

/**
 * One attempt, question by question, with the student's response beside the
 * correct answer where a key exists.
 *
 * Passages and tables are omitted — the tutor grades from the question and the
 * response, and shipping 98 reading passages per attempt would make the page
 * heavy for no benefit.
 */
export const getAttempt = query({
  args: { password: v.string(), attemptId: v.id('attempts') },
  handler: async (ctx, args) => {
    requireTutor(args.password)

    const attempt = await ctx.db.get(args.attemptId)
    if (!attempt) return null

    const test = getTest(attempt.testSlug)
    if (!test) return null

    const answerRows = await ctx.db
      .query('answers')
      .withIndex('by_attempt', (q) => q.eq('attemptId', args.attemptId))
      .collect()
    const byQuestion = new Map(answerRows.map((a) => [a.questionId, a.value]))

    const modules = test.modules.map((module) => ({
      id: module.id,
      title: module.title,
      questions: module.questions.map((question, index) => {
        const response = byQuestion.get(question.id) ?? null

        return {
          id: question.id,
          number: index + 1,
          prompt: question.prompt,
          type: question.type,
          choices:
            question.type === 'multiple-choice' ? question.choices : undefined,
          // `null` means "no key supplied for this question", which must read
          // as ungradable rather than as a wrong answer.
          correctAnswer: displayKey(question),
          /*
           * Marked here, not in the browser. The page used to compare the
           * response against `correctAnswer` as strings, which fails the
           * moment a grid-in accepts more than one spelling: a student who
           * answered "1.2" was shown red against a key of "1.2 or 6/5".
           */
          isCorrect: gradeResponse(question, response),
          response,
        }
      }),
    }))

    return {
      attemptId: attempt._id,
      userId: attempt.userId,
      userName: attempt.userName,
      userEmail: attempt.userEmail,
      testTitle: test.title,
      status: attempt.status,
      startedAt: attempt.startedAt,
      submittedAt: attempt.submittedAt,
      modules,
    }
  },
})
