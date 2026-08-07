/**
 * A section score on the 200–800 SAT scale, drawn as an arc meter.
 *
 * This is the "single ratio against a limit" case: one value, a fixed floor and
 * ceiling, no comparison across time or category. The arc is the meter's track,
 * so the unfilled remainder is a lighter step of the same blue ramp rather than
 * a neutral gray — state reads across the whole band that way, and the light
 * step still clears its contrast floor against the white report surface.
 *
 * One accent for every score, never a red-to-green severity ramp: 400 and 1400
 * are the same kind of fact about a practice test, and coloring the low end as
 * "danger" editorializes a number the student is about to work on.
 *
 * The score itself is text in the middle, in ink rather than the arc's blue —
 * the arc carries magnitude, the numeral carries the value, and neither depends
 * on the reader seeing hue.
 */

/** The SAT's fixed per-section floor and ceiling. */
const MIN = 200
const MAX = 800

// Geometry, in the SVG's own units. The arc opens at the bottom: it starts at
// 215°, sweeps 250° clockwise, and ends at −35°, leaving a gap wide enough for
// the end labels to sit under their own ends of the scale.
const START_ANGLE = 215
const SWEEP = 250
const SIZE = 200
const CENTER = SIZE / 2
const RADIUS = 78
const THICKNESS = 14

const TRACK = '#86b6ef'
const FILL = '#184f95'

/** A point on the arc, `t` running 0 (the 200 end) → 1 (the 800 end). */
function pointAt(t: number) {
  const radians = ((START_ANGLE - SWEEP * t) * Math.PI) / 180
  return {
    x: CENTER + RADIUS * Math.cos(radians),
    // SVG's y grows downward, so the sine is subtracted.
    y: CENTER - RADIUS * Math.sin(radians),
  }
}

/** The arc from 0 to `t` as a path. `t === 0` yields nothing to draw. */
function arcTo(t: number): string | null {
  if (t <= 0) return null

  const from = pointAt(0)
  const to = pointAt(t)
  const largeArc = SWEEP * t > 180 ? 1 : 0
  // Sweep flag 1 — decreasing angle is clockwise once y is flipped.
  return `M ${from.x} ${from.y} A ${RADIUS} ${RADIUS} 0 ${largeArc} 1 ${to.x} ${to.y}`
}

export default function ScoreGauge({
  score,
  label,
}: {
  /** 200–800, or `null` when the section couldn't be scored. */
  score: number | null
  /** Names the section, for the accessible description of the arc. */
  label: string
}) {
  const fraction =
    score === null ? 0 : Math.min(1, Math.max(0, (score - MIN) / (MAX - MIN)))
  const fillPath = arcTo(fraction)

  const floor = pointAt(0)
  const ceiling = pointAt(1)

  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE - 30}`}
      className="w-full max-w-[220px]"
      role="img"
      aria-label={
        score === null
          ? `${label}: not scored`
          : `${label}: ${score} out of a possible ${MAX}, on a scale from ${MIN} to ${MAX}`
      }
    >
      <path
        d={arcTo(1)!}
        fill="none"
        stroke={TRACK}
        strokeWidth={THICKNESS}
        strokeLinecap="round"
      />
      {fillPath ? (
        <path
          d={fillPath}
          fill="none"
          stroke={FILL}
          strokeWidth={THICKNESS}
          strokeLinecap="round"
        />
      ) : null}

      {/* Scale ends, tucked just inside the arc's opening. */}
      <text
        x={floor.x}
        y={floor.y + 22}
        textAnchor="middle"
        className="fill-neutral-600 text-[13px] tabular-nums"
      >
        {MIN}
      </text>
      <text
        x={ceiling.x}
        y={ceiling.y + 22}
        textAnchor="middle"
        className="fill-neutral-600 text-[13px] tabular-nums"
      >
        {MAX}
      </text>

      <text
        x={CENTER}
        y={CENTER + 2}
        textAnchor="middle"
        className="fill-black text-[42px] font-semibold tracking-tight"
      >
        {score ?? '—'}
      </text>
      <text
        x={CENTER}
        y={CENTER + 26}
        textAnchor="middle"
        className="fill-neutral-600 text-[12px] font-medium tracking-wider"
      >
        {score === null ? 'NOT SCORED' : 'YOUR SCORE'}
      </text>
    </svg>
  )
}
