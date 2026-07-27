import { query } from './_generated/server'

/**
 * The signed-in user, or `null` when signed out.
 *
 * Identity comes from the Clerk JWT that `ConvexProviderWithClerk` attaches to
 * every request — never trust a user id passed in as an argument, since args
 * are attacker-controlled.
 */
export const viewer = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) {
      return null
    }

    return {
      // `subject` is the stable Clerk user id (e.g. "user_2abc...").
      id: identity.subject,
      name: identity.name,
      email: identity.email,
      pictureUrl: identity.pictureUrl,
    }
  },
})
