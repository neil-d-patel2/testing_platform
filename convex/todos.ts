import { mutation, query } from './_generated/server'
import { v } from 'convex/values'
import type { MutationCtx, QueryCtx } from './_generated/server'
import type { Id } from './_generated/dataModel'

/** Throws unless a Clerk identity is attached to the request. */
async function requireUserId(ctx: QueryCtx | MutationCtx) {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) {
    throw new Error('Not signed in')
  }
  return identity.subject
}

/**
 * Loads a todo and verifies the caller owns it.
 *
 * Ownership has to be re-checked on every mutation: `list` only returns the
 * caller's rows, but a client can send any `_id` it likes to `toggle`/`remove`.
 */
async function requireOwnedTodo(ctx: MutationCtx, id: Id<'todos'>) {
  const userId = await requireUserId(ctx)
  const todo = await ctx.db.get(id)

  if (!todo || todo.userId !== userId) {
    // Same error for missing and forbidden, so this can't be used to probe
    // which todo ids exist.
    throw new Error('Todo not found')
  }

  return todo
}

export const list = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) {
      return []
    }

    return await ctx.db
      .query('todos')
      .withIndex('by_user', (q) => q.eq('userId', identity.subject))
      .order('desc')
      .collect()
  },
})

export const add = mutation({
  args: { text: v.string() },
  handler: async (ctx, args) => {
    const userId = await requireUserId(ctx)

    return await ctx.db.insert('todos', {
      text: args.text,
      completed: false,
      userId,
    })
  },
})

export const toggle = mutation({
  args: { id: v.id('todos') },
  handler: async (ctx, args) => {
    const todo = await requireOwnedTodo(ctx, args.id)

    return await ctx.db.patch(args.id, {
      completed: !todo.completed,
    })
  },
})

export const remove = mutation({
  args: { id: v.id('todos') },
  handler: async (ctx, args) => {
    await requireOwnedTodo(ctx, args.id)

    return await ctx.db.delete(args.id)
  },
})
