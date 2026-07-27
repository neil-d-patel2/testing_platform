import {
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/tanstack-react-start'
import { GraduationCap } from 'lucide-react'

import { Button } from '#/components/ui/button.tsx'

const NAV_LINKS = ['Practice Tests', 'How It Works']

export default function Navbar() {
  return (
    <nav className="relative z-20 py-6 pl-6 pr-6">
      <div className="liquid-glass mx-auto flex max-w-5xl items-center justify-between rounded-full px-6 py-3">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <GraduationCap size={24} className="text-white" />
            <span className="text-lg font-semibold text-white">TestPro</span>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((label) => (
              <button
                key={label}
                type="button"
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/*
          `Show` renders null until Clerk resolves, so this cluster is absent
          from the first SSR paint. The min-height keeps the pill from changing
          size when it appears.
        */}
        <div className="flex min-h-9 items-center gap-4">
          <Show when="signed-out">
            <SignUpButton mode="modal">
              <Button
                variant="ghost"
                className="h-auto rounded-full px-0 py-0 text-sm font-medium text-white hover:bg-transparent hover:text-white/80"
              >
                Sign Up
              </Button>
            </SignUpButton>
            <SignInButton mode="modal">
              <Button
                variant="ghost"
                className="liquid-glass h-auto rounded-full px-6 py-2 text-sm font-medium text-white hover:bg-white/5 hover:text-white"
              >
                Login
              </Button>
            </SignInButton>
          </Show>

          <Show when="signed-in">
            <UserButton />
          </Show>
        </div>
      </div>
    </nav>
  )
}
