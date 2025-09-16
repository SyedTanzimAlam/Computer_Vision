# Design tokens

The UI token module (`config/ui.ts`) mirrors the CSS custom properties declared in `app/globals.css`. Import these constants instead of hard-coding values so components stay aligned with the global theme.

## Colors

### Base colors

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

### Button colors

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

### Input colors

| Token | CSS variable | Description |
| --- | --- | --- |
| `colors.input.background` | `--input-background` | Input background fill. |
| `colors.input.foreground` | `--input-foreground` | Input text color. |
| `colors.input.placeholder` | `--input-placeholder` | Input placeholder color. |

### Focus ring

| Token | CSS variable | Description |
| --- | --- | --- |
| `colors.focusRing.strong` | `--focus-ring-strong` | Prominent focus ring color. |
| `colors.focusRing.subtle` | `--focus-ring-subtle` | Subtle focus outline. |
| `colors.focusRing.offset` | `--focus-ring-offset` | Background offset color behind focus rings. |

### Toast colors

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

## Radii

| Token | CSS variable | Description |
| --- | --- | --- |
| `radii.md` | `--radius-md` | Standard control rounding. |
| `radii.card` | `--radius-card` | Large rounding for cards and surfaces. |
| `radii.toast` | `--toast-radius` | Toast container rounding. |

## Spacing

| Token | CSS variable | Description |
| --- | --- | --- |
| `spacing.none` | `--space-none` | Zero spacing. |
| `spacing.xs` | `--space-xs` | Extra-small spacing token. |
| `spacing.sm` | `--space-sm` | Small spacing token. |
| `spacing.md` | `--space-md` | Medium spacing token. |
| `spacing.lg` | `--space-lg` | Large spacing token. |
| `spacing.xl` | `--space-xl` | Extra-large spacing token. |

## Sizes

| Token | CSS variable | Description |
| --- | --- | --- |
| `sizes.button.sm` | `--size-button-sm` | Small button height. |
| `sizes.button.md` | `--size-button-md` | Default button height. |
| `sizes.button.lg` | `--size-button-lg` | Large button height. |

## Shadows

| Token | CSS variable | Description |
| --- | --- | --- |
| `shadows.card` | `--shadow-card` | Elevated card shadow. |
| `shadows.toast.default` | `--toast-default-shadow` | Default toast shadow. |
| `shadows.toast.success` | `--toast-success-shadow` | Success toast shadow. |
| `shadows.toast.destructive` | `--toast-destructive-shadow` | Destructive toast shadow. |
