import { v } from 'convex/values'
import { query } from './_generated/server'
import { getPublicTest, listTestSummaries } from './content'

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

/**
 * One test's full question content, with the answer key removed.
 *
 * This is the query that actually carries question text to the browser, so the
 * stripping in `getPublicTest` is the thing standing between a student and the
 * answers. It is deliberately the only public path to question content.
 *
 * No return validator: the question shape is a discriminated union with a
 * dozen optional fields, and duplicating it here as a `v.union` would be a
 * second definition to keep in sync — `PublicTest` already types it.
 */
export const get = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) {
      return null
    }

    return getPublicTest(args.slug) ?? null
  },
})
