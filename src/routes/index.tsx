import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight, Globe, Instagram, Twitter } from 'lucide-react'

import BackgroundVideo from '#/components/BackgroundVideo.tsx'
import Navbar from '#/components/Navbar.tsx'

export const Route = createFileRoute('/')({ component: LandingPage })

const SOCIALS = [
  { label: 'Instagram', Icon: Instagram },
  { label: 'Twitter', Icon: Twitter },
  { label: 'Website', Icon: Globe },
]

function LandingPage() {
  const [email, setEmail] = useState('')

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
          {/* No subscribe backend yet — the submit is inert on purpose. */}
          <form
            onSubmit={(event) => event.preventDefault()}
            className="liquid-glass flex items-center gap-3 rounded-full py-2 pl-6 pr-2"
          >
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              aria-label="Email address"
              className="min-w-0 flex-1 bg-transparent text-base text-white outline-none placeholder:text-white/40"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="rounded-full bg-white p-3 text-black"
            >
              <ArrowRight size={20} />
            </button>
          </form>

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

      <div className="relative z-10 flex justify-center gap-4 pb-12">
        {SOCIALS.map(({ label, Icon }) => (
          <button
            key={label}
            type="button"
            aria-label={label}
            className="liquid-glass rounded-full p-4 text-white/80 transition-all hover:bg-white/5 hover:text-white"
          >
            <Icon size={20} />
          </button>
        ))}
      </div>
    </div>
  )
}
