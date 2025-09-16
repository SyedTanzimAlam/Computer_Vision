export const colors = {
  background: "var(--background)",
  foreground: "var(--foreground)",
  surface: "var(--surface)",
  surfaceForeground: "var(--surface-foreground)",
  muted: "var(--muted)",
  mutedForeground: "var(--muted-foreground)",
  border: "var(--border)",
  borderStrong: "var(--border-strong)",
  label: "var(--label-foreground)",
  placeholder: "var(--placeholder)",
  separator: "var(--separator)",
  button: {
    background: "var(--button-background)",
    backgroundHover: "var(--button-background-hover)",
    foreground: "var(--button-foreground)",
    outlineForeground: "var(--button-outline-foreground)",
    outlineForegroundHover: "var(--button-outline-foreground-hover)",
    outlineBorder: "var(--button-outline-border)",
    outlineBorderHover: "var(--button-outline-border-hover)",
    ghostForeground: "var(--button-ghost-foreground)",
    ghostForegroundHover: "var(--button-ghost-foreground-hover)",
    ghostBackgroundHover: "var(--button-ghost-background-hover)",
  },
  input: {
    background: "var(--input-background)",
    foreground: "var(--input-foreground)",
    placeholder: "var(--input-placeholder)",
  },
  focusRing: {
    strong: "var(--focus-ring-strong)",
    subtle: "var(--focus-ring-subtle)",
    offset: "var(--focus-ring-offset)",
  },
  toast: {
    default: {
      background: "var(--toast-default-background)",
      foreground: "var(--toast-default-foreground)",
      border: "var(--toast-default-border)",
      indicator: "var(--toast-indicator-default)",
    },
    success: {
      background: "var(--toast-success-background)",
      foreground: "var(--toast-success-foreground)",
      border: "var(--toast-success-border)",
      indicator: "var(--toast-indicator-success)",
    },
    destructive: {
      background: "var(--toast-destructive-background)",
      foreground: "var(--toast-destructive-foreground)",
      border: "var(--toast-destructive-border)",
      indicator: "var(--toast-indicator-destructive)",
    },
  },
} as const;

export const radii = {
  md: "var(--radius-md)",
  card: "var(--radius-card)",
  toast: "var(--toast-radius)",
} as const;

export const spacing = {
  none: "var(--space-none)",
  xs: "var(--space-xs)",
  sm: "var(--space-sm)",
  md: "var(--space-md)",
  lg: "var(--space-lg)",
  xl: "var(--space-xl)",
} as const;

export const sizes = {
  button: {
    sm: "var(--size-button-sm)",
    md: "var(--size-button-md)",
    lg: "var(--size-button-lg)",
  },
} as const;

export const shadows = {
  card: "var(--shadow-card)",
  toast: {
    default: "var(--toast-default-shadow)",
    success: "var(--toast-success-shadow)",
    destructive: "var(--toast-destructive-shadow)",
  },
} as const;
