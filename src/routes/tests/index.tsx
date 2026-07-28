import { convexQuery } from '@convex-dev/react-query'
import { useMutation } from 'convex/react'
import { useQuery, useSuspenseQuery } from '@tanstack/react-query'
import {
  Link,
  createFileRoute,
  redirect,
  useNavigate,
} from '@tanstack/react-router'
import { Clock, FileText, ListChecks, RotateCcw } from 'lucide-react'
import { useState } from 'react'

import Navbar from '#/components/Navbar.tsx'
import { api } from '../../../convex/_generated/api'

export const Route = createFileRoute('/tests/')({
  /*
   * The real gate is `api.tests.list`, which rejects signed-out callers server
   * side. This guard is the UX half: it redirects instead of letting the page
   * render and then blow up on the query.
   *
   * `userId` comes from the root route's `beforeLoad`, which reads the Clerk
   * session on the server — so this resolves before the first paint, unlike
   * `Show`, which renders `null` until Clerk hydrates.
   */
  beforeLoad: ({ context }) => {
    if (!context.userId) {
      throw redirect({ to: '/sign-in/$', params: { _splat: '' } })
    }
  },
  loader: ({ context }) =>
    context.queryClient.ensureQueryData(convexQuery(api.tests.list, {})),
  component: TestsPage,
})

function formatDuration(totalSeconds: number) {
  const minutes = Math.round(totalSeconds / 60)
  if (minutes < 60) return `${minutes} min`

  const hours = Math.floor(minutes / 60)
  const remainder = minutes % 60
  return remainder === 0 ? `${hours} hr` : `${hours} hr ${remainder} min`
}

function formatDate(ms: number) {
  return new Date(ms).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

function TestsPage() {
  const navigate = useNavigate()
  const { data: tests } = useSuspenseQuery(convexQuery(api.tests.list, {}))
  const { data: myAttempts } = useQuery(convexQuery(api.attempts.listMine, {}))
  const retake = useMutation(api.attempts.retake)
  const [retaking, setRetaking] = useState<string | null>(null)

  const statusBySlug = new Map(
    (myAttempts ?? []).map((attempt) => [attempt.testSlug, attempt]),
  )

  const onRetake = async (slug: string) => {
    setRetaking(slug)
    try {
      await retake({ testSlug: slug })
      await navigate({ to: '/tests/$slug', params: { slug } })
    } finally {
      setRetaking(null)
    }
  }

  return (
    <div className="relative min-h-screen bg-black">
      {/* Soft glow so the glass panels have something to sit on. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[60vh] bg-[radial-gradient(ellipse_at_top,rgba(120,140,255,0.18),transparent_70%)]"
      />

      <Navbar />

      <main className="relative z-10 mx-auto w-full max-w-4xl px-6 py-12">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Practice tests
        </h1>
        <p className="mt-3 text-sm text-white">
          Pick a test to begin. Your answers save as you go, and lock once you
          submit.
        </p>

        {tests.length === 0 ? (
          <p className="liquid-glass mt-10 rounded-2xl px-6 py-10 text-center text-sm text-white">
            No tests have been published yet.
          </p>
        ) : (
          <ul className="mt-10 space-y-4">
            {tests.map((test) => {
              const attempt = statusBySlug.get(test.slug)
              const submitted = attempt?.status === 'submitted'

              return (
                <li
                  key={test.slug}
                  className="liquid-glass rounded-2xl px-6 py-5"
                >
                  {/*
                    The card is not one big link: a Retake button nested inside
                    an anchor is invalid markup and traps keyboard users. Title
                    links, button is its own control.
                  */}
                  <Link
                    to="/tests/$slug"
                    params={{ slug: test.slug }}
                    className="font-display rounded text-lg font-semibold tracking-tight text-white underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none"
                  >
                    {test.title}
                  </Link>

                  {test.description ? (
                    <p className="mt-1 text-sm text-white">
                      {test.description}
                    </p>
                  ) : null}

                  <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white">
                    <span className="flex items-center gap-1.5">
                      <FileText size={14} aria-hidden="true" />
                      {test.moduleCount}{' '}
                      {test.moduleCount === 1 ? 'module' : 'modules'}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <ListChecks size={14} aria-hidden="true" />
                      {test.questionCount} questions
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} aria-hidden="true" />
                      {formatDuration(test.totalTimeSeconds)}
                    </span>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-white/15 pt-4">
                    {submitted ? (
                      <>
                        <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-black">
                          Submitted
                          {attempt.submittedAt
                            ? ` ${formatDate(attempt.submittedAt)}`
                            : ''}
                        </span>
                        <span className="text-xs text-white">
                          {attempt.answeredCount} of {test.questionCount}{' '}
                          answered
                        </span>
                        <Link
                          to="/tests/$slug"
                          params={{ slug: test.slug }}
                          className="ml-auto rounded-full border border-white/40 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none"
                        >
                          View submission
                        </Link>
                        <button
                          type="button"
                          onClick={() => void onRetake(test.slug)}
                          disabled={retaking === test.slug}
                          className="flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-medium text-black transition-opacity hover:opacity-80 disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none"
                        >
                          <RotateCcw size={13} aria-hidden="true" />
                          {retaking === test.slug ? 'Starting…' : 'Retake'}
                        </button>
                      </>
                    ) : attempt ? (
                      <>
                        <span className="rounded-full border border-white/40 px-3 py-1 text-xs text-white">
                          In progress
                        </span>
                        <span className="text-xs text-white">
                          {attempt.answeredCount} of {test.questionCount}{' '}
                          answered
                        </span>
                        <Link
                          to="/tests/$slug"
                          params={{ slug: test.slug }}
                          className="ml-auto rounded-full bg-white px-4 py-2 text-xs font-medium text-black transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none"
                        >
                          Continue
                        </Link>
                      </>
                    ) : (
                      <Link
                        to="/tests/$slug"
                        params={{ slug: test.slug }}
                        className="rounded-full bg-white px-4 py-2 text-xs font-medium text-black transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none"
                      >
                        Start test
                      </Link>
                    )}
                  </div>
                </li>
              )
            })}
          </ul>
        )}
      </main>
    </div>
  )
}
