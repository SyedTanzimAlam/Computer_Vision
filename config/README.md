# UI tokens

The files in this directory expose the design tokens that power the shared UI primitives. The values mirror the CSS custom properties declared in [`app/globals.css`](../app/globals.css), making it possible to keep TypeScript and CSS in sync.

## `colors`

`colors` maps semantic color names (backgrounds, borders, button states, typography, etc.) to the matching CSS variables. Importing these tokens ensures component styles stay aligned with the palette defined in `globals.css`. Reach for them when styling interactive components—e.g., `colors.button.background` drives the filled button in `components/ui/button.tsx`, and `colors.toast.success.background` keeps toast notifications on brand.

## `radii`

`radii` surfaces the rounded corner sizes used across the interface. Each entry points to the same CSS variable consumed by the global theme so components can set radii without hardcoding pixel values. Use `radii.card` for surfaces such as dashboard cards and `radii.toast` to match the curvature on toast notifications.

## `spacing`

`spacing` contains the spacing scale that UI elements rely on. Using the exported values keeps layout measurements consistent with the CSS counterparts and allows future adjustments from a single place. Pair tokens like `spacing.md` with container padding or layout gaps—`spacing.lg` works well for section padding while `spacing.xs` handles inline control gaps.

## `sizes`

`sizes` exposes the fixed control heights (like button sizing) declared in CSS. Referencing these tokens ensures inputs and buttons stay aligned when the underlying values shift. For instance, wire `sizes.button.md` into the default button component and `sizes.button.sm` into compact toolbars or icon buttons.

## `shadows`

`shadows` mirrors the shadow presets defined in CSS, enabling components to reuse the same elevation treatments without duplicating raw values. Apply `shadows.card` to raised surfaces such as modals, and switch to `shadows.toast.success` when highlighting positive toast states.
