import { createFileRoute } from '@tanstack/react-router'

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
          Built for the curious
        </h1>

        <div className="w-full max-w-xl space-y-4">
          <p className="px-4 text-sm leading-relaxed text-white">
            Stay updated with the latest news and insights. Subscribe to our
            newsletter today and never miss out on exciting updates.
          </p>

          <div className="flex justify-center">
            <button
              type="button"
              className="liquid-glass rounded-full px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
            >
              Manifesto
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
