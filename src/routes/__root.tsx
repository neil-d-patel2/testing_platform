import { ClerkProvider } from '@clerk/tanstack-react-start'
import { auth } from '@clerk/tanstack-react-start/server'
import { shadcn } from '@clerk/ui/themes'
import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
  useRouter,
} from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { ReactQueryDevtoolsPanel } from '@tanstack/react-query-devtools'
import type { QueryClient } from '@tanstack/react-query'
import type { ConvexQueryClient } from '@convex-dev/react-query'
import { Toaster } from '../components/ui/sonner'

import ConvexProvider from '../integrations/convex/provider'

import appCss from '../styles.css?url'

export interface RouterContext {
  queryClient: QueryClient
  convexQueryClient: ConvexQueryClient
}

/**
 * Reads the Clerk session on the server and hands the JWT to Convex, so the
 * SSR pass renders as the signed-in user instead of flashing signed-out
 * content before the client rehydrates.
 *
 * Relies on `clerkMiddleware()` being registered in `src/start.ts`.
 */
const fetchClerkAuth = createServerFn({ method: 'GET' }).handler(async () => {
  const { userId, getToken } = await auth()
  const token = await getToken({ template: 'convex' })

  return { userId, token }
})

const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}catch(e){}})();`

export const Route = createRootRouteWithContext<RouterContext>()({
  beforeLoad: async (ctx) => {
    const { userId, token } = await fetchClerkAuth()

    // Authenticates Convex queries issued during SSR (loaders, prefetches).
    if (token) {
      ctx.context.convexQueryClient.serverHttpClient?.setAuth(token)
    }

    return { userId, token }
  },
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TestPro — SAT Practice Tests',
      },
      {
        name: 'description',
        content:
          'Full-length, timed SAT practice tests. Sign in, pick a test, and get to work.',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const { queryClient, convexQueryClient } = useRouter().options.context

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <HeadContent />
      </head>
      <body className="bg-black font-sans antialiased">
        <ClerkProvider appearance={{ theme: shadcn }}>
          <ConvexProvider
            convexQueryClient={convexQueryClient}
            queryClient={queryClient}
          >
            {children}
            <Toaster />
            <TanStackDevtools
              config={{
                position: 'bottom-right',
              }}
              plugins={[
                {
                  name: 'Tanstack Router',
                  render: <TanStackRouterDevtoolsPanel />,
                },
                {
                  name: 'Tanstack Query',
                  render: <ReactQueryDevtoolsPanel />,
                },
              ]}
            />
          </ConvexProvider>
          <Scripts />
        </ClerkProvider>
      </body>
    </html>
  )
}
