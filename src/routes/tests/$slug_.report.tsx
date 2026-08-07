import { convexQuery } from '@convex-dev/react-query'
import { useQuery } from '@tanstack/react-query'
import { Link, createFileRoute, redirect } from '@tanstack/react-router'
import { Check, Minus, X } from 'lucide-react'

import RichText from '#/components/RichText.tsx'
import ScoreGauge from '#/components/ScoreGauge.tsx'
import { CHOICE_LABELS, FOCUS_RING, formatDuration } from '#/lib/exam-ui.ts'
import { api } from '../../../convex/_generated/api'
import type { FunctionReturnType } from 'convex/server'

export const Route = createFileRoute('/tests/$slug_/report')({
  beforeLoad: ({ context }) => {
    if (!context.userId) {
      throw redirect({ to: '/sign-in/$', params: { _splat: '' } })
    }
  },
  component: ReportPage,
})

type Report = NonNullable<FunctionReturnType<typeof api.attempts.report>>
type ReportQuestion = Report['modules'][number]['questions'][number]
type BreakdownRow = Report['byDomain'][number]

/**
 * A response in the form a student reads it: the letter and the choice text
 * for multiple choice, the raw text for a grid-in.
 */
function answerText(question: ReportQuestion, value: string | null) {
  if (value === null) return null

  if (question.type === 'multiple-choice' && question.choices) {
    // Stored answers are choice indices, but the value is just a string in the
    // table — an index from an older version of a question could be past the
    // end of today's choices, so show it raw rather than rendering `undefined`.
    const index = Number(value)
    if (
      !Number.isInteger(index) ||
      index < 0 ||
      index >= question.choices.length
    ) {
      return value
    }
    return `${CHOICE_LABELS[index]}. ${question.choices[index]}`
  }

  return value
}

function ReportPage() {
  const { slug } = Route.useParams()
  const { data: report } = useQuery(
    convexQuery(api.attempts.report, { testSlug: slug }),
  )

  if (report === undefined) {
    return <Shell title="Score report">Loading…</Shell>
  }

  if (report === null) {
    return (
      <Shell title="Score report">
        You haven&rsquo;t taken this test yet.{' '}
        <Link
          to="/tests"
          className={`rounded font-medium text-black underline ${FOCUS_RING}`}
        >
          Back to all tests
        </Link>
      </Shell>
    )
  }

  if (report.status !== 'submitted') {
    return (
      <Shell title={report.testTitle}>
        This test is still in progress — the report is written when you submit.{' '}
        <Link
          to="/tests/$slug"
          params={{ slug }}
          className={`rounded font-medium text-black underline ${FOCUS_RING}`}
        >
          Return to the test
        </Link>
      </Shell>
    )
  }

  const elapsed =
    report.submittedAt === undefined
      ? null
      : (report.submittedAt - report.startedAt) / 1000

  return (
    <div className="min-h-screen bg-white text-black">
      <main className="mx-auto max-w-3xl px-6 py-12">
        <Link
          to="/tests"
          className={`rounded text-sm text-neutral-600 transition-colors hover:text-black ${FOCUS_RING}`}
        >
          ← All tests
        </Link>

        <h1 className="font-display mt-4 text-3xl font-semibold tracking-tight">
          Score report
        </h1>
        <p className="mt-2 text-[15px] text-neutral-600">
          {report.testTitle}
          {report.submittedAt
            ? ` · submitted ${new Date(report.submittedAt).toLocaleString()}`
            : ''}
        </p>

        <section
          aria-label="Summary"
          className="mt-8 rounded-2xl border border-neutral-300 px-6 py-6"
        >
          {report.graded === 0 ? (
            /*
              A test can be transcribed and taken before its answer key is
              supplied. Reporting a 400 would read as 98 wrong answers, so the
              screen says plainly that there is nothing to mark against.
            */
            <>
              <p className="font-display text-2xl font-semibold">Not scored</p>
              <p className="mt-2 text-[15px] leading-relaxed text-neutral-700">
                This test doesn&rsquo;t have an answer key yet, so none of these
                questions can be marked right or wrong. Your responses are
                saved, and your tutor can see them.
              </p>
            </>
          ) : report.totalScore !== null ? (
            /*
              The one hero figure on the page — body sans, not `font-display`,
              and proportional figures: `tabular-nums` pads every digit to the
              width of a zero, which reads as loose spacing at this size.
              Tabular is for the columns of counts further down.
            */
            <>
              <p className="text-5xl font-bold tracking-tight">
                {report.totalScore}
              </p>
              <p className="mt-1 text-[15px] text-neutral-600">
                estimated score out of 1600
              </p>
            </>
          ) : (
            /*
              Some key, but not all of it — the scaled-score chart converts a
              count out of the full section, so there's no honest place to put
              a partial one. Raw counts until the key is complete.
            */
            <>
              <p className="font-display text-4xl font-semibold tabular-nums">
                {report.correct}
                <span className="text-neutral-400"> / {report.graded}</span>
              </p>
              <p className="mt-2 text-[15px] text-neutral-700">
                correct on the {report.graded} questions with an answer key. A
                scaled score needs a key for every question.
              </p>
            </>
          )}

          <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-neutral-200 pt-5 text-sm sm:grid-cols-3">
            <div>
              <dt className="text-neutral-600">Answered</dt>
              <dd className="mt-0.5 font-medium tabular-nums">
                {report.answered} of {report.total}
              </dd>
            </div>
            {elapsed !== null ? (
              <div>
                <dt className="text-neutral-600">Time taken</dt>
                <dd className="mt-0.5 font-medium">
                  {formatDuration(elapsed)}
                </dd>
              </div>
            ) : null}
            {report.graded > 0 ? (
              <div>
                <dt className="text-neutral-600">Correct</dt>
                <dd className="mt-0.5 font-medium tabular-nums">
                  {report.correct}/{report.total}
                </dd>
              </div>
            ) : null}
          </dl>
        </section>

        <h2 className="font-display mt-12 text-lg font-semibold">By section</h2>
        <div className="mt-4 grid gap-8 border-y border-neutral-200 py-8 sm:grid-cols-2 sm:gap-0 sm:divide-x sm:divide-neutral-200">
          {report.sections.map((section) => (
            <div
              key={section.section}
              className="flex flex-col items-center px-4 text-center"
            >
              <h3 className="font-display text-lg font-semibold">
                {section.label}
              </h3>
              <div className="mt-3">
                <ScoreGauge score={section.score} label={section.label} />
              </div>
              <p className="mt-2 text-[15px] text-neutral-700">
                <span className="font-medium tabular-nums">
                  {section.correct} of {section.total}
                </span>{' '}
                correct · {section.answered} answered
              </p>
            </div>
          ))}
        </div>

        {report.byDomain.length > 0 ? (
          <>
            <h2 className="font-display mt-12 text-lg font-semibold">
              By domain
            </h2>
            <AccuracyTable rows={report.byDomain} />
          </>
        ) : null}

        {report.bySkill.length > 0 ? (
          <>
            <h2 className="font-display mt-12 text-lg font-semibold">
              By skill
            </h2>
            <AccuracyTable rows={report.bySkill} />
          </>
        ) : null}

        <h2 className="font-display mt-12 text-lg font-semibold">
          Your answers
        </h2>
        {report.modules.map((module) => (
          <section key={module.id} className="mt-8">
            <h3 className="text-sm font-semibold tracking-wide text-neutral-600 uppercase">
              {module.title}
            </h3>
            <ol className="mt-3 divide-y divide-neutral-200 border-y border-neutral-200">
              {module.questions.map((question) => (
                <li key={question.id} className="flex gap-4 py-4">
                  <Verdict isCorrect={question.isCorrect} />

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-neutral-600">
                      Question {question.number}
                    </p>
                    <p className="mt-1 line-clamp-2 text-[15px] leading-relaxed text-neutral-800">
                      <RichText text={question.prompt} />
                    </p>

                    <p className="mt-2 text-[15px]">
                      <span className="text-neutral-600">Your answer: </span>
                      {question.yourAnswer === null ? (
                        <span className="text-neutral-500 italic">
                          not answered
                        </span>
                      ) : (
                        answerText(question, question.yourAnswer)
                      )}
                    </p>

                    {question.correctAnswer !== null ? (
                      <p className="mt-1 text-[15px]">
                        <span className="text-neutral-600">Correct: </span>
                        {answerText(question, question.correctAnswer)}
                      </p>
                    ) : null}

                    {question.explanation ? (
                      <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                        <RichText text={question.explanation} />
                      </p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </section>
        ))}

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            to="/tests"
            className={`rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-80 ${FOCUS_RING}`}
          >
            Back to all tests
          </Link>
          <Link
            to="/tests/$slug"
            params={{ slug }}
            search={{ retake: true }}
            className={`rounded-full border border-neutral-400 px-6 py-3 text-sm font-medium transition-colors hover:bg-neutral-100 ${FOCUS_RING}`}
          >
            Take it again
          </Link>
        </div>
      </main>
    </div>
  )
}

/**
 * Accuracy rows for a breakdown (by domain or by skill). Ungraded rows (no
 * answer key yet) show the question count with no percentage, same logic as
 * the "Not scored" summary above — a missing key isn't a 0%.
 */
function AccuracyTable({ rows }: { rows: Array<BreakdownRow> }) {
  return (
    <ul className="mt-4 divide-y divide-neutral-200 border-y border-neutral-200">
      {rows.map((row) => {
        const percent =
          row.graded > 0 ? Math.round((row.correct / row.graded) * 100) : null

        return (
          <li key={row.label} className="py-3">
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-[15px]">{row.label}</span>
              <span className="shrink-0 text-sm tabular-nums text-neutral-600">
                {percent !== null
                  ? `${row.correct} of ${row.graded} correct · ${percent}%`
                  : `${row.total} question${row.total === 1 ? '' : 's'} · not scored`}
              </span>
            </div>
            {percent !== null ? (
              <div className="mt-2 h-1.5 rounded-full bg-neutral-100">
                <div
                  className="h-1.5 rounded-full bg-black"
                  style={{ width: `${percent}%` }}
                />
              </div>
            ) : null}
          </li>
        )
      })}
    </ul>
  )
}

/** Right, wrong, or nothing to mark it against. */
function Verdict({ isCorrect }: { isCorrect: boolean | null }) {
  if (isCorrect === null) {
    return (
      <span
        title="No answer key for this question"
        className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-neutral-400"
      >
        <Minus size={14} aria-hidden="true" />
        <span className="sr-only">Not scored</span>
      </span>
    )
  }

  return isCorrect ? (
    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-black text-white">
      <Check size={14} aria-hidden="true" />
      <span className="sr-only">Correct</span>
    </span>
  ) : (
    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-neutral-400 text-neutral-700">
      <X size={14} aria-hidden="true" />
      <span className="sr-only">Incorrect</span>
    </span>
  )
}

/** Centered one-liner, for the states that have no report to show. */
function Shell({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-3 bg-white px-6 text-center text-black">
      <h1 className="font-display text-2xl font-semibold">{title}</h1>
      <p className="max-w-md text-sm leading-relaxed text-neutral-600">
        {children}
      </p>
    </main>
  )
}
