/**
 * Shared bits of the test-taking surface, used by the runner and the score
 * report.
 *
 * Both are the same light reading surface and have to agree on the small
 * things — a choice labelled B in the test must be labelled B in the report.
 */

/**
 * Shared focus treatment. Every interactive element gets one — a keyboard user
 * taking a 98-question exam has no other way to tell where they are.
 */
export const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2'

/** 44px minimum touch target, per WCAG 2.5.5 / platform guidance. */
export const TAP_TARGET = 'min-h-11'

/** Answers are stored as choice indices; these are how they're shown. */
export const CHOICE_LABELS = ['A', 'B', 'C', 'D', 'E', 'F']

export function formatDuration(totalSeconds: number) {
  const minutes = Math.round(totalSeconds / 60)
  if (minutes < 60) return `${minutes} min`

  const hours = Math.floor(minutes / 60)
  const remainder = minutes % 60
  return remainder === 0 ? `${hours} hr` : `${hours} hr ${remainder} min`
}
