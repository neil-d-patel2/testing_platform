import { convexQuery } from '@convex-dev/react-query'
import { useMutation } from 'convex/react'
import { useQuery, useSuspenseQuery } from '@tanstack/react-query'
import { Link, createFileRoute, redirect } from '@tanstack/react-router'
import { Check, ChevronLeft, ChevronRight, ImageOff } from 'lucide-react'
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
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-black px-6 text-center">
        <h1 className="font-display text-2xl font-semibold text-white">
          Test not found
        </h1>
        <Link to="/tests" className="text-sm text-white underline">
          Back to practice tests
        </Link>
      </main>
    )
  }

  const currentModule = test.modules[moduleIndex]
  const question = currentModule.questions[questionIndex]
  const answers = { ...(attempt?.answers ?? {}), ...draft }
  const value = answers[question.id] ?? ''

  const answeredInModule = currentModule.questions.filter(
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

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-black/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-4">
          <div>
            <Link
              to="/tests"
              className="text-xs text-white/60 transition-colors hover:text-white"
            >
              ← All tests
            </Link>
            <h1 className="font-display text-lg font-semibold tracking-tight">
              {test.title}
            </h1>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span>
              {totalAnswered} of {totalQuestions} answered
            </span>
            {isSubmitted ? (
              <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 text-emerald-300">
                <Check size={13} /> Submitted
              </span>
            ) : (
              <button
                type="button"
                onClick={() => attemptId && void submit({ attemptId })}
                disabled={!attemptId}
                className="rounded-full border border-white/25 px-4 py-1.5 transition-colors hover:bg-white/10 disabled:opacity-40"
              >
                Finish test
              </button>
            )}
          </div>
        </div>

        <div className="mx-auto flex max-w-5xl gap-1 overflow-x-auto px-6 pb-3">
          {test.modules.map((m, index) => (
            <button
              key={m.id}
              type="button"
              onClick={() => goToModule(index)}
              className={`shrink-0 rounded-full px-4 py-1.5 text-xs whitespace-nowrap transition-colors ${
                index === moduleIndex
                  ? 'bg-white text-black'
                  : 'text-white/60 hover:bg-white/10 hover:text-white'
              }`}
            >
              {m.title}
            </button>
          ))}
        </div>
      </header>

      <main className="mx-auto grid max-w-5xl gap-8 px-6 py-8 lg:grid-cols-[1fr_auto]">
        <div className="min-w-0">
          <p className="text-xs text-white/50">
            Question {questionIndex + 1} of {currentModule.questions.length} ·{' '}
            {answeredInModule} answered in this module
          </p>

          {question.passageIntro ? (
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              <RichText text={question.passageIntro} />
            </p>
          ) : null}

          {question.passage ? (
            <div className="mt-4 rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm leading-relaxed whitespace-pre-line">
              <RichText text={question.passage} />
            </div>
          ) : null}

          {question.table ? (
            <figure className="mt-4 overflow-x-auto">
              {question.table.caption ? (
                <figcaption className="mb-2 text-xs font-medium text-white/70">
                  {question.table.caption}
                </figcaption>
              ) : null}
              <table className="w-full border-collapse text-left text-xs">
                <thead>
                  <tr>
                    {question.table.headers.map((header) => (
                      <th
                        key={header}
                        className="border border-white/15 px-3 py-2 font-semibold"
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
                          className="border border-white/15 px-3 py-2 align-top"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              {question.table.note ? (
                <p className="mt-2 text-xs text-white/50">
                  {question.table.note}
                </p>
              ) : null}
            </figure>
          ) : null}

          {question.figureNote ? (
            <p className="mt-4 flex items-start gap-2 rounded-xl border border-amber-400/30 bg-amber-400/10 px-4 py-3 text-xs text-amber-200">
              <ImageOff size={15} className="mt-px shrink-0" />
              {question.figureNote}
            </p>
          ) : null}

          <p className="mt-5 leading-relaxed whitespace-pre-line">
            <RichText text={question.prompt} />
          </p>

          {question.type === 'multiple-choice' ? (
            <ul className="mt-6 space-y-3">
              {question.choices.map((choice, index) => {
                const selected = value === String(index)
                return (
                  <li key={choice}>
                    <button
                      type="button"
                      disabled={isSubmitted}
                      onClick={() =>
                        setAnswer(
                          question.id,
                          selected ? '' : String(index),
                          false,
                        )
                      }
                      className={`flex w-full items-start gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-colors disabled:cursor-not-allowed ${
                        selected
                          ? 'border-white bg-white/15'
                          : 'border-white/15 hover:border-white/40 hover:bg-white/5'
                      }`}
                    >
                      <span
                        className={`flex size-6 shrink-0 items-center justify-center rounded-full border text-xs ${
                          selected
                            ? 'border-white bg-white text-black'
                            : 'border-white/40'
                        }`}
                      >
                        {CHOICE_LABELS[index]}
                      </span>
                      <span className="leading-relaxed">
                        <RichText text={choice} />
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          ) : (
            <div className="mt-6">
              <label
                htmlFor={`answer-${question.id}`}
                className="text-xs text-white/60"
              >
                Student-produced response
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
                placeholder="Enter your answer"
                className="mt-2 block w-full max-w-xs rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm placeholder:text-white/30 focus:border-white focus:outline-none disabled:cursor-not-allowed"
              />
            </div>
          )}

          <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
            <button
              type="button"
              onClick={goPrevious}
              disabled={isFirst}
              className="flex items-center gap-1.5 rounded-full border border-white/20 px-5 py-2 text-sm transition-colors hover:bg-white/10 disabled:opacity-30"
            >
              <ChevronLeft size={16} /> Previous
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={isLast}
              className="flex items-center gap-1.5 rounded-full border border-white/20 px-5 py-2 text-sm transition-colors hover:bg-white/10 disabled:opacity-30"
            >
              Next <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <nav
          aria-label="Questions in this module"
          className="lg:w-56 lg:shrink-0"
        >
          <p className="mb-3 text-xs text-white/50">Jump to question</p>
          <ol className="flex flex-wrap gap-2">
            {currentModule.questions.map((q, index) => {
              const answered = (answers[q.id] ?? '') !== ''
              const current = index === questionIndex
              return (
                <li key={q.id}>
                  <button
                    type="button"
                    onClick={() => setQuestionIndex(index)}
                    aria-current={current ? 'true' : undefined}
                    className={`size-8 rounded-lg border text-xs transition-colors ${
                      current
                        ? 'border-white bg-white text-black'
                        : answered
                          ? 'border-white/50 bg-white/15 text-white'
                          : 'border-white/15 text-white/60 hover:border-white/40'
                    }`}
                  >
                    {index + 1}
                  </button>
                </li>
              )
            })}
          </ol>
          <p className="mt-4 text-xs leading-relaxed text-white/40">
            Answers save automatically to your account as you go.
          </p>
        </nav>
      </main>
    </div>
  )
}
