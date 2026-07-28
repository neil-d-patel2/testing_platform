/**
 * Types for hard-coded test content.
 *
 * These live under `convex/` on purpose. Anything imported from `src/` ends up
 * in the client bundle, where a student could read the answer key out of
 * devtools. Only Convex functions may import this module or the tests in
 * `./tests/`, and they must strip the answer fields before returning a test to
 * a student — see `stripAnswers` in `./index.ts`.
 */

/** A tabular stimulus attached to a question. */
export interface QuestionTable {
  caption?: string
  headers: Array<string>
  rows: Array<Array<string>>
  /** Footnote printed under the table, e.g. a rounding disclaimer. */
  note?: string
}

interface QuestionBase {
  /**
   * Unique within the test and **stable forever** — stored answers point at
   * this. Renumbering a question orphans every past attempt.
   */
  id: string
  /** Source or context line above the passage ("The following text is from…"). */
  passageIntro?: string
  /** The passage or stimulus. Newlines are preserved when rendered. */
  passage?: string
  /** The question itself. Newlines are preserved when rendered. */
  prompt: string
  table?: QuestionTable
  /**
   * Stands in for a figure that hasn't been transcribed yet. Rendered as a
   * visible placeholder so an un-answerable question is obvious rather than
   * silently broken.
   */
  figureNote?: string
  /** Released only after the attempt is submitted. */
  explanation?: string
}

export interface MultipleChoiceQuestion extends QuestionBase {
  type: 'multiple-choice'
  choices: Array<string>
  /**
   * Index into `choices`.
   *
   * Optional because a test can be transcribed and taken before its key is
   * supplied — that is the state Practice Test 1 is in. Scoring must treat a
   * missing key as "not gradable", never as "wrong".
   */
  correctAnswer?: number
}

export interface GridInQuestion extends QuestionBase {
  type: 'grid-in'
  /**
   * Every spelling that counts as correct, e.g. `['3/4', '0.75', '.75']`.
   * Compared as trimmed, case-insensitive exact strings. Optional for the same
   * reason as `correctAnswer`.
   */
  acceptedAnswers?: Array<string>
}

export type Question = MultipleChoiceQuestion | GridInQuestion

/**
 * A timed section. Time is per-module: finishing early does not bank the
 * leftover time for the next one.
 *
 * `timeLimitSeconds` is recorded from the official SAT section lengths but is
 * **not yet enforced** — the attempt runner ignores it. See `SPEC.md`.
 */
export interface TestModule {
  id: string
  title: string
  timeLimitSeconds: number
  /**
   * A mandatory break that follows this module, in seconds. Omitted means the
   * next module starts immediately.
   *
   * Attached to the module rather than hardcoded at the Reading/Writing → Math
   * boundary so a test with a different shape can put its break elsewhere, or
   * have none. Break time is never scaled by a time accommodation — extended
   * time is for working, not resting.
   */
  breakAfterSeconds?: number
  questions: Array<Question>
}

export interface Test {
  /** Stable, URL-safe. Stored on attempts, so never change it after release. */
  slug: string
  title: string
  description?: string
  modules: Array<TestModule>
}

/** A question with every answer field removed — safe to send to a student. */
export type PublicQuestion =
  | Omit<MultipleChoiceQuestion, 'correctAnswer' | 'explanation'>
  | Omit<GridInQuestion, 'acceptedAnswers' | 'explanation'>

/** A module whose questions have been stripped. */
export interface PublicModule {
  id: string
  title: string
  timeLimitSeconds: number
  breakAfterSeconds?: number
  questions: Array<PublicQuestion>
}

/** A whole test, stripped. What the attempt runner renders. */
export interface PublicTest {
  slug: string
  title: string
  description?: string
  modules: Array<PublicModule>
}

/** Test-list metadata. Carries no question content at all. */
export interface TestSummary {
  slug: string
  title: string
  description?: string
  moduleCount: number
  questionCount: number
  totalTimeSeconds: number
}
