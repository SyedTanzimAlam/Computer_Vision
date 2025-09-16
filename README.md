# VisionForge Console


A Next.js + Tailwind recreation of the Shadcn Admin create-account experience tailored for the fictional VisionForge computer vision platform. The project runs on the Bun runtime and mirrors the UI patterns from [satnaing/shadcn-admin](https://github.com/satnaing/shadcn-admin).

## Features

- **Shadcn-inspired layout:** Centered brand header, rounded card, and clean typography matching the reference design.
- **Client-side validation:** Email, password length, and confirmation checks with inline success or error feedback.
- **Social sign-in placeholders:** GitHub and Facebook buttons with status messaging ready for integration.

## Tech stack

- **Framework:** Next.js 15 with the App Router
- **Runtime & package manager:** Bun 1.2+
- **Styling:** Tailwind CSS v4 utilities via `@import "tailwindcss"`
- **TypeScript:** Strict configuration with the modern JSX runtime

## Getting started

Install dependencies:


```bash
bun install
```


Run the development server:


```bash
bun run dev
```


Then open [http://localhost:3000](http://localhost:3000) in your browser. Edits to files inside `app/` hot reload automatically.


## Available scripts

```bash
bun run dev     # Start the development server
bun run build   # Create a production build
bun run start   # Serve the production build
bun run lint    # Run ESLint using the Next.js config
```

## Project structure

```
config/
  eslint.config.mjs   # ESLint flat config re-exported at the repo root
  next.config.ts      # Next.js app configuration (re-exported by root file)
  postcss.config.mjs  # PostCSS plugins shared across the app
app/

  globals.css     # Tailwind CSS imports and global design tokens
  layout.tsx      # Root layout, metadata, and font setup
  page.tsx        # VisionForge create-account page with validation logic
  privacy/        # Static privacy policy route
public/           # Static assets such as the favicon

```

## Documentation

- [Design language](docs/design.md) — summarizes the typography scale, color palette, component patterns, and spacing rules that drive the interface.

## Deployment

Build the site before deploying to your hosting provider of choice:

```bash
bun run build
```


The generated output in `.next/` can be served with `bun run start` or deployed to platforms like Vercel or Netlify.

