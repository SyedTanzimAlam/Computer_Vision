# VisionForge Console


A sign-in experience for the fictional VisionForge computer vision platform, inspired by the [Shadcn Admin login](https://github.com/satnaing/shadcn-admin). The page runs on [Next.js](https://nextjs.org/) with the App Router, styles come from [Tailwind CSS](https://tailwindcss.com/), and the project is powered by the [Bun](https://bun.sh/) runtime.

## Features

- **Glassmorphism design:** Gradient halos, subtle shadows, and blurred card surfaces recreate the polished Shadcn Admin aesthetic.
- **Interactive login form:** Client-side validation with friendly messaging, loading states, and mock social sign-in actions.
- **Accessible defaults:** Semantic labels, focus rings, and keyboard-friendly buttons ready for further integration.

## Tech stack

- **Framework:** Next.js 15 with the App Router and Turbopack dev server
- **Runtime & package manager:** Bun 1.2+
- **Styling:** Tailwind CSS v4 (utility classes and inline themes)
- **TypeScript:** Strictode with modern JSX runtime

## Getting started

Install dependencies if you have not already:


```bash
bun install
```


Run the development server with Turbopack:


```bash
bun run dev
```


Then open [http://localhost:3000](http://localhost:3000) in your browser. Edits to files inside `app/` automatically hot reload the page.


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

  globals.css     # Tailwind CSS imports and design tokens
  layout.tsx      # Root layout, metadata, and font setup
  page.tsx        # Shadcn Admin–inspired login page with validation logic
  privacy/        # Static privacy policy route
public/           # Static assets such as the favicon

```

## Deployment

Build the site before deploying to your hosting provider of choice:

```bash
bun run build
```

The generated output in `.next/` can be served with `bun run start` or exported to the platform you prefer (Vercel, Netlify, etc.).
