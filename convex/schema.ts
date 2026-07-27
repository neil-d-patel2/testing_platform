import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
  todos: defineTable({
    text: v.string(),
    completed: v.boolean(),
    // Clerk user id (`identity.subject`) that owns this todo.
    userId: v.string(),
  }).index('by_user', ['userId']),
})
