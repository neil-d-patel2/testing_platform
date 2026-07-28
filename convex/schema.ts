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
   * One student's run at one test. Timing is not enforced yet — `startedAt` is
   * recorded so the per-module deadlines in `SPEC.md` can be layered on later
   * without a migration.
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
