import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
  todos: defineTable({
    text: v.string(),
    completed: v.boolean(),
    // Clerk user id (`identity.subject`) that owns this todo.
    userId: v.string(),
  }).index('by_user', ['userId']),

  /**
   * One student's run at one test.
   *
   * Timing is server-authoritative: `moduleExpiresAt` is written when a module
   * begins and is the only thing that decides whether an answer is still
   * accepted. The client's countdown is derived from it, never the reverse.
   */
  attempts: defineTable({
    // Clerk user id (`identity.subject`). Derived from the JWT, never an arg.
    userId: v.string(),
    /*
     * Snapshot of the student's name/email at the time the attempt started,
     * copied from the Clerk JWT. Denormalized because Convex has no join to
     * Clerk — without it the tutor view could only show raw `user_2abc...`
     * ids. Optional: older rows predate the field, and Clerk does not
     * guarantee either claim.
     */
    userName: v.optional(v.string()),
    userEmail: v.optional(v.string()),
    testSlug: v.string(),
    status: v.union(v.literal('in_progress'), v.literal('submitted')),
    /*
     * The accommodation the student picked on the instructions screen, which
     * scales every module's time limit. Chosen once, at start — changing it
     * mid-test would mean recomputing a deadline the student has already been
     * counting down against.
     */
    timeOption: v.optional(
      v.union(
        v.literal('standard'),
        v.literal('extended50'),
        v.literal('extended100'),
      ),
    ),
    /*
     * Index into the test's `modules`. Advances one way only — a finished
     * module is never reopened.
     */
    currentModuleIndex: v.optional(v.number()),
    /*
     * When the current module's time runs out, in ms epoch. A scheduled
     * mutation fires at this instant and advances (or submits) even if the
     * browser is closed, so a student cannot bank time by walking away.
     */
    moduleExpiresAt: v.optional(v.number()),
    /*
     * All four are optional because attempts created before timing existed
     * have none of them. Those rows read as "untimed": no countdown, no
     * auto-advance — degraded, but not broken.
     */
    startedAt: v.number(),
    submittedAt: v.optional(v.number()),
  })
    .index('by_user', ['userId'])
    .index('by_user_and_test', ['userId', 'testSlug'])
    // Drives the tutor view: submitted attempts, newest first.
    .index('by_status', ['status']),

  /**
   * A student's response to one question, upserted as they work.
   *
   * `userId` is denormalized off the attempt so an ownership check on write is
   * a single indexed read rather than a join. It must always equal the parent
   * attempt's `userId` — `saveAnswer` is the only writer and enforces that.
   */
  answers: defineTable({
    attemptId: v.id('attempts'),
    userId: v.string(),
    // Matches `Question.id` in `convex/content/` — a content id, not a row id.
    questionId: v.string(),
    // Choice index as a string, or the raw grid-in text.
    value: v.string(),
    updatedAt: v.number(),
  })
    .index('by_attempt', ['attemptId'])
    .index('by_attempt_and_question', ['attemptId', 'questionId']),
})
