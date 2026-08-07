#!/usr/bin/env bash
#
# Vercel's build step — pushes the Convex backend, then builds the frontend.
#
# The two halves deploy separately, and a frontend newer than its backend is a
# crash rather than a degraded page: the report page reads `report.sections`,
# and an `attempts.report` from before that field existed simply doesn't return
# it. So the push happens here, in the same job as the build and ahead of it.
#
# This is deliberately not a GitHub Action. An Action triggered by `git push`
# would run *alongside* Vercel's build, not before it, so the new frontend
# could go live while the push was still in flight — which is the skew it was
# supposed to prevent. `convex deploy --cmd` orders the two by construction:
# the frontend build only runs if the push succeeded, and it receives the URL
# of the deployment that was just pushed to, so the bundle can never be built
# against a different backend than the one it was deployed with.
#
# Requires CONVEX_DEPLOY_KEY in Vercel's environment variables. See the
# Deployment section of CLAUDE.md for how to mint one.

set -euo pipefail

if [ "${VERCEL_ENV:-}" != "production" ]; then
  # Preview and development builds point at the same Convex deployment the
  # live site uses (see CLAUDE.md), so they must never push functions to it —
  # a branch's half-written backend would land on every client at once,
  # including students mid-test.
  echo "VERCEL_ENV=${VERCEL_ENV:-unset} — skipping the Convex push; building the frontend only."
  exec pnpm build
fi

if [ -z "${CONVEX_DEPLOY_KEY:-}" ]; then
  echo "CONVEX_DEPLOY_KEY is not set." >&2
  echo "A production build has to push Convex, or the deployed frontend runs" >&2
  echo "against whatever backend was last pushed by hand. Failing instead of" >&2
  echo "shipping that. Add the key in Vercel → Settings → Environment Variables." >&2
  exit 1
fi

exec npx convex deploy --cmd 'pnpm build' --cmd-url-env-var-name VITE_CONVEX_URL
