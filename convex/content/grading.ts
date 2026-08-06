/**
 * Marking a response against the answer key.
 *
 * Lives under `convex/content/` because it reads `correctAnswer` and
 * `acceptedAnswers`, and everything that touches those sits behind the same
 * fence: this module must never be imported from `src/`. The student's report
 * and the tutor's grading view both call it, so there is exactly one
 * definition of "correct" in the codebase — the tutor page used to compare a
 * response against the joined accepted-answers string in the browser, which
 * marked every multi-spelling grid-in wrong.
 */

import type { Question } from './types'

/**
 * Whether a response is right.
 *
 * `null` means the question carries no key, which is **not** the same as
 * wrong — a test can be transcribed and taken before its key is supplied, and
 * reporting those as incorrect would invent a score out of missing content.
 * An unanswered question with a key is `false`: not correct, and there is
 * nothing provisional about it.
 */
export function gradeResponse(
  question: Question,
  response: string | null,
): boolean | null {
  if (question.type === 'multiple-choice') {
    if (question.correctAnswer === undefined) return null
    return response !== null && Number(response) === question.correctAnswer
  }

  const accepted = question.acceptedAnswers
  if (!accepted || accepted.length === 0) return null
  if (response === null) return false

  // Grid-ins are compared as trimmed, case-insensitive strings, and any of the
  // accepted spellings counts — `['1.2', '6/5']` are the same answer written
  // two ways, not two different answers.
  const normalized = response.trim().toLowerCase()
  return accepted.some((value) => value.trim().toLowerCase() === normalized)
}

/**
 * The key in the same shape a stored answer takes — a choice index for
 * multiple choice, the accepted spellings for a grid-in — or `null` when the
 * question has no key. For display only; `gradeResponse` decides correctness.
 */
export function displayKey(question: Question): string | null {
  if (question.type === 'multiple-choice') {
    return question.correctAnswer === undefined
      ? null
      : String(question.correctAnswer)
  }
  return question.acceptedAnswers?.length
    ? question.acceptedAnswers.join(' or ')
    : null
}
