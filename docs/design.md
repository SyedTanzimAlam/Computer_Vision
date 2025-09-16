# VisionForge design language

VisionForge's interface is built on a small set of theme tokens defined in `app/globals.css` and mirrored in TypeScript via `config/ui.ts`. The sections below summarize the typography, palette, component conventions, and spacing system that keep the experience cohesive while providing a quick reference for the underlying tokens.


## Typography

- **Font families.** Geist Sans provides the primary voice for UI copy, with Geist Mono available for system feedback via CSS variables registered in the root layout.
- **Hero & card headings.** Prominent titles use the `text-2xl` scale with tight tracking and a semibold weight to mirror the reference Shadcn admin layout.
- **Body copy.** Standard paragraphs, form descriptions, and button labels sit at the `text-sm` step. Labels layer on `font-medium` for clarity, while muted paragraphs shift to lighter slate tones for hierarchy.
- **Supporting text.** Legal disclaimers drop to `text-xs` and lighter grays, and microcopy such as the social login separator relies on uppercase `text-xs` with extended tracking to signal a section break.

## Color

The palette balances soft neutrals with a deep slate accent. Tokens cascade from the background canvas to focused interactions so changes propagate through the entire console.

### Palette overview

| Token | Value | Typical usage |
| --- | --- | --- |
| `--background` | `#f8fafc` | App canvas and page background |
| `--foreground` | `#0f172a` | High-contrast text on light surfaces |
| `--surface` | `#ffffff` | Cards, form controls, and modals |
| `--surface-foreground` | `oklch(12.9% 0.042 264.695)` | Default text inside surfaced elements |
| `--muted` / `--muted-foreground` | `oklch(44.6% 0.043 257.281)` / `oklch(55.4% 0.046 257.417)` | Subdued backgrounds and supporting text |
| `--border` / `--border-strong` | `oklch(92.9% 0.013 255.508)` / `oklch(86.9% 0.022 252.894)` | Divider lines, cards, and input outlines |
| `--button-background` → `--button-background-hover` | `oklch(20.8% 0.042 265.755)` → `oklch(27.9% 0.041 260.031)` | Primary button fill and hover state |
| `--button-foreground` | `#ffffff` | Primary button text |
| `--button-outline-foreground` / hover | `oklch(37.2% 0.044 257.287)` / `oklch(20.8% 0.042 265.755)` | Outline button text and hover accent |
| `--button-ghost-foreground` / hover | `oklch(44.6% 0.043 257.281)` / `oklch(20.8% 0.042 265.755)` | Low-emphasis button foreground and hover state |
| `--button-ghost-background-hover` | `oklch(96.8% 0.007 247.896)` | Hover wash for ghost buttons |
| `--input-background` / `--input-foreground` | `#ffffff` / `oklch(20.8% 0.042 265.755)` | Form fields |
| `--placeholder` | `oklch(70.4% 0.04 256.788)` | Input placeholder copy |
| `--separator` | `oklch(92.9% 0.013 255.508)` | Rules such as the social login divider |
| `--focus-ring-strong` / `--focus-ring-subtle` | `rgb(15 23 42 / 0.2)` / `rgb(15 23 42 / 0.1)` | Keyboard focus treatments |
| `--shadow-card` | `0 20px 50px -35px rgb(15 23 42 / 0.45)` | Soft drop shadow applied to elevated cards |

### Color tokens

#### Base colors

| Token | CSS variable | Description |
| --- | --- | --- |
| `colors.background` | `--background` | Default page background. |
| `colors.foreground` | `--foreground` | Primary text color. |
| `colors.surface` | `--surface` | Card and panel background. |
| `colors.surfaceForeground` | `--surface-foreground` | Text color on surfaces. |
| `colors.muted` | `--muted` | Muted background accents. |
| `colors.mutedForeground` | `--muted-foreground` | Muted text for secondary information. |
| `colors.border` | `--border` | Standard border color. |
| `colors.borderStrong` | `--border-strong` | Stronger border treatment for emphasis. |
| `colors.label` | `--label-foreground` | Form label color. |
| `colors.placeholder` | `--placeholder` | Low-contrast placeholder text. |
| `colors.separator` | `--separator` | Divider color. |


#### Button colors


| Token | CSS variable | Description |
| --- | --- | --- |
| `colors.button.background` | `--button-background` | Filled button background. |
| `colors.button.backgroundHover` | `--button-background-hover` | Filled button hover state. |
| `colors.button.foreground` | `--button-foreground` | Filled button text color. |
| `colors.button.outlineForeground` | `--button-outline-foreground` | Outline button text color. |
| `colors.button.outlineForegroundHover` | `--button-outline-foreground-hover` | Outline button hover text color. |
| `colors.button.outlineBorder` | `--button-outline-border` | Outline button border. |
| `colors.button.outlineBorderHover` | `--button-outline-border-hover` | Outline button hover border. |
| `colors.button.ghostForeground` | `--button-ghost-foreground` | Ghost button text color. |
| `colors.button.ghostForegroundHover` | `--button-ghost-foreground-hover` | Ghost button hover text color. |
| `colors.button.ghostBackgroundHover` | `--button-ghost-background-hover` | Ghost button hover background. |


#### Input colors


| Token | CSS variable | Description |
| --- | --- | --- |
| `colors.input.background` | `--input-background` | Input background fill. |
| `colors.input.foreground` | `--input-foreground` | Input text color. |
| `colors.input.placeholder` | `--input-placeholder` | Input placeholder color. |


#### Focus ring


| Token | CSS variable | Description |
| --- | --- | --- |
| `colors.focusRing.strong` | `--focus-ring-strong` | Prominent focus ring color. |
| `colors.focusRing.subtle` | `--focus-ring-subtle` | Subtle focus outline. |
| `colors.focusRing.offset` | `--focus-ring-offset` | Background offset color behind focus rings. |


#### Toast colors


| Token | CSS variable | Description |
| --- | --- | --- |
| `colors.toast.default.background` | `--toast-default-background` | Default toast background. |
| `colors.toast.default.foreground` | `--toast-default-foreground` | Default toast text color. |
| `colors.toast.default.border` | `--toast-default-border` | Default toast border. |
| `colors.toast.default.indicator` | `--toast-indicator-default` | Indicator dot for default toasts. |
| `colors.toast.success.background` | `--toast-success-background` | Success toast background. |
| `colors.toast.success.foreground` | `--toast-success-foreground` | Success toast text color. |
| `colors.toast.success.border` | `--toast-success-border` | Success toast border. |
| `colors.toast.success.indicator` | `--toast-indicator-success` | Success indicator dot. |
| `colors.toast.destructive.background` | `--toast-destructive-background` | Destructive toast background. |
| `colors.toast.destructive.foreground` | `--toast-destructive-foreground` | Destructive toast text color. |
| `colors.toast.destructive.border` | `--toast-destructive-border` | Destructive toast border. |
| `colors.toast.destructive.indicator` | `--toast-indicator-destructive` | Destructive indicator dot. |


## Components

Tokens power a set of layout and interaction patterns that keep every surface aligned.

### Layout shell

- The landing screen centers content both vertically and horizontally, using a `min-h-screen` canvas with generous `px-4 py-12` breathing room and a `max-w-md` column to keep forms readable on all breakpoints.

### Cards and sections

- The primary account card rounds to 24px, layers a subtle border, and applies the shared card shadow for depth. Internal sections employ vertical stacks (`space-y-*`) to separate the heading, form body, and legal footer while keeping the card compact.
- The reusable `Card` primitives replicate this structure: `Card` applies the surface colors, border, and shadow tokens, while `CardHeader`, `CardContent`, and `CardFooter` standardize padding and gaps with spacing variables. `CardTitle` and `CardDescription` bake in the headline and supporting text styles so screens stay aligned.

### Buttons

- Button primitives expose default, outline, ghost, and icon variants. Each variant injects the palette tokens for background, foreground, hover, and focus states, ensuring interactions stay consistent with the theme. Size presets share button heights and horizontal padding through the spacing scale, guaranteeing even touch targets across contexts.

### Form controls

- Inputs reuse the medium radius, border color, and focus-ring tokens to align with buttons. Padding derives from the spacing scale so controls line up horizontally, and labels inherit the muted label color with a `text-sm font-medium` treatment for clarity.

### Feedback surfaces

- Inline feedback (success and error) lives inside a rounded alert with `px-4 py-3` padding, icon medallions, and tone-specific palettes. Success leans on emerald tokens while errors retain white backgrounds with rose accents, maintaining contrast without deviating from the neutral base.
- Toast notifications share the same theme variables via the root `Toaster`, inheriting font families and focus styles to keep global messaging cohesive.

### Social actions

- The federated login options render as a four-column grid of square ghost buttons. Each tile balances icon-only affordances with `sr-only` labels for accessibility while relying on border and hover tokens from the surface palette.

### Component tokens

#### Radii


| Token | CSS variable | Description |
| --- | --- | --- |
| `radii.md` | `--radius-md` | Standard control rounding. |
| `radii.card` | `--radius-card` | Large rounding for cards and surfaces. |
| `radii.toast` | `--toast-radius` | Toast container rounding. |


#### Sizes


| Token | CSS variable | Description |
| --- | --- | --- |
| `sizes.button.sm` | `--size-button-sm` | Small button height. |
| `sizes.button.md` | `--size-button-md` | Default button height. |
| `sizes.button.lg` | `--size-button-lg` | Large button height. |


#### Shadows
=======
These tokens are defined in [`config/ui.ts`](../config/ui.ts) and backed by [`app/globals.css`](../app/globals.css).


| Token | CSS variable | Description |
| --- | --- | --- |
| `shadows.card` | `--shadow-card` | Elevated card shadow. |
| `shadows.toast.default` | `--toast-default-shadow` | Default toast shadow. |
| `shadows.toast.success` | `--toast-success-shadow` | Success toast shadow. |
| `shadows.toast.destructive` | `--toast-destructive-shadow` | Destructive toast shadow. |


## Spacing

- **Core scale.** The theme exports six primary spacing steps: `0px`, `0.5rem`, `0.75rem`, `1rem`, `1.25rem`, and `1.5rem`. Button heights extend the scale with 2.25rem, 2.5rem, and 2.75rem presets for small, default, and large controls.
- **Layout rhythm.** Page-level sections use `space-y-8` stacks and 2rem card padding to maintain breathing room without exceeding the compact max width. Headings, form groups, and disclaimers follow `space-y-2` / `space-y-5` groupings to keep related elements visually linked.
- **Component contracts.** Buttons, inputs, and card sections read spacing tokens through `config/ui.ts`, so adjusting a single CSS variable propagates consistent padding, heights, and radii across all primitives.

### Spacing tokens

| Token | CSS variable | Description |
| --- | --- | --- |
| `spacing.none` | `--space-none` | Zero spacing. |
| `spacing.xs` | `--space-xs` | Extra-small spacing token. |
| `spacing.sm` | `--space-sm` | Small spacing token. |
| `spacing.md` | `--space-md` | Medium spacing token. |
| `spacing.lg` | `--space-lg` | Large spacing token. |
| `spacing.xl` | `--space-xl` | Extra-large spacing token. |

