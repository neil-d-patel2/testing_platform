import { v } from 'convex/values'
import { query } from './_generated/server'
import { listTestSummaries } from './content'

/**
 * The tests a student can take.
 *
 * Auth is enforced here, not just in the route: the route guard is UX, but this
 * query is on the public internet and anyone can call it directly with the
 * deployment URL. Signed-out callers get nothing.
 *
 * Returns empty rather than throwing, matching `todos.list`. Throwing would
 * take down any mounted page the moment auth lapses — signing out in place, or
 * a token refresh landing between renders — and the security property is the
 * same either way: no test data reaches an unauthenticated caller.
 *
 * Returns metadata only — no questions, and therefore no answer key. Question
 * content is served per-test, stripped, once an attempt starts.
 */
export const list = query({
  args: {},
  returns: v.array(
    v.object({
      slug: v.string(),
      title: v.string(),
      description: v.optional(v.string()),
      moduleCount: v.number(),
      questionCount: v.number(),
      totalTimeSeconds: v.number(),
    }),
  ),
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) {
      return []
    }

    return listTestSummaries()
  },
})
