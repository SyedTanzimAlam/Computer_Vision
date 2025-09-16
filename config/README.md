# UI tokens

The files in this directory expose the design tokens that power the shared UI primitives. The values mirror the CSS custom properties declared in [`app/globals.css`](../app/globals.css), making it possible to keep TypeScript and CSS in sync.

## `colors`

`colors` maps semantic color names (backgrounds, borders, button states, typography, etc.) to the matching CSS variables. Importing these tokens ensures component styles stay aligned with the palette defined in `globals.css`.

## `radii`

`radii` surfaces the rounded corner sizes used across the interface. Each entry points to the same CSS variable consumed by the global theme so components can set radii without hardcoding pixel values.

## `spacing`

`spacing` contains the spacing scale that UI elements rely on. Using the exported values keeps layout measurements consistent with the CSS counterparts and allows future adjustments from a single place.

## `sizes`

`sizes` exposes the fixed control heights (like button sizing) declared in CSS. Referencing these tokens ensures inputs and buttons stay aligned when the underlying values shift.

## `shadows`

`shadows` mirrors the shadow presets defined in CSS, enabling components to reuse the same elevation treatments without duplicating raw values.
