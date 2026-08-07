import { math1 } from './math1'
import { math2 } from './math2'
import { readingWriting1 } from './readingWriting1'
import { readingWriting2 } from './readingWriting2'
import { scale } from './scale'
import type { Test } from '../../types'

/**
 * SAT Practice Test 6 — 98 questions across four fixed modules.
 *
 * Carries its own `scale` (see `./scale.ts`), calibrated moderately harder than
 * Exam 1 — the same Reading and Writing curve as Test 5, with a slightly more
 * generous Math column.
 *
 * **Eight missing figures.** Questions carrying a `figureNote` reference a
 * graph, diagram, or dot plot the source document marked for insertion; their
 * answers are keyed, so a student is still scored on them. Math Module 2
 * question 2 is the awkward one: there its four *answer choices* are the
 * missing art, so the question cannot be worked at all as rendered.
 */
export const satPracticeTest6: Test = {
  slug: 'sat-practice-6',
  title: 'SAT Practice Test 6',
  description:
    'Full-length practice exam — two Reading and Writing modules and two Math modules.',
  scale,
  modules: [readingWriting1, readingWriting2, math1, math2],
}
