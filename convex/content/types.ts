/**
 * Types for hard-coded test content.
 *
 * These live under `convex/` on purpose. Anything imported from `src/` ends up
 * in the client bundle, where a student could read the answer key out of
 * devtools. Only Convex functions may import this module or the tests in
 * `./tests/`, and they must strip the answer fields before returning a test to
 * a student — see `stripAnswers` in `./index.ts`.
 */

import type { ScoreScale, TestSection } from '../scoring'

export type { ScoreScale, TestSection }

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
  /**
   * College Board content domain, e.g. "Craft and Structure". Used for the
   * report's accuracy-by-domain breakdown. Not answer-revealing, so unlike
   * `correctAnswer`/`explanation` it is safe to send to the student.
   */
  domain?: string
  /** College Board skill within the domain, e.g. "Words in Context". */
  skill?: string
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
 * `timeLimitSeconds` is the standard-time length, taken from the official SAT
 * sections. It is scaled by the student's accommodation (`convex/timing.ts`)
 * into the deadline `convex/attempts.ts` enforces.
 */
export interface TestModule {
  id: string
  title: string
  /**
   * Which scored section this module counts toward. Modules sharing a section
   * have their correct answers added together before the scaled-score table in
   * `convex/scoring.ts` is applied — a section score is a function of all 54
   * (or 44) questions, never of one module.
   */
  section: TestSection
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
  /**
   * This form's raw-to-scaled conversion chart. Omitted means the shared
   * default in `convex/scoring.ts`.
   *
   * A harder form earns more scaled points for the same raw count, so a test
   * calibrated against its own difficulty must carry its own curve or its
   * scores are simply wrong. Never edit a released test's curve: past reports
   * were generated from it, and a student who reopens one would see a
   * different score than the one they were shown.
   */
  scale?: ScoreScale
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
