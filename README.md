# testing-platform

TanStack Start · Convex · Tailwind CSS v4 · shadcn/ui · deployed on Vercel.

| Layer      | Choice                                                      |
| ---------- | ----------------------------------------------------------- |
| Framework  | TanStack Start (SSR) + TanStack Router (file-based routing) |
| Data       | Convex, bridged into TanStack Query                         |
| Styling    | Tailwind CSS v4 + shadcn/ui (new-york, zinc)                |
| Deployment | Vercel via Nitro                                            |
| Tooling    | pnpm, TypeScript, ESLint, Prettier                          |

# Getting Started

```bash
pnpm install
```

Convex needs a deployment before the app will boot. This opens a browser to log
in, provisions a dev deployment, and writes `CONVEX_DEPLOYMENT` and
`VITE_CONVEX_URL` into `.env.local`:

```bash
pnpm dev:convex
```

Leave that running (it watches `convex/` and pushes changes), and in a second
terminal start the app:

```bash
pnpm dev
```

The app runs at http://localhost:3000.

# Building For Production

```bash
pnpm build
```

Locally this produces a Node server in `.output/`. Preview it with
`pnpm preview`.

# Deploying to Vercel

Nitro detects Vercel from the CI environment and emits Build Output API v3 into
`.vercel/output` — no adapter config needed. `vercel.json` pins the build and
install commands so Vercel doesn't misdetect the project as a plain Vite app.

1. Import the repo in Vercel.
2. Set the environment variables from your **production** Convex deployment:
   - `VITE_CONVEX_URL`
   - `CONVEX_DEPLOY_KEY` (from the Convex dashboard)
3. Deploy.

To push Convex functions as part of the Vercel build, change the build command
to `npx convex deploy --cmd 'pnpm build'`.

## Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling.

### Removing Tailwind CSS

If you prefer not to use Tailwind CSS:

1. Remove the demo pages in `src/routes/demo/`
2. Replace the Tailwind import in `src/styles.css` with your own styles
3. Remove `tailwindcss()` from the plugins array in `vite.config.ts`
4. Remove `@tailwindcss/vite` and `tailwindcss` from `package.json`

## Linting & Formatting

This project uses [eslint](https://eslint.org/) and [prettier](https://prettier.io/) for linting and formatting. Eslint is configured using [tanstack/eslint-config](https://tanstack.com/config/latest/docs/eslint). The following scripts are available:

```bash
pnpm lint
pnpm format
pnpm check
```

## Convex + TanStack Query

Convex is wired into TanStack Query in
[`src/integrations/convex/provider.tsx`](src/integrations/convex/provider.tsx),
so Convex subscriptions stay live-updating while participating in the router's
loaders, SSR dehydration, and devtools. The clients are created per-request in
[`src/router.tsx`](src/router.tsx) and exposed on the router context.

Two ways to read data — both stay reactive:

```tsx
// 1. Plain Convex hook (see src/routes/demo/convex.tsx)
import { useQuery } from 'convex/react'
const todos = useQuery(api.todos.list)

// 2. Through TanStack Query — works in route loaders and SSR
import { convexQuery } from '@convex-dev/react-query'
import { useSuspenseQuery } from '@tanstack/react-query'
const { data } = useSuspenseQuery(convexQuery(api.todos.list, {}))
```

Prefetch in a loader via the router context:

```tsx
export const Route = createFileRoute('/todos')({
  loader: ({ context }) =>
    context.queryClient.ensureQueryData(convexQuery(api.todos.list, {})),
})
```

Schema lives in [`convex/schema.ts`](convex/schema.ts); functions in
[`convex/todos.ts`](convex/todos.ts).

## Shadcn

Add components using the latest version of [Shadcn](https://ui.shadcn.com/).

```bash
pnpm dlx shadcn@latest add button
```

Already installed: `button`, `card`, `input`, `label`, `sonner`,
`dropdown-menu`, `dialog`.

### Theming

This project does **not** use `next-themes`. The theme is resolved before
hydration by an inline script in
[`src/routes/__root.tsx`](src/routes/__root.tsx) and applied as a `light`/`dark`
class on `<html>`. Components that need the current theme should use
[`useResolvedTheme`](src/lib/use-resolved-theme.ts) — this is how
[`sonner.tsx`](src/components/ui/sonner.tsx) is wired.

## Routing

This project uses [TanStack Router](https://tanstack.com/router) with file-based routing. Routes are managed as files in `src/routes`.

### Adding A Route

To add a new route to your application just add a new file in the `./src/routes` directory.

TanStack will automatically generate the content of the route file for you.

Now that you have two routes you can use a `Link` component to navigate between them.

### Adding Links

To use SPA (Single Page Application) navigation you will need to import the `Link` component from `@tanstack/react-router`.

```tsx
import { Link } from '@tanstack/react-router'
```

Then anywhere in your JSX you can use it like so:

```tsx
<Link to="/about">About</Link>
```

This will create a link that will navigate to the `/about` route.

More information on the `Link` component can be found in the [Link documentation](https://tanstack.com/router/v1/docs/framework/react/api/router/linkComponent).

### Using A Layout

In the File Based Routing setup the layout is located in `src/routes/__root.tsx`. Anything you add to the root route will appear in all the routes. The route content will appear in the JSX where you render `{children}` in the `shellComponent`.

Here is an example layout that includes a header:

```tsx
import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'My App' },
    ],
  }),
  shellComponent: ({ children }) => (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
        </header>
        {children}
        <Scripts />
      </body>
    </html>
  ),
})
```

More information on layouts can be found in the [Layouts documentation](https://tanstack.com/router/latest/docs/framework/react/guide/routing-concepts#layouts).

## Server Functions

TanStack Start provides server functions that allow you to write server-side code that seamlessly integrates with your client components.

```tsx
import { createServerFn } from '@tanstack/react-start'

const getServerTime = createServerFn({
  method: 'GET',
}).handler(async () => {
  return new Date().toISOString()
})

// Use in a component
function MyComponent() {
  const [time, setTime] = useState('')

  useEffect(() => {
    getServerTime().then(setTime)
  }, [])

  return <div>Server time: {time}</div>
}
```

## API Routes

You can create API routes by using the `server` property in your route definitions:

```tsx
import { createFileRoute } from '@tanstack/react-router'
import { json } from '@tanstack/react-start'

export const Route = createFileRoute('/api/hello')({
  server: {
    handlers: {
      GET: () => json({ message: 'Hello, World!' }),
    },
  },
})
```

## Data Fetching

There are multiple ways to fetch data in your application. You can use TanStack Query to fetch data from a server. But you can also use the `loader` functionality built into TanStack Router to load the data for a route before it's rendered.

For example:

```tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/people')({
  loader: async () => {
    const response = await fetch('https://swapi.dev/api/people')
    return response.json()
  },
  component: PeopleComponent,
})

function PeopleComponent() {
  const data = Route.useLoaderData()
  return (
    <ul>
      {data.results.map((person) => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ul>
  )
}
```

Loaders simplify your data fetching logic dramatically. Check out more information in the [Loader documentation](https://tanstack.com/router/latest/docs/framework/react/guide/data-loading#loader-parameters).

# Demo files

Files prefixed with `demo` can be safely deleted. They are there to provide a starting point for you to play around with the features you've installed.

# Learn More

You can learn more about all of the offerings from TanStack in the [TanStack documentation](https://tanstack.com).

For TanStack Start specific documentation, visit [TanStack Start](https://tanstack.com/start).
