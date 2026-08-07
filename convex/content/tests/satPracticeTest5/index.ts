import { math1 } from './math1'
import { math2 } from './math2'
import { readingWriting1 } from './readingWriting1'
import { readingWriting2 } from './readingWriting2'
import { scale } from './scale'
import type { Test } from '../../types'

/**
 * SAT Practice Test 5 — 98 questions across four fixed modules.
 *
 * Carries its own `scale` (see `./scale.ts`): both sections were calibrated as
 * moderately harder than Exam 1, a larger adjustment than Test 4's, so a raw
 * count converts higher here than on any earlier form.
 *
 * **Eight missing figures.** Questions carrying a `figureNote` reference a
 * graph, diagram, or scatterplot the source document marked for insertion.
 * They render with a visible placeholder rather than silently appearing
 * answerable — but their answers are keyed, so a student is scored on them.
 */
export const satPracticeTest5: Test = {
  slug: 'sat-practice-5',
  title: 'SAT Practice Test 5',
  description:
    'Full-length practice exam — two Reading and Writing modules and two Math modules.',
  scale,
  modules: [readingWriting1, readingWriting2, math1, math2],
}
