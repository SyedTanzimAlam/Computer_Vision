# Configuration and Environment Reference

This document explains how the repository's shared configuration is organized and how to work with the Bun-based tooling that powers linting, builds, and development.

## `config/` directory

The `config/` folder centralizes settings that are re-exported at the project root so that Next.js, ESLint, and PostCSS all read from a single source of truth.

| File | Role |
| --- | --- |
| `config/README.md` | Describes the design-token exports that keep TypeScript values aligned with the CSS custom properties declared in `app/globals.css`. Use it as the reference when extending `config/ui.ts`. |
| `config/ui.ts` | Exposes color, spacing, and border-radius tokens that mirror the global CSS variables. Import these values in components to avoid hardcoding presentation details and to stay synchronized with the theme. |
| `config/eslint.config.mjs` | Builds the ESLint flat configuration using `@eslint/eslintrc`'s `FlatCompat`. It layers the `next/core-web-vitals` and `next/typescript` presets and ignores generated output such as `.next/`, `out/`, and `build/`. |
| `config/next.config.ts` | Source of truth for project-level Next.js options. Update this file to change build features (images, headers, experimental flags, etc.); the root `next.config.ts` simply re-exports it. |
| `config/postcss.config.mjs` | Declares the PostCSS plugin chain—currently `@tailwindcss/postcss`, which enables Tailwind CSS v4 utilities throughout the app. |

### Root re-exports

- `next.config.ts`, `eslint.config.mjs`, and `postcss.config.mjs` at the repository root do nothing except import and re-export the corresponding modules from `config/`. This indirection lets IDEs and CLIs locate the expected filenames while keeping the actual configuration centrally managed.
- `bun.lock` captures the exact dependency graph resolved by Bun so that installs and builds are reproducible across machines.

## TypeScript settings (`tsconfig.json`)

The TypeScript configuration enforces modern, strict typing while delegating emission to Next.js:

- Targets `ES2017` output semantics, with DOM and latest ECMAScript lib definitions available for browser-based features.
- Enables `strict`, `isolatedModules`, and `incremental` to catch type issues early and speed up successive builds.
- Uses `module: "esnext"` with `moduleResolution: "bundler"`, matching Next.js 15's expectations in the Bun runtime.
- Allows JavaScript files (`allowJs`) and JSON imports (`resolveJsonModule`) for incremental migration or configuration-based data.
- Registers the Next.js TypeScript plugin and a path alias so that `@/*` resolves to the repository root, simplifying imports across the app.
- Includes all `.ts`/`.tsx` sources plus the generated `.next/types` declarations while excluding `node_modules/`.

## Running tasks with Bun

1. Install dependencies once with `bun install`.
2. Start the development server via `bun run dev`, which invokes `next dev --turbopack` for a fast, hot-reloading local environment at <http://localhost:3000>.
3. Run lint checks using `bun run lint`; this executes ESLint with the shared flat config and Next.js presets.
4. Produce an optimized production build using `bun run build`, which runs `next build --turbopack`. Follow up with `bun run start` when you need to serve the generated `.next/` output locally.

