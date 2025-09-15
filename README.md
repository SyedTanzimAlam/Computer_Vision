# VisionForge Console

A Next.js + Tailwind recreation of the Shadcn Admin login experience tailored for the fictional VisionForge computer vision platform. The project runs on the Bun runtime and mirrors UI patterns from [satnaing/shadcn-admin](https://github.com/satnaing/shadcn-admin).

## Features

- **Console login layout:** Two-column hero with a gradient control tower, product highlights, and a white card sign-in form inspired by the reference design.
- **Client-side validation:** Email and password checks with inline status messaging, loading feedback, and a remember-me toggle.
- **Reusable buttons & SSO icons:** A typed button primitive plus branded single-sign-on icon buttons that follow the provided snippet.

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
app/
  globals.css     # Tailwind CSS imports and global design tokens
  layout.tsx      # Root layout, metadata, and font setup
  page.tsx        # Console login route with validation logic and social sign-on
  privacy/        # Static privacy policy route
components/
  ui/button.tsx   # Button primitive used throughout the login experience
```

## Deployment

Build the site before deploying to your hosting provider of choice:

```bash
bun run build
```

The generated output in `.next/` can be served with `bun run start` or deployed to platforms like Vercel or Netlify.
