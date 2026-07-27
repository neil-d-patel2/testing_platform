//  @ts-check

import { tanstackConfig } from '@tanstack/eslint-config'

export default [
  ...tanstackConfig,
  {
    rules: {
      'import/no-cycle': 'off',
      'import/order': 'off',
      'sort-imports': 'off',
      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/require-await': 'off',
      'pnpm/json-enforce-catalog': 'off',
    },
  },
  {
    ignores: [
      'eslint.config.js',
      'prettier.config.js',
      // Convex codegen output — not covered by convex/tsconfig.json, so the
      // type-aware rules can't parse it.
      'convex/_generated/**',
      'src/routeTree.gen.ts',
      '.output/**',
      '.vercel/**',
    ],
  },
]
