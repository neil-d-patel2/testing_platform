import { useEffect, useState } from 'react'

export type ResolvedTheme = 'light' | 'dark'

function readResolvedTheme(): ResolvedTheme {
  if (typeof document === 'undefined') {
    return 'light'
  }
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

/**
 * Reads the theme that `ThemeToggle` (and the inline script in `__root.tsx`)
 * applies as a `light`/`dark` class on `<html>`, and re-renders when it flips.
 *
 * This project deliberately does not use `next-themes` — the root document
 * already resolves the theme before hydration to avoid a flash.
 */
export function useResolvedTheme(): ResolvedTheme {
  const [theme, setTheme] = useState<ResolvedTheme>('light')

  useEffect(() => {
    setTheme(readResolvedTheme())

    const observer = new MutationObserver(() => {
      setTheme(readResolvedTheme())
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return theme
}
