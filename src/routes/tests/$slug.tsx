import { convexQuery } from '@convex-dev/react-query'
import { useMutation } from 'convex/react'
import { useQuery, useSuspenseQuery } from '@tanstack/react-query'
import { Link, createFileRoute, redirect } from '@tanstack/react-router'
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  Coffee,
  ImageOff,
  LayoutGrid,
  TriangleAlert,
} from 'lucide-react'
import { Fragment, useCallback, useEffect, useRef, useState } from 'react'

import RichText from '#/components/RichText.tsx'
import {
  CHOICE_LABELS,
  FOCUS_RING,
  TAP_TARGET,
  formatDuration,
} from '#/lib/exam-ui.ts'
import { api } from '../../../convex/_generated/api'
import {
  DEFAULT_TIME_OPTION,
  TIME_OPTIONS,
  TIME_OPTION_LABELS,
  moduleSeconds,
} from '../../../convex/timing'
import type { FunctionReturnType } from 'convex/server'
import type { TimeOption } from '../../../convex/timing'
import type { Id } from '../../../convex/_generated/dataModel'

export const Route = createFileRoute('/tests/$slug')({
  /*
   * `?retake` arrives from the Retake button on the tests list and from the
   * score report. It reopens the instructions screen over a finished attempt
   * so the student re-picks their time; without it, a finished attempt shows
   * the submitted screen.
   *
   * The router parses search values as JSON, so `?retake=true` arrives as a
   * boolean and `?retake=1` as a number. Both are accepted, along with their
   * quoted forms, so a hand-typed URL does what it looks like it does.
   */
  validateSearch: (search: Record<string, unknown>): { retake?: boolean } => {
    const value = search.retake
    const on =
      value === true || value === 1 || value === 'true' || value === '1'
    return on ? { retake: true } : {}
  },
  beforeLoad: ({ context }) => {
    if (!context.userId) {
      throw redirect({ to: '/sign-in/$', params: { _splat: '' } })
    }
  },
  loader: ({ context, params }) =>
    context.queryClient.ensureQueryData(
      convexQuery(api.tests.get, { slug: params.slug }),
    ),
  component: TestPage,
})

/** The stripped test and the live attempt, as the server hands them over. */
type PublicTest = NonNullable<FunctionReturnType<typeof api.tests.get>>
type ActiveAttempt = NonNullable<
  FunctionReturnType<typeof api.attempts.getActive>
>

/** How long to wait after the last keystroke before saving a grid-in answer. */
const TYPING_SAVE_DELAY_MS = 600

/** `M:SS`, the shape a countdown is read at a glance. */
function formatClock(ms: number) {
  const total = Math.max(0, Math.ceil(ms / 1000))
  const minutes = Math.floor(total / 60)
  const seconds = total % 60
  return `${minutes}:${String(seconds).padStart(2, '0')}`
}

function testSeconds(test: PublicTest, option: TimeOption) {
  return test.modules.reduce(
    (total, m) => total + moduleSeconds(m.timeLimitSeconds, option),
    0,
  )
}

/**
 * Picks between the three states this route can be in: not started, running,
 * finished. Kept separate from the runner so the runner can assume it has a
 * live attempt rather than guarding every field.
 */
function TestPage() {
  const { slug } = Route.useParams()
  const { retake } = Route.useSearch()
  const { data: test } = useSuspenseQuery(convexQuery(api.tests.get, { slug }))
  const { data: attempt } = useQuery(
    convexQuery(api.attempts.getActive, { testSlug: slug }),
  )

  if (!test) {
    return (
      <Centered>
        <h1 className="font-display text-2xl font-semibold text-black">
          Test not found
        </h1>
        <Link
          to="/tests"
          className={`rounded text-sm text-black underline ${FOCUS_RING}`}
        >
          Back to practice tests
        </Link>
      </Centered>
    )
  }

  /*
   * `undefined` is "the attempt query hasn't answered yet", `null` is "there
   * is no attempt". They must not be collapsed: showing the instructions
   * screen to someone who is mid-test, even for a frame, invites them to click
   * Begin on a test they already started.
   */
  if (attempt === undefined) {
    return (
      <Centered>
        <p className="text-sm text-neutral-600">Loading {test.title}…</p>
      </Centered>
    )
  }

  if (attempt === null || (attempt.status === 'submitted' && retake)) {
    return <Instructions slug={slug} test={test} isRetake={attempt !== null} />
  }

  if (attempt.status === 'submitted') {
    return <Submitted slug={slug} attempt={attempt} />
  }

  /*
   * `breakEndsAt` is cleared server-side when the break elapses, so this is a
   * plain read of a flag rather than a clock comparison — no chance of
   * rendering the questions for a frame before deciding the student is
   * actually on a break.
   */
  if (attempt.breakEndsAt !== undefined) {
    return <BreakScreen test={test} attempt={attempt} />
  }

  return <AttemptRunner test={test} attempt={attempt} />
}

function Centered({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white px-6 text-center">
      {children}
    </main>
  )
}

/**
 * The screen between picking a test and taking it: what's coming, and how much
 * time the student gets for it.
 *
 * The time choice lives here rather than in a profile setting because it is
 * per-sitting — a student may be entitled to extended time and still want to
 * practise under standard conditions.
 */
function Instructions({
  slug,
  test,
  isRetake,
}: {
  slug: string
  test: PublicTest
  isRetake: boolean
}) {
  const start = useMutation(api.attempts.start)
  const retakeTest = useMutation(api.attempts.retake)
  const [option, setOption] = useState<TimeOption>(DEFAULT_TIME_OPTION)
  const [starting, setStarting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const questionCount = test.modules.reduce((n, m) => n + m.questions.length, 0)

  const begin = async () => {
    setStarting(true)
    setError(null)
    try {
      // `retake` leaves the finished attempt intact and opens a fresh one;
      // `start` would just hand back the old one.
      const run = isRetake ? retakeTest : start
      await run({ testSlug: slug, timeOption: option })
    } catch {
      setError('Could not start the test. Check your connection and try again.')
    } finally {
      setStarting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <main className="mx-auto max-w-2xl px-6 py-12">
        <Link
          to="/tests"
          className={`rounded text-sm text-neutral-600 transition-colors hover:text-black ${FOCUS_RING}`}
        >
          ← All tests
        </Link>

        <h1 className="font-display mt-4 text-3xl font-semibold tracking-tight">
          {test.title}
        </h1>
        {test.description ? (
          <p className="mt-2 text-[15px] leading-relaxed text-neutral-600">
            {test.description}
          </p>
        ) : null}

        <h2 className="font-display mt-10 text-lg font-semibold">
          Choose your time
        </h2>
        <fieldset className="mt-4">
          <legend className="sr-only">Time accommodation</legend>
          <div className="space-y-3">
            {TIME_OPTIONS.map((value) => {
              const selected = value === option
              return (
                <label key={value} className="block cursor-pointer">
                  <input
                    type="radio"
                    name="time-option"
                    value={value}
                    checked={selected}
                    onChange={() => setOption(value)}
                    className="peer sr-only"
                  />
                  <span
                    className={`flex items-center justify-between gap-4 rounded-lg border px-4 py-3.5 transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-black peer-focus-visible:ring-offset-2 ${
                      selected
                        ? 'border-black bg-neutral-50'
                        : 'border-neutral-300 hover:border-neutral-500 hover:bg-neutral-50'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className={`flex size-5 shrink-0 items-center justify-center rounded-full border ${
                          selected ? 'border-black' : 'border-neutral-400'
                        }`}
                      >
                        {selected ? (
                          <span className="size-2.5 rounded-full bg-black" />
                        ) : null}
                      </span>
                      <span className="text-[15px] font-medium">
                        {TIME_OPTION_LABELS[value]}
                      </span>
                    </span>
                    <span className="text-sm text-neutral-600">
                      {formatDuration(testSeconds(test, value))} total
                    </span>
                  </span>
                </label>
              )
            })}
          </div>
        </fieldset>

        <h2 className="font-display mt-10 text-lg font-semibold">
          What to expect
        </h2>
        <ol className="mt-4 divide-y divide-neutral-200 border-y border-neutral-200">
          {test.modules.map((module, index) => (
            <Fragment key={module.id}>
              <li className="flex items-baseline justify-between gap-4 py-3">
                <span className="text-[15px]">
                  <span className="mr-2 text-neutral-500">{index + 1}.</span>
                  {module.title}
                </span>
                <span className="shrink-0 text-sm text-neutral-600">
                  {module.questions.length} questions ·{' '}
                  {formatDuration(
                    moduleSeconds(module.timeLimitSeconds, option),
                  )}
                </span>
              </li>
              {module.breakAfterSeconds ? (
                <li className="flex items-baseline justify-between gap-4 bg-neutral-50 py-3 text-neutral-600">
                  <span className="flex items-center gap-2 text-[15px]">
                    <Coffee size={15} aria-hidden="true" />
                    Break
                  </span>
                  <span className="shrink-0 text-sm">
                    {formatDuration(module.breakAfterSeconds)} · mandatory
                  </span>
                </li>
              ) : null}
            </Fragment>
          ))}
        </ol>
        <p className="mt-3 text-sm text-neutral-600">
          {questionCount} questions in total.
        </p>

        <ul className="mt-8 space-y-2 text-sm leading-relaxed text-neutral-700">
          <li>
            Each section is timed on its own. Finishing early does not add time
            to the next one.
          </li>
          <li>
            <strong className="font-semibold text-black">
              When a section&rsquo;s time runs out it is submitted automatically
            </strong>{' '}
            and the test moves on, whether or not this window is open.
          </li>
          <li>
            Sections run in order. Once one ends you cannot go back to it, but
            within a section you can move between questions freely.
          </li>
          <li>
            The break is mandatory and cannot be skipped or shortened. The
            section after it starts on time on its own.
          </li>
          <li>Answers save as you go — a refresh will not lose them.</li>
        </ul>

        {error ? (
          <p
            role="alert"
            className="mt-6 flex items-start gap-2 rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800"
          >
            <TriangleAlert size={16} aria-hidden="true" className="mt-0.5" />
            {error}
          </p>
        ) : null}

        <button
          type="button"
          onClick={() => void begin()}
          disabled={starting}
          className={`mt-8 w-full rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-80 disabled:opacity-50 ${TAP_TARGET} ${FOCUS_RING}`}
        >
          {starting
            ? 'Starting…'
            : `Begin test — ${TIME_OPTION_LABELS[option].toLowerCase()}`}
        </button>
        <p className="mt-3 text-center text-xs text-neutral-500">
          The timer starts as soon as you begin.
        </p>
      </main>
    </div>
  )
}

/**
 * Where a finished test lands.
 *
 * A screen rather than a button that relabels itself: "Submitted" appearing
 * where "Submit" was is easy to miss, and after two hours of work the student
 * deserves an unambiguous full stop.
 */
function Submitted({
  slug,
  attempt,
}: {
  slug: string
  attempt: ActiveAttempt
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center text-black">
      <span
        aria-hidden="true"
        className="flex size-14 items-center justify-center rounded-full bg-black text-white"
      >
        <Check size={28} />
      </span>

      <h1 className="font-display mt-6 text-3xl font-semibold tracking-tight">
        Test submitted
      </h1>

      <p className="mt-3 max-w-md text-[15px] leading-relaxed text-neutral-600">
        Your answers are in and locked
        {attempt.submittedAt
          ? `, as of ${new Date(attempt.submittedAt).toLocaleString()}`
          : ''}
        . Nothing else is needed from you.
      </p>

      <Link
        to="/tests/$slug/report"
        params={{ slug }}
        className={`mt-8 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-80 ${TAP_TARGET} ${FOCUS_RING}`}
      >
        See score report
      </Link>

      <Link
        to="/tests"
        className={`mt-4 rounded px-2 py-1 text-sm text-neutral-600 underline transition-colors hover:text-black ${FOCUS_RING}`}
      >
        Back to all tests
      </Link>
    </main>
  )
}

/**
 * The mandatory break between sections.
 *
 * There is no skip button on purpose — the break is part of the exam, and the
 * next section's clock was fixed the moment the break began, so cutting it
 * short would buy nothing but a shorter rest.
 */
function BreakScreen({
  test,
  attempt,
}: {
  test: PublicTest
  attempt: ActiveAttempt
}) {
  const endBreak = useMutation(api.attempts.endBreak)
  const attemptId = attempt.attemptId

  const onDone = useCallback(() => {
    // A scheduled job on the server does this too. Calling it from here as
    // well makes the hand-off immediate rather than waiting on that job.
    void endBreak({ attemptId }).catch(() => {})
  }, [endBreak, attemptId])

  const remaining = useCountdown(attempt.breakEndsAt, onDone)
  const nextModule =
    test.modules[Math.min(attempt.currentModuleIndex, test.modules.length - 1)]
  const over = remaining !== null && remaining <= 0

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center text-black">
      <p className="text-sm font-medium tracking-wide text-neutral-600 uppercase">
        Break
      </p>

      <p
        role="timer"
        aria-live="off"
        className="font-display mt-4 text-7xl font-semibold tabular-nums"
      >
        <span className="sr-only">Time left in your break: </span>
        {remaining === null ? '—' : formatClock(remaining)}
      </p>

      <p className="mt-6 max-w-md text-[15px] leading-relaxed text-neutral-700">
        {over ? (
          <>Starting {nextModule.title}…</>
        ) : (
          <>
            Your test resumes automatically with{' '}
            <strong className="font-semibold text-black">
              {nextModule.title}
            </strong>
            . You can leave this screen — the break runs on its own and cannot
            be shortened.
          </>
        )}
      </p>

      <p className="mt-8 max-w-md text-sm leading-relaxed text-neutral-500">
        Don&rsquo;t close this tab if you can help it. The section after the
        break starts on time whether or not it&rsquo;s open.
      </p>
    </main>
  )
}

/**
 * Ticks a countdown against an absolute deadline and calls `onExpire` once
 * when it passes.
 *
 * Starts at `null` rather than reading the clock during render, so the server
 * pass and the first client render agree. Nothing here is authoritative: the
 * server refuses late writes on its own, and this only decides what the
 * student sees and when the client asks to move on.
 */
function useCountdown(expiresAt: number | undefined, onExpire: () => void) {
  const [remaining, setRemaining] = useState<number | null>(null)

  // Held in a ref so a new callback identity each render doesn't restart the
  // interval (and re-fire the tick) on every keystroke.
  const onExpireRef = useRef(onExpire)
  useEffect(() => {
    onExpireRef.current = onExpire
  })

  useEffect(() => {
    if (expiresAt === undefined) {
      setRemaining(null)
      return
    }

    let fired = false
    const tick = () => {
      const left = expiresAt - Date.now()
      setRemaining(left)
      if (left <= 0 && !fired) {
        fired = true
        onExpireRef.current()
      }
    }

    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [expiresAt])

  return remaining
}

function AttemptRunner({
  test,
  attempt,
}: {
  test: PublicTest
  attempt: ActiveAttempt
}) {
  const saveAnswer = useMutation(api.attempts.saveAnswer)
  const clearAnswer = useMutation(api.attempts.clearAnswer)
  const advanceModule = useMutation(api.attempts.advanceModule)
  const submit = useMutation(api.attempts.submit)

  const [questionIndex, setQuestionIndex] = useState(0)
  const [paletteOpen, setPaletteOpen] = useState(false)
  const [confirmingSubmit, setConfirmingSubmit] = useState(false)
  const [confirmingAdvance, setConfirmingAdvance] = useState(false)
  const [saveFailed, setSaveFailed] = useState(false)

  /*
   * Local echo of what the student just did, layered over the server's copy.
   * Without it, every click would wait a round trip before the choice looked
   * selected. Server values win for anything not touched this session.
   */
  const [draft, setDraft] = useState<Record<string, string>>({})
  const saveTimers = useRef<Record<string, ReturnType<typeof setTimeout>>>({})
  const pending = useRef<Record<string, string>>({})

  const attemptId: Id<'attempts'> = attempt.attemptId

  // The server owns which module is open; this is a read of that, not a
  // preference. Clamped because content can be edited under a live attempt.
  const moduleIndex = Math.min(
    attempt.currentModuleIndex,
    test.modules.length - 1,
  )
  const currentModule = test.modules[moduleIndex]

  // A new module is a new first question, and any stale "not saved" warning
  // belongs to the section that just closed.
  useEffect(() => {
    setQuestionIndex(0)
    setPaletteOpen(false)
    setConfirmingAdvance(false)
    setSaveFailed(false)
  }, [moduleIndex])

  useEffect(() => {
    const timers = saveTimers.current
    return () => {
      for (const timer of Object.values(timers)) clearTimeout(timer)
    }
  }, [])

  // A popover that can't be dismissed from the keyboard is a keyboard trap.
  useEffect(() => {
    if (!paletteOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setPaletteOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [paletteOpen])

  const persist = useCallback(
    (questionId: string, value: string) => {
      delete pending.current[questionId]
      const write =
        value.trim() === ''
          ? clearAnswer({ attemptId, questionId })
          : saveAnswer({ attemptId, questionId, value })

      /*
       * A rejection here is nearly always the module deadline passing between
       * the click and the write, which is correct behaviour — but it can also
       * be a dropped connection, and an exam that loses an answer silently is
       * worse than one that says so.
       */
      void write.then(
        () => setSaveFailed(false),
        () => setSaveFailed(true),
      )
    },
    [attemptId, saveAnswer, clearAnswer],
  )

  const setAnswer = useCallback(
    (questionId: string, value: string, debounce = false) => {
      setDraft((current) => ({ ...current, [questionId]: value }))

      clearTimeout(saveTimers.current[questionId])
      if (debounce) {
        pending.current[questionId] = value
        saveTimers.current[questionId] = setTimeout(
          () => persist(questionId, value),
          TYPING_SAVE_DELAY_MS,
        )
      } else {
        persist(questionId, value)
      }
    },
    [persist],
  )

  /** Writes a pending keystroke immediately, e.g. when the input loses focus. */
  const flush = useCallback(
    (questionId: string, value: string) => {
      clearTimeout(saveTimers.current[questionId])
      persist(questionId, value)
    },
    [persist],
  )

  /** Writes every debounced keystroke still in flight. Used before a module closes. */
  const flushAll = useCallback(() => {
    for (const [questionId, value] of Object.entries(pending.current)) {
      clearTimeout(saveTimers.current[questionId])
      persist(questionId, value)
    }
  }, [persist])

  const endModule = useCallback(() => {
    flushAll()
    void advanceModule({ attemptId, moduleIndex }).catch(() => {
      // The expiry job may have got there first, which is the same outcome.
    })
  }, [advanceModule, attemptId, flushAll, moduleIndex])

  const remaining = useCountdown(attempt.moduleExpiresAt, endModule)

  const question = currentModule.questions[questionIndex]
  const answers = { ...attempt.answers, ...draft }
  const value = answers[question.id] ?? ''

  const moduleAnswered = currentModule.questions.filter(
    (q) => (answers[q.id] ?? '') !== '',
  ).length

  const totalAnswered = test.modules.reduce(
    (n, m) =>
      n + m.questions.filter((q) => (answers[q.id] ?? '') !== '').length,
    0,
  )
  const totalQuestions = test.modules.reduce(
    (n, m) => n + m.questions.length,
    0,
  )

  const isLastModule = moduleIndex === test.modules.length - 1
  const isFirstQuestion = questionIndex === 0
  const isLastQuestion = questionIndex === currentModule.questions.length - 1

  const goPrevious = () => {
    if (questionIndex > 0) setQuestionIndex(questionIndex - 1)
  }

  const goNext = () => {
    if (!isLastQuestion) {
      setQuestionIndex(questionIndex + 1)
    } else if (!isLastModule) {
      setConfirmingAdvance(true)
    }
  }

  /*
   * Passage questions get a two-column split so neither column runs past a
   * comfortable reading measure; questions without one stay centered and
   * narrow. `max-w-prose` (~65ch) does the actual constraining in both.
   */
  const hasStimulus = Boolean(
    question.passage || question.passageIntro || question.table,
  )

  const stimulus = (
    <div className="max-w-prose">
      {question.passageIntro ? (
        <p className="text-[15px] leading-relaxed text-neutral-600">
          <RichText text={question.passageIntro} />
        </p>
      ) : null}

      {question.passage ? (
        <div className="mt-4 text-[17px] leading-[1.7] whitespace-pre-line text-black">
          <RichText text={question.passage} />
        </div>
      ) : null}

      {question.table ? (
        <figure className="mt-6 overflow-x-auto">
          {question.table.caption ? (
            <figcaption className="mb-2 text-sm font-semibold text-black">
              {question.table.caption}
            </figcaption>
          ) : null}
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr>
                {question.table.headers.map((header) => (
                  <th
                    key={header}
                    scope="col"
                    className="border border-neutral-300 bg-neutral-100 px-3 py-2 font-semibold text-black"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {question.table.rows.map((row) => (
                <tr key={row.join('|')}>
                  {row.map((cell) => (
                    <td
                      key={cell}
                      className="border border-neutral-300 px-3 py-2 align-top text-black"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {question.table.note ? (
            <p className="mt-2 text-sm text-neutral-600">
              {question.table.note}
            </p>
          ) : null}
        </figure>
      ) : null}
    </div>
  )

  const questionBody = (
    <div className="max-w-prose">
      <p className="text-sm font-medium text-neutral-600">
        Question {questionIndex + 1} of {currentModule.questions.length}
      </p>

      {question.figureNote ? (
        <p
          role="note"
          className="mt-4 flex items-start gap-2 border-l-2 border-black bg-neutral-100 px-4 py-3 text-sm text-neutral-700"
        >
          <ImageOff size={16} aria-hidden="true" className="mt-0.5 shrink-0" />
          {question.figureNote}
        </p>
      ) : null}

      <p className="mt-4 text-[17px] leading-[1.7] font-medium whitespace-pre-line text-black">
        <RichText text={question.prompt} />
      </p>

      {question.type === 'multiple-choice' ? (
        <>
          {/*
            Real radio inputs rather than styled buttons: they give arrow-key
            navigation, "3 of 4" screen-reader announcements, and correct
            grouping for free. The input is visually hidden, not removed.
          */}
          <fieldset className="mt-6">
            <legend className="sr-only">
              Answer choices for question {questionIndex + 1}
            </legend>
            <div className="space-y-3">
              {question.choices.map((choice, index) => {
                const selected = value === String(index)
                return (
                  <label
                    key={choice}
                    className="block cursor-pointer has-disabled:cursor-not-allowed"
                  >
                    <input
                      type="radio"
                      name={question.id}
                      value={index}
                      checked={selected}
                      onChange={() => setAnswer(question.id, String(index))}
                      className="peer sr-only"
                    />
                    <span
                      className={`flex items-start gap-3 rounded-lg border px-4 py-3 text-[16px] leading-relaxed transition-colors duration-150 peer-focus-visible:ring-2 peer-focus-visible:ring-black peer-focus-visible:ring-offset-2 ${
                        selected
                          ? 'border-black bg-neutral-50'
                          : 'border-neutral-300 hover:border-neutral-500 hover:bg-neutral-50'
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`flex size-7 shrink-0 items-center justify-center rounded-full border text-sm font-semibold ${
                          selected
                            ? 'border-black bg-black text-white'
                            : 'border-neutral-400 text-neutral-700'
                        }`}
                      >
                        {CHOICE_LABELS[index]}
                      </span>
                      <span className="text-black">
                        <RichText text={choice} />
                      </span>
                    </span>
                  </label>
                )
              })}
            </div>
          </fieldset>

          {/*
            Radios can't be unchecked by clicking them again, so clearing needs
            its own control — the previous click-to-toggle-off was invisible.
          */}
          {value !== '' ? (
            <button
              type="button"
              onClick={() => setAnswer(question.id, '')}
              className={`mt-3 rounded px-1 py-1 text-sm text-neutral-600 underline transition-colors hover:text-black ${FOCUS_RING}`}
            >
              Clear answer
            </button>
          ) : null}
        </>
      ) : (
        <div className="mt-6">
          <label
            htmlFor={`answer-${question.id}`}
            className="block text-sm font-medium text-black"
          >
            Your answer
          </label>
          <input
            id={`answer-${question.id}`}
            type="text"
            inputMode="text"
            autoComplete="off"
            value={value}
            onChange={(event) =>
              setAnswer(question.id, event.target.value, true)
            }
            onBlur={(event) => flush(question.id, event.target.value)}
            aria-describedby={`answer-hint-${question.id}`}
            className={`mt-2 block w-full max-w-xs rounded-lg border border-neutral-400 px-4 py-3 text-[16px] text-black focus:border-black disabled:cursor-not-allowed disabled:bg-neutral-100 ${FOCUS_RING}`}
          />
          <p
            id={`answer-hint-${question.id}`}
            className="mt-2 text-sm text-neutral-600"
          >
            Student-produced response — enter a number.
          </p>
        </div>
      )}
    </div>
  )

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="sticky top-0 z-20 border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-3">
          <div className="min-w-0">
            <Link
              to="/tests"
              className={`rounded text-sm text-neutral-600 transition-colors hover:text-black ${FOCUS_RING}`}
            >
              ← All tests
            </Link>
            <h1 className="font-display truncate text-lg font-semibold tracking-tight text-black">
              {currentModule.title}
            </h1>
            {/*
              Where you are, not where you could go. Sections are locked in
              order, so a list of them would only be a list of places the
              student can't click — the strip that used to live here read as
              tabs and invited exactly that.
            */}
            <p className="text-sm text-neutral-600">
              <span className="sr-only">{test.title}. </span>
              Section {moduleIndex + 1} of {test.modules.length}
            </p>
          </div>

          <div className="flex items-center gap-3 text-sm">
            {saveFailed ? (
              <span className="flex items-center gap-1.5 text-amber-700">
                <TriangleAlert size={14} aria-hidden="true" /> Not saved
              </span>
            ) : null}
            <span className="text-neutral-600" aria-live="polite">
              {totalAnswered} of {totalQuestions} answered
            </span>
            <Countdown remaining={remaining} />
          </div>
        </div>
      </header>

      {confirmingAdvance ? (
        <Banner label="Confirm moving on">
          <p className="text-sm text-black">
            <strong className="font-semibold">
              Finish {currentModule.title}?
            </strong>{' '}
            {currentModule.questions.length - moduleAnswered > 0
              ? `${currentModule.questions.length - moduleAnswered} of ${currentModule.questions.length} questions are unanswered.`
              : `All ${currentModule.questions.length} questions are answered.`}{' '}
            You won’t be able to come back to this section, and the time left in
            it is not carried over.
            {currentModule.breakAfterSeconds
              ? ` A ${formatDuration(currentModule.breakAfterSeconds)} break follows.`
              : ''}
          </p>
          <div className="ml-auto flex gap-2">
            <button
              type="button"
              onClick={() => setConfirmingAdvance(false)}
              className={`rounded-full border border-neutral-400 px-5 text-sm font-medium transition-colors hover:bg-white ${TAP_TARGET} ${FOCUS_RING}`}
            >
              Keep working
            </button>
            <button
              type="button"
              onClick={() => {
                setConfirmingAdvance(false)
                endModule()
              }}
              className={`rounded-full bg-black px-5 text-sm font-medium text-white transition-opacity hover:opacity-80 ${TAP_TARGET} ${FOCUS_RING}`}
            >
              Next section
            </button>
          </div>
        </Banner>
      ) : null}

      {confirmingSubmit ? (
        <Banner label="Confirm submission">
          <p className="text-sm text-black">
            <strong className="font-semibold">
              Submit and lock this test?
            </strong>{' '}
            {totalQuestions - totalAnswered > 0
              ? `${totalQuestions - totalAnswered} of ${totalQuestions} questions are unanswered.`
              : `All ${totalQuestions} questions are answered.`}{' '}
            You won’t be able to change your answers afterwards.
          </p>
          <div className="ml-auto flex gap-2">
            <button
              type="button"
              onClick={() => setConfirmingSubmit(false)}
              className={`rounded-full border border-neutral-400 px-5 text-sm font-medium transition-colors hover:bg-white ${TAP_TARGET} ${FOCUS_RING}`}
            >
              Keep working
            </button>
            <button
              type="button"
              onClick={() => {
                flushAll()
                void submit({ attemptId })
                setConfirmingSubmit(false)
              }}
              className={`rounded-full bg-black px-5 text-sm font-medium text-white transition-opacity hover:opacity-80 ${TAP_TARGET} ${FOCUS_RING}`}
            >
              Submit test
            </button>
          </div>
        </Banner>
      ) : null}

      <main className="mx-auto max-w-6xl px-6 pt-8 pb-32">
        {hasStimulus ? (
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <section aria-label="Passage">{stimulus}</section>
            <section aria-label="Question">{questionBody}</section>
          </div>
        ) : (
          <div className="mx-auto max-w-prose">{questionBody}</div>
        )}
      </main>

      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-neutral-200 bg-white">
        {paletteOpen ? (
          <div
            id="question-palette"
            className="mx-auto max-w-6xl border-b border-neutral-200 px-6 py-4"
          >
            <p className="mb-3 text-sm font-medium text-black">
              {currentModule.title}
            </p>
            <ul className="flex flex-wrap gap-2">
              {currentModule.questions.map((q, index) => {
                const answered = (answers[q.id] ?? '') !== ''
                const current = index === questionIndex
                return (
                  <li key={q.id}>
                    <button
                      type="button"
                      onClick={() => {
                        setQuestionIndex(index)
                        setPaletteOpen(false)
                      }}
                      aria-current={current ? 'true' : undefined}
                      aria-label={`Question ${index + 1}, ${
                        answered ? 'answered' : 'not answered'
                      }`}
                      className={`size-11 rounded-lg border text-sm transition-colors ${FOCUS_RING} ${
                        current
                          ? 'border-black bg-black font-semibold text-white'
                          : answered
                            ? 'border-black bg-neutral-100 font-medium text-black'
                            : 'border-neutral-300 text-neutral-600 hover:border-neutral-500'
                      }`}
                    >
                      {index + 1}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        ) : null}

        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-6 py-3">
          <button
            type="button"
            onClick={goPrevious}
            disabled={isFirstQuestion}
            className={`flex items-center gap-1.5 rounded-full border border-neutral-300 px-5 text-sm font-medium transition-colors hover:bg-neutral-100 disabled:opacity-30 disabled:hover:bg-transparent ${TAP_TARGET} ${FOCUS_RING}`}
          >
            <ChevronLeft size={16} aria-hidden="true" /> Previous
          </button>

          <button
            type="button"
            onClick={() => setPaletteOpen(!paletteOpen)}
            aria-expanded={paletteOpen}
            aria-controls="question-palette"
            className={`flex items-center gap-2 rounded-full border border-neutral-300 px-5 text-sm font-medium transition-colors hover:bg-neutral-100 ${TAP_TARGET} ${FOCUS_RING}`}
          >
            <LayoutGrid size={15} aria-hidden="true" />
            Question {questionIndex + 1} of {currentModule.questions.length}
          </button>

          {/*
            Submitting is reachable from exactly one place: the last question
            of the last section. A permanent header button sat one stray click
            from ending the test an hour early, and read as "save" to anyone
            who didn't look twice.
          */}
          {isLastQuestion && isLastModule ? (
            <button
              type="button"
              onClick={() => setConfirmingSubmit(true)}
              className={`flex items-center gap-1.5 rounded-full bg-black px-5 text-sm font-medium text-white transition-opacity hover:opacity-80 ${TAP_TARGET} ${FOCUS_RING}`}
            >
              <Check size={16} aria-hidden="true" /> Submit test
            </button>
          ) : (
            <button
              type="button"
              onClick={goNext}
              className={`flex items-center gap-1.5 rounded-full border border-neutral-300 px-5 text-sm font-medium transition-colors hover:bg-neutral-100 ${TAP_TARGET} ${FOCUS_RING}`}
            >
              {isLastQuestion ? 'Next section' : 'Next'}{' '}
              <ChevronRight size={16} aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

/** The full-width confirmation strip under the header. */
function Banner({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div
      role="alertdialog"
      aria-label={label}
      className="border-b border-neutral-200 bg-neutral-100"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-4 px-6 py-4">
        {children}
      </div>
    </div>
  )
}

/**
 * Time left in the current section.
 *
 * Not a live region: announcing every second would make a screen reader
 * unusable for the hour this is on screen. It carries a label and can be read
 * on demand.
 */
function Countdown({ remaining }: { remaining: number | null }) {
  if (remaining === null) return null

  const minutesLeft = remaining / 60_000
  const tone =
    minutesLeft < 1
      ? 'text-red-700'
      : minutesLeft < 5
        ? 'text-amber-700'
        : 'text-black'

  return (
    <span
      role="timer"
      aria-live="off"
      className={`flex items-center gap-1.5 font-medium tabular-nums ${tone}`}
    >
      <Clock size={14} aria-hidden="true" />
      <span className="sr-only">Time remaining in this section: </span>
      {formatClock(remaining)}
    </span>
  )
}
