# Sign Up screen

## Visual & Interaction Breakdown

The Sign Up experience lives inside a 350 px wide card that floats above a slate-tinted backdrop. The composition is vertically centered, keeping the hero copy, form, and social affordances within a tight column for optimal scanning. Typography leans on the sans-serif system stack configured by the design system.

| Element | Role / Function | Font & Weight | Size (px / Tailwind class) | Color | Spacing & Layout | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| **Background** | Full-page canvas that grounds the flow | `font-sans` | `min-h-screen` | `bg-slate-100` (#F1F5F9) | Flex wrapper `items-center justify-center p-4` | Provides even breathing room on compact screens |
| **Form Card** | Structural container for the auth steps | Inherits | `w-[350px]` | `bg-white` (#FFFFFF) with default border transparent | Uses shadcn `Card` padding rhythm; `rounded-xl` & `shadow-sm` from component | Keeps content focused while implying depth |
| **Title** | Introduces the conversion intent | `font-semibold` | `text-2xl` via `CardTitle` | `text-slate-900` (#0F172A) | Stacks above description with ~8 px gap | Copy: “Create an account” |
| **Description** | Secondary guidance + link to sign-in | `font-normal` | `text-sm` (`14px`) | Body `text-slate-600` (#475569); link `underline text-slate-900` | Shares `CardHeader` column gap | Inline link routes to `/sign-in` |
| **Field Group Wrapper** | Wraps each label/input/error trio | `font-sans` | N/A | Transparent | `grid gap-2` | Ensures 8 px vertical rhythm |
| **Label: Email** | Identifies email control | `font-medium` | `text-sm` | `text-slate-900` | Associates with input using `htmlFor` | Copy: “Email” |
| **Input: Email** | Captures email address | `font-normal` | ~40 px height (`h-10`) | Border `#E2E8F0`, text `#0F172A`, placeholder `#94A3B8` | `w-full` field width | Placeholder “name@example.com”; invalid state toggles `aria-invalid` |
| **Label: Password** | Identifies password control | `font-medium` | `text-sm` | `text-slate-900` | Same spacing as email | Copy: “Password” |
| **Input: Password** | Captures password | `font-normal` | ~40 px height | Same as email input | `w-full` | `type="password"`; `aria-describedby` wires to helper |
| **Label: Confirm Password** | Verifies password | `font-medium` | `text-sm` | `text-slate-900` | Same as other groups | Copy: “Confirm Password” |
| **Input: Confirm Password** | Confirmation field | `font-normal` | ~40 px height | Same as email input | `w-full` | Mirrors password semantics |
| **Primary Submit** | Commits the registration | `font-medium` | Button height ~40 px (`h-10`) | `bg-slate-900` (#0F172A) text `white` | `w-full` inside footer stack | Label: “Create Account”; disabled state `opacity-50`; swaps copy to “Creating...” while pending |
| **Secondary Submit** | Shortcut for SSO flow discovery | `font-semibold` | Button height ~40 px | `variant="outline"` → border `#CBD5F5`, text `#0F172A` | Sits below primary button with 12 px gap | Label: “SSO”; clicking scrolls focus to provider grid |
| **Form Error Message** | Surfaces top-level failure | `font-normal` | `text-sm` | `text-red-500` (#EF4444) | Lives above buttons inside footer | Uses `role="alert"` for SR priority |
| **Separator** | Visually partitions classic vs SSO options | `font-semibold` | Text `text-[10px]` (10 px) | Text `text-slate-400` (#94A3B8) | Absolute chip overlay on `Separator` line | Copy: “OR CONTINUE WITH”; uppercase tracking `[0.2em]` |
| **Social Grid** | Lists identity providers | `font-normal` | Icon buttons `size="icon"` (~40×40) | Outline buttons `border-slate-200`; icons `text-slate-900` | `grid grid-cols-4 gap-4` | Buttons host sr-only labels and vector glyphs for Google, X, GitHub, Facebook; container receives focus when SSO is invoked |
| **Legal Copy** | Communicates contractual consent | `font-normal` | `text-xs` (12 px) | `text-slate-500`; links `underline text-slate-900` | `mt-6 text-center` block below grid | Copy: “By creating an account, you agree to our Terms of Service and Privacy Policy.” |

### Interaction Notes

- All fields clear their inline errors on change to keep validation responsive.
- The SSO button scrolls focus to the provider grid (`tabIndex="-1"`) for keyboard users.
- Submission locks the form, shows “Creating...” feedback, and resets inputs after a successful mock `signUp` call.
- Form-level failures appear above the buttons, aligned with accessibility best practices.

## Prompt

Design and build a **“Sign Up screen”** with these parameters:

1. **Canvas:** `min-h-screen` flex container centered on a `bg-slate-100` background using the app’s sans-serif base font.
2. **Card:** 350 px wide white `Card` with rounded corners and drop shadow; use shadcn/ui spacing primitives.
3. **Header:** Title “Create an account” (`text-2xl font-semibold text-slate-900`) plus supporting copy referencing the `/sign-in` link styled with `underline text-slate-900`.
4. **Form:** Stack labeled inputs for Email, Password, and Confirm Password (`text-sm font-medium` labels, 40 px tall inputs with placeholder `name@example.com` for the email control). Show inline errors in `text-sm text-red-500` with `role="alert"` and `aria-describedby` wiring.
5. **Actions:** Within the `CardFooter`, place two full-width buttons. Primary submit: `bg-slate-900 text-white` labeled “Create Account” with a loading state. Secondary submit: outline style labeled “SSO” that scrolls focus to the provider list.
6. **Separator & Providers:** Output a centered chip reading “OR CONTINUE WITH” above a four-column grid of icon-only outline buttons for Google, X, GitHub, and Facebook; include sr-only labels and 16 px icons.
7. **Legal Footer:** Add centered `text-xs text-slate-500` copy referencing `/terms` and `/privacy` links styled with underline treatment.

Implement with Next.js 14+, Tailwind CSS, shadcn/ui components, and Bun scripts.
