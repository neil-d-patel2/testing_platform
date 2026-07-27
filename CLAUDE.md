<!-- convex-ai-start -->

This project uses [Convex](https://convex.dev) as its backend.

When working on Convex code, **always read
`convex/_generated/ai/guidelines.md` first** for important guidelines on
how to correctly use Convex APIs and patterns. The file contains rules that
override what you may have learned about Convex from training data.

Convex agent skills for common tasks can be installed by running
`npx convex ai-files install`.

<!-- convex-ai-end -->

# testing-platform

TanStack Start (SSR) · Convex · Clerk · Tailwind v4 · shadcn/ui · pnpm · Vercel.

Read `README.md` for setup and architecture. This file covers the things that
have already bitten someone.

## Running it

Two processes, both needed:

```bash
pnpm dev:convex   # terminal 1 — watches convex/, pushes on save
pnpm dev          # terminal 2 — http://localhost:3000
```

The app **throws on boot** without `VITE_CONVEX_URL`. That's a deliberate guard
in `src/integrations/convex/provider.tsx`, not a bug.

## Before claiming done

```bash
pnpm typecheck && pnpm lint && pnpm check && pnpm build
```

`pnpm format` runs `eslint --fix` then `prettier` — in that order deliberately,
because ESLint's autofix leaves unformatted output if it runs last.

## Verify library APIs against types, don't trust docs

The published Clerk and Convex guides were **wrong** for the installed versions
more than once this project. `getAuth(getRequest())` and `<SignedIn>` are both
documented and both nonexistent here. When an import fails, read the real thing:

```bash
cat node_modules/<pkg>/dist/index.d.ts
```

## Gotchas

**Theming — no `next-themes`.** The theme resolves pre-hydration via an inline
script in `src/routes/__root.tsx` and lands as a `light`/`dark` class on
`<html>`. Components needing the current theme use `useResolvedTheme()` from
`src/lib/use-resolved-theme.ts`. `next-themes` was deliberately removed; don't
let a `pnpm dlx shadcn add` reintroduce it (check any new component that imports
`useTheme`).

**Clerk v6 uses `Show`, not `SignedIn`/`SignedOut`.** Those exports don't exist.

```tsx
<Show when="signed-in"><UserButton /></Show>
<Show when="signed-out"><SignInButton mode="modal" /></Show>
```

`Show` renders `null` while auth resolves, so auth-dependent UI is absent from
the first SSR paint. Don't design layouts that shift when it appears.

**Convex functions must derive identity from the JWT**, never from an argument —
args are client-controlled. `identity.subject` is the Clerk user id. `list`-style
filtering is not authorization: re-check ownership in every mutation, since a
client can post any `_id`. See `convex/todos.ts`.

**Generated — never hand-edit:** `src/routeTree.gen.ts`, `convex/_generated/**`.
Adding a route file? `pnpm generate-routes` (the dev server also does it).

**Schema changes on a populated table fail the push.** Adding a required field
rejects existing rows. Clear the table in the Convex dashboard or make the field
optional and backfill.

**`grep` treats the built HTML as binary** and silently matches nothing. Use
Python or `rg -a` when inspecting SSR output.

## UI conventions

- shadcn: `new-york`, base color `zinc`, components in `src/components/ui/`,
  import alias `#/*` → `src/*`
- Clerk's own components are themed via
  `<ClerkProvider appearance={{ theme: shadcn }}>` plus
  `@import '@clerk/ui/themes/shadcn.css'` in `src/styles.css`
- The landing page's "liquid glass" panels come from the `.liquid-glass` class in
  `src/styles.css` (backdrop blur + inset highlight). Headings use Instrument
  Serif, imported from Google Fonts at the top of `src/styles.css`. The
  scaffold's `Header`/`Footer`/`src/routes/demo/` chrome has been deleted.

## Deployment

Vercel project `neil-d-patel2s-projects/testing_platform`, GitHub-connected, so
`git push` deploys. Nitro auto-detects Vercel and emits `.vercel/output`.

**Currently running on Clerk + Convex _dev_ credentials.** The live site shares
the `clever-alligator-313` Convex dev deployment with localhost — same data.
Clerk dev caps at 100 users and shows a dev banner. Going to real production
needs a Convex prod deployment plus a Clerk production instance (which requires
a custom domain and your own Google OAuth client).

## What this app is

**TestPro** — a self-hosted SAT practice-test platform, built to replace a
$400/yr subscription with the tutor's own tests. Tests are hard-coded into the
repo by the tutor; students sign in, pick a test, and take it under a time
limit. `SPEC.md` holds the build plan and is the brief to hand an agent.

The landing page is built. The `todos` table and `convex/todos.ts` are leftover
scaffold, kept for now only as the reference example for per-user ownership
checks — delete both once the real attempt functions exist.
