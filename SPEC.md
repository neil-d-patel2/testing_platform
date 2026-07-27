# TestPro — build spec

The brief for whoever (or whatever) builds the next slice. Read `CLAUDE.md`
first for the project's landmines, then this.

## What we're building

A self-hosted SAT practice-test platform, to replace a $400/yr subscription with
the tutor's own tests.

The whole product is one flow:

> **A student signs in → sees the list of tests → takes one → gets a score and a
> review.**

That's it. No test-builder UI, no marketplace, no classes, no messaging. Tests
are **hard-coded by the tutor** — authored as files in the repo and shipped on
deploy. Adding a test is a commit, not a form.

## The single most important constraint

**Answer keys must never reach the browser.**

If test content is imported from `src/`, it gets bundled into the client JS and
any student can open devtools and read every correct answer. This makes the
whole platform pointless.

So:

- Test content lives under `convex/content/` and is imported **only** by Convex
  functions.
- The query that serves a test to a student strips `correctAnswer` and
  `explanation` from every question before returning.
- Grading happens in a Convex mutation, server-side.
- Explanations and the answer key are released only once the attempt's status is
  `submitted`, via a separate query that checks that status.

Anything that violates this is a bug, not a tradeoff.

## Authoring format

One file per test in `convex/content/tests/`, plus a barrel that registers them
in `convex/content/index.ts`. Types in `convex/content/types.ts`.

```ts
export const satPractice1: Test = {
  slug: 'sat-practice-1', // stable, used in URLs and stored on attempts
  title: 'SAT Practice Test 1',
  modules: [
    {
      id: 'rw-1',
      title: 'Reading and Writing — Module 1',
      timeLimitSeconds: 32 * 60,
      questions: [
        {
          id: 'rw-1-q1', // unique within the test, stable forever
          prompt: '...', // markdown
          passage: '...', // optional markdown, rendered beside the prompt
          type: 'multiple-choice',
          choices: ['...', '...', '...', '...'],
          correctAnswer: 1, // index
          explanation: '...', // markdown, shown only after submit
        },
        {
          id: 'math-1-q8',
          prompt: '...',
          type: 'grid-in', // student-produced response
          acceptedAnswers: ['3/4', '0.75', '.75'], // any exact string match
          explanation: '...',
        },
      ],
    },
    // ...more modules
  ],
}
```

Question ids must be stable across edits — they're the key that stored student
answers point at. Renumbering a question orphans every past attempt.

Keep the module structure configurable rather than hardcoding the four real SAT
modules; the tutor's tests may not match the official shape. **Do not implement
the SAT's adaptive second-module logic** — every student gets the same modules
in the same order.

## Timing must be server-authoritative

A countdown in React is a decoration. A student can pause JS, edit state, or
reload. The server decides.

- On start, the mutation writes `startedAt` and computes `expiresAt` for the
  current module from `timeLimitSeconds`. The client's countdown is derived from
  `expiresAt`, not counted locally.
- Every answer-saving mutation rejects writes for a module whose `expiresAt` has
  passed.
- Time is per-module, not per-test. Finishing a module early does **not** bank
  the leftover time.
- Advancing a module is one-way. No going back to a finished module.
- Within the active module the student can move freely between questions, change
  answers, and flag questions for review.
- A reload mid-test resumes exactly where they were, with the correct time
  remaining. Do not lose answers on refresh — save each answer as it changes.

## Data model

Add to `convex/schema.ts`:

```ts
attempts: defineTable({
  userId: v.string(),        // Clerk identity.subject — from the JWT, never an arg
  testSlug: v.string(),
  status: v.union(v.literal('in_progress'), v.literal('submitted')),
  currentModuleIndex: v.number(),
  moduleExpiresAt: v.number(), // ms epoch, for currentModuleIndex
  startedAt: v.number(),
  submittedAt: v.optional(v.number()),
  score: v.optional(v.object({ correct: v.number(), total: v.number() })),
})
  .index('by_user', ['userId'])
  .index('by_user_and_test', ['userId', 'testSlug']),

answers: defineTable({
  attemptId: v.id('attempts'),
  questionId: v.string(),
  value: v.string(),         // choice index as string, or the grid-in text
  flagged: v.boolean(),
}).index('by_attempt', ['attemptId'])
  .index('by_attempt_and_question', ['attemptId', 'questionId']),
```

Store the score as raw correct/total. **Skip scaled 400–1600 scoring for now** —
the official conversion differs per test form and we don't have the tutor's
curves. Flag it as a follow-up; don't invent a curve.

## Security rules, non-negotiable

`CLAUDE.md` covers this and it applies to every function here:

- Identity comes from `ctx.auth.getUserIdentity()`. Never accept a `userId`
  argument — args are client-controlled.
- Every mutation that touches an attempt re-checks `attempt.userId ===
identity.subject`. A client can post any `_id`; filtering in a `list` query is
  not authorization.
- The grading mutation is the only thing that writes `score`.
- Submitting an already-submitted attempt is a no-op, not a re-grade.

## Routes

| Route                  | What it does                                                                            |
| ---------------------- | --------------------------------------------------------------------------------------- |
| `/` (exists)           | Landing page. Signed-in users get a CTA into `/tests`.                                  |
| `/tests`               | Auth-gated. Lists tests with per-test status: not started / in progress / a past score. |
| `/tests/$slug`         | Pre-test screen: title, module count, total time, rules. "Begin" starts the attempt.    |
| `/tests/$slug/attempt` | The test itself. One question at a time, timer, palette, flags.                         |
| `/tests/$slug/review`  | Post-submit: score, per-question correct/incorrect, explanations.                       |

Auth-gate in the route's `beforeLoad` using the `userId` already on the root
route context — redirect to `/sign-in` when absent. Don't gate with `Show`
alone; it renders `null` while auth resolves, so the page would flash empty.

After `/tests` exists, wire the landing hero's signed-in CTA to it — right now
the signed-in branch renders nothing.

## Test-taking UI

Dark, focused, distraction-free — it should feel like the real thing. Reuse the
existing `.liquid-glass` treatment and Instrument Serif headings so it matches
the landing page.

- Timer top-right. Turns amber under 5 minutes, red under 1. No flashing.
- Question palette showing answered / unanswered / flagged at a glance, plus
  direct navigation to any question in the current module.
- Two-pane layout when a question has a passage; single column when it doesn't.
- Confirm before submitting a module, and say how many questions are unanswered.
- When time expires, auto-advance. Don't silently discard the module.

## Build order

Ship these as separate reviewable steps, each ending green on
`pnpm typecheck && pnpm lint && pnpm check && pnpm build`:

1. ~~**Content layer**~~ — **done.** `convex/content/{types,index}.ts` plus a
   placeholder test in `convex/content/tests/`. Still needs the tutor's real
   tests transcribed in place of the placeholder.
2. **Schema + Convex functions** — attempts, answers, start/save/advance/submit,
   the answer-stripping read query, and the post-submit review query. This is
   where the security rules land. (`convex/tests.ts` currently has only `list`.)
3. **`/tests` list + pre-test screen** — the list is **done** and auth-gated;
   the pre-test screen and `/tests/$slug` are not built.
4. **The attempt runner** — the timer, navigation, flags, autosave, resume.
5. **The review screen.**
6. **Cleanup** — delete `todos` from the schema, `convex/todos.ts`, and their
   README references once nothing depends on them.

## Open questions for the tutor

Answer these before step 1 — they change the data model:

1. What shape are your tests actually in right now (Google Doc, PDF, Word,
   spreadsheet)? That decides how much of step 1 is transcription.
2. How many modules per test, and what time limit each?
3. Any math grid-in questions, or is everything multiple choice?
4. Should a student be able to retake a test, and if so does the old attempt
   stay in the history?
5. Do you want to see your students' results, or is this student-facing only?
   (A tutor dashboard is real scope — out of the flow above.)
