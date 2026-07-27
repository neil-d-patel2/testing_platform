import { convexQuery } from '@convex-dev/react-query'
import { useMutation } from 'convex/react'
import { useQuery, useSuspenseQuery } from '@tanstack/react-query'
import { Link, createFileRoute, redirect } from '@tanstack/react-router'
import {
  Check,
  ChevronLeft,
  ChevronRight,
  ImageOff,
  LayoutGrid,
} from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'

import RichText from '#/components/RichText.tsx'
import { api } from '../../../convex/_generated/api'
import type { Id } from '../../../convex/_generated/dataModel'

export const Route = createFileRoute('/tests/$slug')({
  beforeLoad: ({ context }) => {
    if (!context.userId) {
      throw redirect({ to: '/sign-in/$', params: { _splat: '' } })
    }
  },
  loader: ({ context, params }) =>
    context.queryClient.ensureQueryData(
      convexQuery(api.tests.get, { slug: params.slug }),
    ),
  component: AttemptRunner,
})

/** How long to wait after the last keystroke before saving a grid-in answer. */
const TYPING_SAVE_DELAY_MS = 600

const CHOICE_LABELS = ['A', 'B', 'C', 'D', 'E', 'F']

/**
 * Shared focus treatment. Every interactive element gets one — a keyboard user
 * taking a 98-question exam has no other way to tell where they are.
 */
const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2'

/** 44px minimum touch target, per WCAG 2.5.5 / platform guidance. */
const TAP_TARGET = 'min-h-11'

function AttemptRunner() {
  const { slug } = Route.useParams()
  const { data: test } = useSuspenseQuery(convexQuery(api.tests.get, { slug }))
  const { data: attempt } = useQuery(
    convexQuery(api.attempts.getActive, { testSlug: slug }),
  )

  const start = useMutation(api.attempts.start)
  const saveAnswer = useMutation(api.attempts.saveAnswer)
  const clearAnswer = useMutation(api.attempts.clearAnswer)
  const submit = useMutation(api.attempts.submit)

  const [moduleIndex, setModuleIndex] = useState(0)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [paletteOpen, setPaletteOpen] = useState(false)

  /*
   * Local echo of what the student just did, layered over the server's copy.
   * Without it, every click would wait a round trip before the choice looked
   * selected. Server values win for anything not touched this session.
   */
  const [draft, setDraft] = useState<Record<string, string>>({})
  const saveTimers = useRef<Record<string, ReturnType<typeof setTimeout>>>({})
  const startRequested = useRef(false)

  const attemptId: Id<'attempts'> | undefined = attempt?.attemptId
  const isSubmitted = attempt?.status === 'submitted'

  // Create the attempt on first visit. `start` is idempotent server-side; the
  // ref keeps a Strict Mode double-render from firing two requests.
  useEffect(() => {
    if (attempt !== null || startRequested.current) return
    startRequested.current = true
    void start({ testSlug: slug })
  }, [attempt, slug, start])

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
      if (!attemptId) return
      if (value.trim() === '') {
        void clearAnswer({ attemptId, questionId })
      } else {
        void saveAnswer({ attemptId, questionId, value })
      }
    },
    [attemptId, saveAnswer, clearAnswer],
  )

  const setAnswer = useCallback(
    (questionId: string, value: string, debounce = false) => {
      setDraft((current) => ({ ...current, [questionId]: value }))

      clearTimeout(saveTimers.current[questionId])
      if (debounce) {
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

  if (!test) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white px-6 text-center">
        <h1 className="font-display text-2xl font-semibold text-black">
          Test not found
        </h1>
        <Link
          to="/tests"
          className={`rounded text-sm text-black underline ${FOCUS_RING}`}
        >
          Back to practice tests
        </Link>
      </main>
    )
  }

  const currentModule = test.modules[moduleIndex]
  const question = currentModule.questions[questionIndex]
  const answers = { ...(attempt?.answers ?? {}), ...draft }
  const value = answers[question.id] ?? ''

  const totalAnswered = test.modules.reduce(
    (n, m) =>
      n + m.questions.filter((q) => (answers[q.id] ?? '') !== '').length,
    0,
  )
  const totalQuestions = test.modules.reduce(
    (n, m) => n + m.questions.length,
    0,
  )

  const goToModule = (index: number) => {
    setModuleIndex(index)
    setQuestionIndex(0)
  }

  const isFirst = moduleIndex === 0 && questionIndex === 0
  const isLast =
    moduleIndex === test.modules.length - 1 &&
    questionIndex === currentModule.questions.length - 1

  const goPrevious = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1)
    } else if (moduleIndex > 0) {
      const previous = test.modules[moduleIndex - 1]
      setModuleIndex(moduleIndex - 1)
      setQuestionIndex(previous.questions.length - 1)
    }
  }

  const goNext = () => {
    if (questionIndex < currentModule.questions.length - 1) {
      setQuestionIndex(questionIndex + 1)
    } else if (moduleIndex < test.modules.length - 1) {
      goToModule(moduleIndex + 1)
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
          <fieldset className="mt-6" disabled={isSubmitted}>
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
          {value !== '' && !isSubmitted ? (
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
            disabled={isSubmitted}
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
              {test.title}
            </h1>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <span className="text-neutral-600" aria-live="polite">
              {totalAnswered} of {totalQuestions} answered
            </span>
            {isSubmitted ? (
              <span className="flex items-center gap-1.5 rounded-full bg-black px-3 py-1.5 text-sm font-medium text-white">
                <Check size={14} aria-hidden="true" /> Submitted
              </span>
            ) : (
              <button
                type="button"
                onClick={() => attemptId && void submit({ attemptId })}
                disabled={!attemptId}
                className={`rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition-opacity hover:opacity-80 disabled:opacity-40 ${TAP_TARGET} ${FOCUS_RING}`}
              >
                Finish test
              </button>
            )}
          </div>
        </div>

        <nav aria-label="Test modules" className="mx-auto max-w-6xl px-6">
          <ul className="flex gap-6 overflow-x-auto">
            {test.modules.map((m, index) => {
              const active = index === moduleIndex
              return (
                <li key={m.id}>
                  <button
                    type="button"
                    onClick={() => goToModule(index)}
                    aria-current={active ? 'true' : undefined}
                    className={`border-b-2 pt-1 pb-2.5 text-sm whitespace-nowrap transition-colors ${FOCUS_RING} ${
                      active
                        ? 'border-black font-semibold text-black'
                        : 'border-transparent text-neutral-600 hover:text-black'
                    }`}
                  >
                    {m.title}
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>
      </header>

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
            disabled={isFirst}
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

          <button
            type="button"
            onClick={goNext}
            disabled={isLast}
            className={`flex items-center gap-1.5 rounded-full border border-neutral-300 px-5 text-sm font-medium transition-colors hover:bg-neutral-100 disabled:opacity-30 disabled:hover:bg-transparent ${TAP_TARGET} ${FOCUS_RING}`}
          >
            Next <ChevronRight size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
