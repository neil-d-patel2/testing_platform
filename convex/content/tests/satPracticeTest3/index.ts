import { math1 } from './math1'
import { math2 } from './math2'
import { readingWriting1 } from './readingWriting1'
import { readingWriting2 } from './readingWriting2'
import type { Test } from '../../types'

/**
 * SAT Practice Test 3 — 98 questions across four fixed modules, same shape as
 * Practice Tests 1 and 2.
 *
 * Transcribed from the tutor's source document, which carried a full answer key
 * with College Board domain and skill codes. Every question is gradable, so
 * both section scores and the 1600 total resolve.
 *
 * **One missing figure.** Math Module 1 question 18 references a rainfall graph
 * the source never included. Its key was blank there too ("cannot determine")
 * and was supplied by the tutor afterward, so the question now scores — but it
 * still renders with a `figureNote` placeholder, because a student cannot
 * actually work it until the graph is inserted.
 */
export const satPracticeTest3: Test = {
  slug: 'sat-practice-3',
  title: 'SAT Practice Test 3',
  description:
    'Full-length practice exam — two Reading and Writing modules and two Math modules.',
  modules: [readingWriting1, readingWriting2, math1, math2],
}
