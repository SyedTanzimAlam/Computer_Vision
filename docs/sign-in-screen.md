# Sign In screen

## Visual & Interaction Breakdown

The Sign In interface mirrors the sign-up visual language: a compact authentication card centered on a light slate canvas. Copy hierarchy, spacing, and button treatments reuse shadcn/ui primitives to reinforce consistency across the auth journey.

| Element | Role / Function | Font & Weight | Size (px / Tailwind class) | Color | Spacing & Layout | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| **Background** | Root canvas that centers the auth card | `font-sans` | `min-h-screen` | `bg-slate-100` (#F1F5F9) | Flex wrapper `items-center justify-center p-4` | Guarantees breathing room on small screens |
| **Form Card** | Container for credentials and affordances | Inherits | `w-[350px]` | `bg-white` (#FFFFFF) | Uses shadcn `Card` padding and rounded corners | Matches Sign Up proportions |
| **Title** | Communicates task focus | `font-semibold` | `text-2xl` via `CardTitle` | `text-slate-900` (#0F172A) | Sits above copy with ~8 px gap | Text: “Sign in to your account” |
| **Description** | Provides context and helper credentials | `font-normal` | `text-sm` (14 px) | `text-slate-600` (#475569) | Shares header column gap | Embeds bolded `{TEST_CREDENTIALS}` values for quick testing |
| **Social Choice Row** | Allows direct provider auth | `font-medium` | Buttons ~40 px tall | Outline style `border-slate-200`; icon fill `currentColor` (#0F172A) | `grid grid-cols-2 gap-4` | Buttons show GitHub and Google with inline glyphs |
| **Separator** | Divides federated auth from form | `font-semibold` | Text `text-[10px]` | Chip text `text-slate-400` (#94A3B8); line inherits `Separator` neutral | Positioned in a `relative` wrapper so the chip sits centered on the rule | Copy: “OR CONTINUE WITH”; uppercase `[0.2em]` tracking |
| **Label: Email** | Identifies email control | `font-medium` | `text-sm` | `text-slate-900` | `grid gap-2` wrapper ensures 8 px rhythm | Copy: “Email” |
| **Input: Email** | Captures username/email | `font-normal` | ~40 px height (`h-10`) | Border `#E2E8F0`, text `#0F172A`, placeholder `#94A3B8` | `w-full` | Placeholder “m@example.com”; wires `autoComplete="email"` |
| **Label: Password** | Identifies password control | `font-medium` | `text-sm` | `text-slate-900` | Same stack spacing | Copy: “Password” |
| **Input: Password** | Captures password | `font-normal` | ~40 px height | Same as email input | `w-full` | Uses `type="password"` + `autoComplete="current-password"` |
| **Field Errors** | Inline validation copy | `font-normal` | `text-sm` | `text-red-500` (#EF4444) | Lives directly beneath each input | `role="alert"` and `aria-describedby` provide accessibility |
| **Primary Action** | Submits credentials | `font-medium` | Button height ~40 px | `bg-slate-900` (#0F172A) text `white` | `w-full` inside footer column | Text toggles between “Sign in” and “Signing in...”; disabled while pending |
| **Cross-link Text** | Nudges new users to register | `font-normal` | `text-sm` | Base `text-slate-600`; link `font-medium underline text-slate-900` | Sits beneath the button with 12 px gap | Copy: “New to VisionForge? Create an account.” |

### Interaction Notes

- Email & password inputs clear their respective errors as the user types, keeping feedback contextual.
- The sign-in button controls the same form submit handler and references the social button group via `aria-controls` for assistive tech clarity.
- On success, `signIn` resolves and the router transitions to `/dashboard`; failures surface a form-level error above the actions.
- The social provider group exposes semantic labels and retains focus outlines for keyboard navigation.

## Prompt

Create a **“Sign In screen”** that aligns with the Sign Up experience:

1. **Canvas & Card:** Center a 350 px wide white auth card on a `bg-slate-100` flex container using the sans-serif base font.
2. **Header:** Use `text-2xl font-semibold text-slate-900` for “Sign in to your account” and follow it with `text-sm text-slate-600` copy that highlights demo credentials in bold.
3. **Federated Buttons:** Add a `grid grid-cols-2 gap-4` row of outline buttons for GitHub and Google, each with a leading 16 px icon and readable labels.
4. **Divider:** Insert a `Separator` with a centered chip reading “OR CONTINUE WITH” styled as `text-[10px] uppercase tracking-[0.2em] text-slate-400` on a white background.
5. **Form Fields:** Stack labeled inputs for Email and Password (`text-sm font-medium` labels). Inputs should be 40 px tall, full width, with placeholders, `autoComplete` hints, and inline error states using `text-sm text-red-500` plus accessible IDs.
6. **Actions:** In the footer, place a full-width primary button (`bg-slate-900 text-white`) that disables and swaps copy to “Signing in...” during submission. Beneath it, show `text-sm text-slate-600` copy linking to the `/sign-up` route with underline styling.
7. **Behavior:** Wire the form to a mock `signIn` helper, redirect to `/dashboard` on success, and expose a top-level error message above the actions when authentication fails.

Implement the screen in Next.js with Tailwind CSS, shadcn/ui components, and Bun tooling.
