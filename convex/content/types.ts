/**
 * Types for hard-coded test content.
 *
 * These live under `convex/` on purpose. Anything imported from `src/` ends up
 * in the client bundle, where a student could read the answer key out of
 * devtools. Only Convex functions may import this module or the tests in
 * `./tests/`, and they must strip the answer fields before returning a test to
 * a student — see `stripAnswers` in `./index.ts`.
 */

/** A four-option (or however many) multiple choice question. */
export interface MultipleChoiceQuestion {
  type: 'multiple-choice'
  /**
   * Unique within the test and **stable forever** — stored answers point at
   * this. Renumbering a question orphans every past attempt.
   */
  id: string
  /** Markdown. The question itself. */
  prompt: string
  /** Markdown. Optional reading passage, rendered beside the prompt. */
  passage?: string
  choices: Array<string>
  /** Index into `choices`. */
  correctAnswer: number
  /** Markdown. Released only after the attempt is submitted. */
  explanation?: string
}

/** A student-produced response ("grid-in") question — no choices. */
export interface GridInQuestion {
  type: 'grid-in'
  id: string
  prompt: string
  passage?: string
  /**
   * Every spelling that counts as correct, e.g. `['3/4', '0.75', '.75']`.
   * Compared as trimmed, case-insensitive exact strings.
   */
  acceptedAnswers: Array<string>
  explanation?: string
}

export type Question = MultipleChoiceQuestion | GridInQuestion

/**
 * A timed section. Time is per-module: finishing early does not bank the
 * leftover time for the next one.
 */
export interface TestModule {
  /** Unique within the test, stable. */
  id: string
  title: string
  timeLimitSeconds: number
  questions: Array<Question>
}

export interface Test {
  /** Stable, URL-safe. Stored on attempts, so never change it after release. */
  slug: string
  title: string
  /** One-line description shown on the test list. */
  description?: string
  modules: Array<TestModule>
}

/** A question with every answer field removed — safe to send to a student. */
export type PublicQuestion =
  | Omit<MultipleChoiceQuestion, 'correctAnswer' | 'explanation'>
  | Omit<GridInQuestion, 'acceptedAnswers' | 'explanation'>

/** Test-list metadata. Carries no question content at all. */
export interface TestSummary {
  slug: string
  title: string
  description?: string
  moduleCount: number
  questionCount: number
  totalTimeSeconds: number
}
