/**
 * Time accommodations, and the arithmetic that turns a module's base limit
 * into the deadline a given student actually gets.
 *
 * Unlike `convex/content/`, this module is safe for `src/` to import: it holds
 * multipliers and formatting, no question data and no answer key. The
 * instructions screen needs the same numbers the server enforces, and a second
 * copy of them in `src/` would be a drift waiting to happen.
 */

export const TIME_OPTIONS = ['standard', 'extended50', 'extended100'] as const

export type TimeOption = (typeof TIME_OPTIONS)[number]

/**
 * What each option multiplies a module's base time limit by.
 *
 * Applied per module rather than to the test total, so a student who finishes
 * Reading and Writing early still gets their full extended Math time.
 */
const MULTIPLIERS: Record<TimeOption, number> = {
  standard: 1,
  extended50: 1.5,
  extended100: 2,
}

export const TIME_OPTION_LABELS: Record<TimeOption, string> = {
  standard: 'Standard time',
  extended50: '50% extended time',
  extended100: '100% extended time',
}

export const DEFAULT_TIME_OPTION: TimeOption = 'standard'

/**
 * The time a student on `option` gets for a module whose base limit is
 * `baseSeconds`.
 *
 * Rounded up to a whole minute: 50% of Math's 35 minutes is 52.5, and the
 * accommodation is quoted to students as 53. Rounding down would quietly take
 * thirty seconds off an accommodation someone is entitled to.
 */
export function moduleSeconds(baseSeconds: number, option: TimeOption): number {
  return Math.ceil((baseSeconds * MULTIPLIERS[option]) / 60) * 60
}

/** Narrows an arbitrary string to a `TimeOption`, falling back to standard. */
export function asTimeOption(value: string | undefined): TimeOption {
  return TIME_OPTIONS.includes(value as TimeOption)
    ? (value as TimeOption)
    : DEFAULT_TIME_OPTION
}
