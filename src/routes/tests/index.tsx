import { convexQuery } from '@convex-dev/react-query'
import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute, redirect } from '@tanstack/react-router'
import { Clock, FileText, ListChecks } from 'lucide-react'

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

function TestsPage() {
  const { data: tests } = useSuspenseQuery(convexQuery(api.tests.list, {}))

  return (
    <div className="relative min-h-screen bg-black">
      {/* Soft glow so the glass panels have something to sit on. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[60vh] bg-[radial-gradient(ellipse_at_top,rgba(120,140,255,0.18),transparent_70%)]"
      />

      <Navbar />

      <main className="relative z-10 mx-auto w-full max-w-4xl px-6 py-12">
        <h1
          className="text-4xl tracking-tight text-white md:text-5xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Practice tests
        </h1>
        <p className="mt-3 text-sm text-white/60">
          Pick a test to begin. Each module is timed separately, and the timer
          keeps running if you close the tab.
        </p>

        {tests.length === 0 ? (
          <p className="liquid-glass mt-10 rounded-2xl px-6 py-10 text-center text-sm text-white/60">
            No tests have been published yet.
          </p>
        ) : (
          <ul className="mt-10 space-y-4">
            {tests.map((test) => (
              <li
                key={test.slug}
                className="liquid-glass rounded-2xl px-6 py-5 transition-colors hover:bg-white/5"
              >
                <h2 className="text-lg font-medium text-white">{test.title}</h2>

                {test.description ? (
                  <p className="mt-1 text-sm text-white/60">
                    {test.description}
                  </p>
                ) : null}

                <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/50">
                  <span className="flex items-center gap-1.5">
                    <FileText size={14} />
                    {test.moduleCount}{' '}
                    {test.moduleCount === 1 ? 'module' : 'modules'}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ListChecks size={14} />
                    {test.questionCount} questions
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} />
                    {formatDuration(test.totalTimeSeconds)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  )
}
