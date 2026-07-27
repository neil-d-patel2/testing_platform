import { useAuth } from '@clerk/tanstack-react-start'
import { ConvexQueryClient } from '@convex-dev/react-query'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ConvexProviderWithClerk } from 'convex/react-clerk'

const CONVEX_URL = import.meta.env.VITE_CONVEX_URL

if (!CONVEX_URL) {
  throw new Error(
    'Missing VITE_CONVEX_URL. Run `pnpm dev:convex` to provision a deployment ' +
      '(it writes CONVEX_DEPLOYMENT and VITE_CONVEX_URL into .env.local), then ' +
      'restart `pnpm dev`.',
  )
}

/**
 * Wires Convex's reactive subscriptions into TanStack Query's cache, so
 * `useSuspenseQuery(convexQuery(api.foo.bar, args))` stays live-updating while
 * still participating in router loaders, SSR dehydration, and devtools.
 */
export function createConvexQueryClient() {
  const convexQueryClient = new ConvexQueryClient(CONVEX_URL)

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        queryKeyHashFn: convexQueryClient.hashFn(),
        queryFn: convexQueryClient.queryFn(),
      },
    },
  })

  convexQueryClient.connect(queryClient)

  return { convexQueryClient, queryClient }
}

/**
 * `ConvexProviderWithClerk` keeps the Convex client's auth token in sync with
 * Clerk's session, so every query/mutation carries a Clerk identity that
 * `ctx.auth.getUserIdentity()` can read inside Convex functions.
 *
 * Must be rendered inside `ClerkProvider` — it reads Clerk's `useAuth`.
 */
export default function AppConvexProvider({
  convexQueryClient,
  queryClient,
  children,
}: {
  convexQueryClient: ConvexQueryClient
  queryClient: QueryClient
  children: React.ReactNode
}) {
  return (
    <ConvexProviderWithClerk
      client={convexQueryClient.convexClient}
      useAuth={useAuth}
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ConvexProviderWithClerk>
  )
}
