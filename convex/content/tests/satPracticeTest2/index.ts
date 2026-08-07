import { math1 } from './math1'
import { math2 } from './math2'
import { readingWriting1 } from './readingWriting1'
import { readingWriting2 } from './readingWriting2'
import type { Test } from '../../types'

/**
 * SAT Practice Test 2 — 98 questions across four fixed modules, same shape as
 * Practice Test 1.
 *
 * Transcribed from the tutor's source document, which unlike Test 1's *did*
 * carry a full answer key with College Board domain and skill codes, so every
 * question here is gradable and counts toward the report's accuracy-by-domain
 * breakdown.
 *
 * **Seven missing figures.** Questions carrying a `figureNote` reference a
 * graph, diagram, or table that the document marked "pending insertion". They
 * render with a visible placeholder rather than silently appearing answerable.
 */
export const satPracticeTest2: Test = {
  slug: 'sat-practice-2',
  title: 'SAT Practice Test 2',
  description:
    'Full-length practice exam — two Reading and Writing modules and two Math modules.',
  modules: [readingWriting1, readingWriting2, math1, math2],
}
