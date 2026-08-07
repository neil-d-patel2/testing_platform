/**
 * Raw correct counts → scaled SAT scores.
 *
 * The digital SAT reports two section scores of 200–800 that sum to a total of
 * 400–1600. A section score is a function of the *whole* section, not of one
 * module: Reading and Writing modules 1 and 2 are 27 questions each and are
 * looked up together as one count out of 54, and the two Math modules as one
 * count out of 44.
 *
 * The tables below are the tutor's conversion chart, transcribed verbatim.
 * They are indexed by number correct, so `READING_WRITING[54] === 800` and
 * `MATH[0] === 200`.
 *
 * Real SAT scales differ per test form, so this is only the **default**: a
 * `Test` may carry its own `scale`, and Practice Tests 4–6 do — each ships a
 * difficulty-adjusted curve derived from this one. Tests 1–3 have no curve of
 * their own and fall back to the chart here.
 *
 * Contains no question content, so — like `convex/timing.ts` — this module is
 * outside the `convex/content/` fence. Scoring still happens on the server
 * (`attempts.report`) for the same reason grading does: one definition.
 */

export type TestSection = 'reading-writing' | 'math'

/**
 * A full conversion chart: for each section, scaled scores indexed by number
 * correct. Every array must be exactly `questions + 1` long — `sectionScore`
 * refuses to score a section whose length doesn't match the raw count it is
 * handed, which is what stops a mis-transcribed curve from quietly reporting
 * wrong numbers.
 */
export type ScoreScale = Record<TestSection, ReadonlyArray<number>>

export const SECTION_LABELS: Record<TestSection, string> = {
  'reading-writing': 'Reading and Writing',
  math: 'Math',
}

/** Section scores are reported in this order, on the report and everywhere. */
export const SECTION_ORDER: Array<TestSection> = ['reading-writing', 'math']

// Index = number correct. Length is therefore questions + 1.
const READING_WRITING: ReadonlyArray<number> = [
  200, 210, 220, 230, 240, 260, 270, 280, 290, 300, 310, 320, 330, 340, 360,
  370, 380, 390, 400, 410, 420, 430, 440, 460, 470, 480, 490, 500, 510, 520,
  530, 540, 560, 570, 580, 590, 600, 610, 620, 630, 640, 660, 670, 680, 690,
  700, 710, 720, 730, 740, 760, 770, 780, 790, 800,
]

const MATH: ReadonlyArray<number> = [
  200, 210, 230, 240, 250, 270, 280, 300, 310, 320, 340, 350, 360, 380, 390,
  400, 420, 430, 450, 460, 470, 490, 500, 510, 530, 540, 550, 570, 580, 600,
  610, 620, 640, 650, 660, 680, 690, 700, 720, 730, 750, 760, 770, 790, 800,
]

/** Used by any test that doesn't declare a `scale` of its own. */
export const DEFAULT_SCALE: ScoreScale = {
  'reading-writing': READING_WRITING,
  math: MATH,
}

/** How many questions the scale for this section expects. */
export function sectionQuestionCount(
  section: TestSection,
  scale: ScoreScale = DEFAULT_SCALE,
): number {
  return scale[section].length - 1
}

/**
 * The scaled score for `correct` right answers out of `outOf` in `section`.
 *
 * `null` means "don't report a score", and it is not the same as a low one.
 * The table maps a count out of the full section, so a partially graded
 * section — a test whose key is still being filled in, or content that doesn't
 * match the scale's question count — has no honest place on it. Callers show
 * raw counts in that case rather than a score the student didn't earn.
 */
export function sectionScore(
  section: TestSection,
  correct: number,
  outOf: number,
  scale: ScoreScale = DEFAULT_SCALE,
): number | null {
  const row = scale[section]
  if (outOf !== row.length - 1) return null
  if (!Number.isInteger(correct) || correct < 0 || correct > outOf) return null
  return row[correct]
}

/**
 * The 400–1600 total, or `null` if any section is missing a score — a total
 * built from one scored section would read as a catastrophic Math score
 * rather than as an incomplete report.
 */
export function totalScore(
  scores: Array<{ section: TestSection; score: number | null }>,
): number | null {
  if (scores.length !== SECTION_ORDER.length) return null
  if (scores.some((s) => s.score === null)) return null
  return scores.reduce((sum, s) => sum + s.score!, 0)
}
