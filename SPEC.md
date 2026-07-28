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

**Built.** See `convex/timing.ts` and the timing half of `convex/attempts.ts`;
what follows is the rule it implements.

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
  answers, and flag questions for review. (Flagging is still to do.)
- A reload mid-test resumes exactly where they were, with the correct time
  remaining. Do not lose answers on refresh — save each answer as it changes.

Two things the build added on top of this:

- **A job scheduled at the deadline** (`expireModule`) closes the module out,
  so a closed browser doesn't pause the test. It chains: walk away for three
  hours and the attempt auto-submits on its own.
- **Time accommodations.** Students pick standard / 50% / 100% extended on the
  instructions screen, which scales each module's limit and is fixed for the
  sitting. Extended time never scales a break.

## Data model

What shipped in `convex/schema.ts` follows this closely, with three
differences: every timing field is `v.optional` (a required one would have
rejected the rows already in the table), `timeOption` and `breakEndsAt` were
added for accommodations and the break, and there is no `score` column —
`attempts.report` grades on read, so a key added later re-scores old attempts
instead of leaving them stamped with a score from before it existed. `flagged`
on `answers` is not built yet.

The original sketch:

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

Built as four screens behind two routes rather than the five below: `/tests/
$slug` is a single route that shows the instructions, the running test, the
break, or the "submitted" screen depending on the attempt's state, and the
review lives at `/tests/$slug/report`.

| Route                 | What it does                                                                                           |
| --------------------- | ------------------------------------------------------------------------------------------------------ |
| `/`                   | Landing page. Signed-in users get a CTA into `/tests`.                                                 |
| `/tests`              | Auth-gated. Lists tests with per-test status: not started / in progress / submitted.                   |
| `/tests/$slug`        | Instructions and time choice → the test → the break → submitted. `?retake=1` reopens the instructions. |
| `/tests/$slug/report` | Post-submit: score (or "not scored"), per-section and per-question breakdown, explanations.            |
| `/tutor`              | Password-gated, checked server-side. Every student's attempt, with responses beside the key.           |

Auth-gate in the route's `beforeLoad` using the `userId` already on the root
route context — redirect to `/sign-in` when absent. Don't gate with `Show`
alone; it renders `null` while auth resolves, so the page would flash empty.

After `/tests` exists, wire the landing hero's signed-in CTA to it — right now
the signed-in branch renders nothing.

## Test-taking UI

Focused and distraction-free — it should feel like the real thing.

**This asked for dark, and it was built light.** An hour of passage reading on
a black background is punishing, and Bluebook itself is light. The rest of the
app stays dark; see the note in `CLAUDE.md` before "unifying" them.

- Timer top-right. Turns amber under 5 minutes, red under 1. No flashing.
- Question palette showing answered / unanswered / flagged at a glance, plus
  direct navigation to any question in the current module.
- Two-pane layout when a question has a passage; single column when it doesn't.
- Confirm before submitting a module, and say how many questions are unanswered.
- When time expires, auto-advance. Don't silently discard the module.

## Build order

Ship these as separate reviewable steps, each ending green on
`pnpm typecheck && pnpm lint && pnpm check && pnpm build`:

1. ~~**Content layer**~~ — **done.** SAT Practice Test 1 is transcribed in
   `convex/content/tests/satPracticeTest1/`: 98 questions across four modules.
   **Missing its answer key** — see below.
2. ~~**Schema + Convex functions**~~ — **done.** `attempts` + `answers` tables;
   `attempts.{start,retake,getActive,saveAnswer,clearAnswer,advanceModule,
endBreak,submit,report}` plus the scheduled `expireModule` / `finishBreak`;
   `tests.get` serves the stripped test.
3. ~~**`/tests` list**~~ — **done** and auth-gated.
4. ~~**The attempt runner**~~ — **done**, bar flagging. Instructions screen with
   a time choice, a server-enforced per-section timer that auto-submits, the
   mandatory break, sections locked in order, and submit on the last question.
   **Question flagging is the one thing here still to build.**
5. ~~**The review screen**~~ — **done** at `/tests/$slug/report`, and reports
   "not scored" until a key exists. Grading is written and unexercised: the
   moment a `correctAnswer` lands in the content it starts marking.
6. **Cleanup** — delete `todos` from the schema, `convex/todos.ts`, and their
   README references once nothing depends on them.

## Blocking: Practice Test 1 has no answer key

The source document contained questions and choices only — no correct answers.
`correctAnswer` and `acceptedAnswers` are therefore **optional** in the types,
and every question in Practice Test 1 omits them. Consequences:

- Nothing can be scored. `submit` marks the attempt finished and writes no score.
- Scoring treats a missing key as **"not gradable"**, never as "wrong" —
  otherwise a keyless test silently reports 0/98. `attempts.report` grades to
  `null` per question and the report screen says "Not scored". Filling in the
  key is the only thing needed to turn that into a real score.

Eight questions also reference a figure the document marked "pending insertion"
(a graph, five diagrams, two tables). They carry a `figureNote` and render a
visible placeholder, so they're obviously un-answerable rather than quietly
broken. Both gaps are filled by editing the content files — no schema change.

## Open questions for the tutor

1. Where is the answer key for Practice Test 1, and the eight missing figures?
   This is the only thing standing between the report screen and a real score.
2. ~~Should a student be able to retake a test?~~ **Yes** — `attempts.retake`
   opens a fresh attempt and keeps the old one, since the tutor may not have
   looked at it yet.
3. ~~Should the four modules lock in order?~~ **Yes** — one-way, with a
   mandatory ten-minute break between Reading and Writing and Math.
4. ~~Do you want to see your students' results?~~ **Yes** — `/tutor`, behind a
   shared password checked server-side.
5. Who decides a student's time accommodation? Right now the student picks it
   themselves each sitting, on the honour system. If it needs to be assigned by
   the tutor, that's a per-student setting and a new table.
6. Should the report show a scaled 400–1600 score once a key exists? Still
   blocked on the tutor's curves — see "Store the score as raw correct/total".
