import { convexQuery } from '@convex-dev/react-query'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { ChevronLeft, Lock } from 'lucide-react'
import { useState } from 'react'

import { api } from '../../convex/_generated/api'
import type { Id } from '../../convex/_generated/dataModel'

export const Route = createFileRoute('/tutor')({ component: TutorPage })

/**
 * Where the typed password lives for the session.
 *
 * `sessionStorage`, not `localStorage`: it clears when the tab closes, so a
 * shared or borrowed machine doesn't stay unlocked indefinitely. This is
 * convenience only — the password is re-sent with, and re-checked on, every
 * single query. Clearing it locks the UI but is not what protects the data.
 */
const STORAGE_KEY = 'tutor-password'

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2'

function readStoredPassword() {
  if (typeof window === 'undefined') return ''
  return window.sessionStorage.getItem(STORAGE_KEY) ?? ''
}

function formatDateTime(ms?: number) {
  return ms ? new Date(ms).toLocaleString() : '—'
}

function TutorPage() {
  const [password, setPassword] = useState(readStoredPassword)
  const [openAttempt, setOpenAttempt] = useState<Id<'attempts'> | null>(null)

  // Verified server-side. `undefined` while in flight, so the form doesn't
  // flash an error before the first response lands.
  const { data: unlocked } = useQuery({
    ...convexQuery(api.tutor.checkPassword, { password }),
    enabled: password !== '',
  })

  if (!unlocked) {
    return (
      <PasswordGate
        onUnlock={(value) => {
          window.sessionStorage.setItem(STORAGE_KEY, value)
          setPassword(value)
        }}
        // Only an actual `false` is a failed attempt; `undefined` is "loading".
        failed={password !== '' && unlocked === false}
      />
    )
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="border-b border-neutral-200">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-4">
          <h1 className="font-display text-xl font-semibold tracking-tight">
            Tutor · submissions
          </h1>
          <button
            type="button"
            onClick={() => {
              window.sessionStorage.removeItem(STORAGE_KEY)
              setPassword('')
              setOpenAttempt(null)
            }}
            className={`min-h-11 rounded-full border border-neutral-300 px-5 text-sm font-medium transition-colors hover:bg-neutral-100 ${FOCUS_RING}`}
          >
            Lock
          </button>
        </div>
      </header>

      {openAttempt ? (
        <AttemptDetail
          password={password}
          attemptId={openAttempt}
          onBack={() => setOpenAttempt(null)}
        />
      ) : (
        <AttemptList password={password} onOpen={setOpenAttempt} />
      )}
    </div>
  )
}

function PasswordGate({
  onUnlock,
  failed,
}: {
  onUnlock: (password: string) => void
  failed: boolean
}) {
  const [value, setValue] = useState('')

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6">
      <form
        onSubmit={(event) => {
          event.preventDefault()
          onUnlock(value)
        }}
        className="w-full max-w-sm"
      >
        <Lock size={22} aria-hidden="true" className="text-black" />
        <h1 className="font-display mt-4 text-2xl font-semibold tracking-tight text-black">
          Tutor access
        </h1>
        <p className="mt-2 text-sm text-neutral-600">
          Enter the tutor password to view student submissions.
        </p>

        <label
          htmlFor="tutor-password"
          className="mt-6 block text-sm font-medium text-black"
        >
          Password
        </label>
        <input
          id="tutor-password"
          type="password"
          autoComplete="current-password"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          aria-invalid={failed}
          aria-describedby={failed ? 'tutor-password-error' : undefined}
          className={`mt-2 w-full rounded-lg border px-4 py-3 text-[16px] text-black ${FOCUS_RING} ${
            failed ? 'border-red-600' : 'border-neutral-400 focus:border-black'
          }`}
        />

        {failed ? (
          <p
            id="tutor-password-error"
            role="alert"
            className="mt-2 text-sm text-red-700"
          >
            Incorrect password.
          </p>
        ) : null}

        <button
          type="submit"
          className={`mt-5 min-h-11 w-full rounded-full bg-black px-5 text-sm font-medium text-white transition-opacity hover:opacity-80 ${FOCUS_RING}`}
        >
          Unlock
        </button>
      </form>
    </main>
  )
}

function AttemptList({
  password,
  onOpen,
}: {
  password: string
  onOpen: (id: Id<'attempts'>) => void
}) {
  const { data: attempts } = useQuery(
    convexQuery(api.tutor.listAttempts, { password }),
  )

  if (!attempts) {
    return <p className="px-6 py-10 text-sm text-neutral-600">Loading…</p>
  }

  if (attempts.length === 0) {
    return (
      <p className="px-6 py-10 text-sm text-neutral-600">
        No attempts yet. They appear here as soon as a student starts a test.
      </p>
    )
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-8">
      <p className="text-sm text-neutral-600">
        {attempts.length} {attempts.length === 1 ? 'attempt' : 'attempts'}{' '}
        across all accounts, newest first.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-neutral-300">
              <th scope="col" className="py-2 pr-4 font-semibold">
                Student
              </th>
              <th scope="col" className="py-2 pr-4 font-semibold">
                Test
              </th>
              <th scope="col" className="py-2 pr-4 font-semibold">
                Status
              </th>
              <th scope="col" className="py-2 pr-4 font-semibold">
                Answered
              </th>
              <th scope="col" className="py-2 pr-4 font-semibold">
                Submitted
              </th>
              <th scope="col" className="py-2 font-semibold">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {attempts.map((attempt) => (
              <tr
                key={attempt.attemptId}
                className="border-b border-neutral-200"
              >
                <td className="py-3 pr-4 align-top">
                  <span className="block font-medium">
                    {attempt.userName ?? 'Unknown name'}
                  </span>
                  <span className="block text-xs text-neutral-600">
                    {attempt.userEmail ?? attempt.userId}
                  </span>
                </td>
                <td className="py-3 pr-4 align-top">{attempt.testTitle}</td>
                <td className="py-3 pr-4 align-top">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                      attempt.status === 'submitted'
                        ? 'bg-black text-white'
                        : 'border border-neutral-400 text-neutral-700'
                    }`}
                  >
                    {attempt.status === 'submitted'
                      ? 'Submitted'
                      : 'In progress'}
                  </span>
                </td>
                <td className="py-3 pr-4 align-top tabular-nums">
                  {attempt.answeredCount} / {attempt.totalQuestions}
                </td>
                <td className="py-3 pr-4 align-top text-neutral-600">
                  {formatDateTime(attempt.submittedAt)}
                </td>
                <td className="py-3 align-top">
                  <button
                    type="button"
                    onClick={() => onOpen(attempt.attemptId)}
                    className={`min-h-11 rounded-full border border-neutral-300 px-4 text-xs font-medium transition-colors hover:bg-neutral-100 ${FOCUS_RING}`}
                  >
                    Grade
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}

const CHOICE_LABELS = ['A', 'B', 'C', 'D', 'E', 'F']

function AttemptDetail({
  password,
  attemptId,
  onBack,
}: {
  password: string
  attemptId: Id<'attempts'>
  onBack: () => void
}) {
  const { data: detail } = useQuery(
    convexQuery(api.tutor.getAttempt, { password, attemptId }),
  )

  if (!detail) {
    return <p className="px-6 py-10 text-sm text-neutral-600">Loading…</p>
  }

  const answered = detail.modules.reduce(
    (n, m) => n + m.questions.filter((q) => q.response !== null).length,
    0,
  )
  const total = detail.modules.reduce((n, m) => n + m.questions.length, 0)

  return (
    <main className="mx-auto max-w-4xl px-6 py-8">
      <button
        type="button"
        onClick={onBack}
        className={`flex items-center gap-1.5 rounded text-sm text-neutral-600 transition-colors hover:text-black ${FOCUS_RING}`}
      >
        <ChevronLeft size={16} aria-hidden="true" /> All submissions
      </button>

      <h2 className="font-display mt-3 text-2xl font-semibold tracking-tight">
        {detail.userName ?? detail.userEmail ?? detail.userId}
      </h2>
      <p className="mt-1 text-sm text-neutral-600">
        {detail.testTitle} · {answered} of {total} answered ·{' '}
        {detail.status === 'submitted'
          ? `submitted ${formatDateTime(detail.submittedAt)}`
          : 'still in progress'}
      </p>

      {detail.modules.map((module) => (
        <section key={module.id} className="mt-10">
          <h3 className="font-display border-b border-neutral-300 pb-2 text-lg font-semibold tracking-tight">
            {module.title}
          </h3>

          <ol className="mt-4 space-y-3">
            {module.questions.map((question) => {
              const isChoice = question.type === 'multiple-choice'
              const responseIndex =
                isChoice && question.response !== null
                  ? Number(question.response)
                  : null
              const responseLabel =
                responseIndex !== null
                  ? (CHOICE_LABELS[responseIndex] ?? question.response)
                  : question.response

              const keyLabel =
                question.correctAnswer === null
                  ? null
                  : isChoice
                    ? (CHOICE_LABELS[Number(question.correctAnswer)] ??
                      String(question.correctAnswer))
                    : question.correctAnswer

              /*
               * `isCorrect` is the server's verdict — the page must not
               * re-derive it. Comparing the response against `keyLabel` here
               * marked a right answer wrong on every grid-in with more than
               * one accepted spelling.
               *
               * A blank stays neutral rather than red: the response chip
               * beside it already says "blank", and colouring it as a wrong
               * answer buries that distinction the tutor is looking for.
               */
              const graded =
                question.isCorrect !== null && question.response !== null
              const correct = question.isCorrect === true

              return (
                <li
                  key={question.id}
                  className="grid grid-cols-[2.5rem_1fr_auto] items-start gap-3 border-b border-neutral-200 pb-3 text-sm"
                >
                  <span className="pt-0.5 font-medium tabular-nums text-neutral-600">
                    {question.number}.
                  </span>

                  <span className="min-w-0 whitespace-pre-line text-neutral-800">
                    {question.prompt.split('\n')[0]}
                  </span>

                  <span className="flex shrink-0 items-center gap-2">
                    <span
                      className={`rounded px-2 py-1 text-xs font-semibold ${
                        question.response === null
                          ? 'bg-neutral-100 text-neutral-500'
                          : 'bg-black text-white'
                      }`}
                    >
                      {question.response === null ? 'blank' : responseLabel}
                    </span>

                    {keyLabel === null ? (
                      <span
                        className="text-xs text-neutral-500"
                        title="No answer key supplied for this question"
                      >
                        no key
                      </span>
                    ) : (
                      <span
                        className={`text-xs font-medium ${
                          !graded
                            ? 'text-neutral-500'
                            : correct
                              ? 'text-green-700'
                              : 'text-red-700'
                        }`}
                      >
                        key {keyLabel}
                      </span>
                    )}
                  </span>
                </li>
              )
            })}
          </ol>
        </section>
      ))}
    </main>
  )
}
