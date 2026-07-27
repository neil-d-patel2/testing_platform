import { math1 } from './math1'
import { math2 } from './math2'
import { readingWriting1 } from './readingWriting1'
import { readingWriting2 } from './readingWriting2'
import type { Test } from '../../types'

/**
 * SAT Practice Test 1 — 98 questions across four fixed modules.
 *
 * Transcribed from the tutor's source document. Two things that document did
 * not contain, both of which show up in the data:
 *
 * 1. **No answer key.** Every question here omits `correctAnswer` /
 *    `acceptedAnswers`. Students can take the test and their responses are
 *    saved, but nothing can be scored until the key is filled in.
 * 2. **Eight missing figures.** Questions carrying a `figureNote` reference a
 *    graph, diagram, or table that the document marked "pending insertion".
 *    They render with a visible placeholder rather than silently appearing
 *    answerable.
 */
export const satPracticeTest1: Test = {
  slug: 'sat-practice-1',
  title: 'SAT Practice Test 1',
  description:
    'Full-length practice exam — two Reading and Writing modules and two Math modules.',
  modules: [readingWriting1, readingWriting2, math1, math2],
}
