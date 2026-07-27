import { Show, SignUpButton } from '@clerk/tanstack-react-start'
import { Link, createFileRoute } from '@tanstack/react-router'

import BackgroundVideo from '#/components/BackgroundVideo.tsx'
import Navbar from '#/components/Navbar.tsx'

export const Route = createFileRoute('/')({ component: LandingPage })

function LandingPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-black">
      <BackgroundVideo />

      <Navbar />

      <main className="relative z-10 flex flex-1 -translate-y-[20%] flex-col items-center justify-center px-6 py-12 text-center">
        <h1
          className="mb-8 whitespace-nowrap text-5xl tracking-tight text-white md:text-6xl lg:text-7xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Practice like it's test day
        </h1>

        <div className="w-full max-w-xl space-y-4">
          <p className="px-4 text-sm leading-relaxed text-white">
            Full-length, timed SAT practice tests written by your tutor. Sign
            in, pick a test, and get to work.
          </p>

          {/*
            `Show` renders null until Clerk resolves, so the min-height reserves
            the button's row and keeps the hero from shifting when it appears.
          */}
          <div className="flex min-h-12 justify-center">
            <Show when="signed-out">
              <SignUpButton mode="modal">
                <button
                  type="button"
                  className="liquid-glass rounded-full px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
                >
                  Start practicing
                </button>
              </SignUpButton>
            </Show>

            <Show when="signed-in">
              <Link
                to="/tests"
                className="liquid-glass rounded-full px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
              >
                View your tests
              </Link>
            </Show>
          </div>
        </div>
      </main>
    </div>
  )
}
