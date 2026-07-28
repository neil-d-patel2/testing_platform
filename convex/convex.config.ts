import { defineApp } from 'convex/server'
import { v } from 'convex/values'

/**
 * Declares the deployment's environment variables so they are read through the
 * typed `env` export from `./_generated/server` rather than `process.env`.
 *
 * `TUTOR_PASSWORD` gates `convex/tutor.ts`. It is optional here so a fresh
 * deployment still pushes; the tutor functions fail closed when it is unset.
 * Set it with:
 *
 *   npx convex env set TUTOR_PASSWORD '<password>'
 */
const app = defineApp({
  env: {
    TUTOR_PASSWORD: v.optional(v.string()),
  },
})

export default app
