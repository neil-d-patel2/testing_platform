import { math1 } from './math1'
import { math2 } from './math2'
import { readingWriting1 } from './readingWriting1'
import { readingWriting2 } from './readingWriting2'
import { scale } from './scale'
import type { Test } from '../../types'

/**
 * SAT Practice Test 4 — 98 questions across four fixed modules.
 *
 * The first test to carry its own `scale`. Tests 1–3 are scored against the
 * shared default chart in `convex/scoring.ts`; this form was calibrated as
 * slightly harder, so it ships the tutor's adjusted curve and a raw count here
 * converts a little higher than the same count on Tests 1–3. See `./scale.ts`.
 *
 * **Six missing figures.** Questions carrying a `figureNote` reference a graph,
 * diagram, or scatterplot the source document marked for insertion. They render
 * with a visible placeholder rather than silently appearing answerable — but
 * note that their answers *are* keyed, so a student is scored on them.
 */
export const satPracticeTest4: Test = {
  slug: 'sat-practice-4',
  title: 'SAT Practice Test 4',
  description:
    'Full-length practice exam — two Reading and Writing modules and two Math modules.',
  scale,
  modules: [readingWriting1, readingWriting2, math1, math2],
}
