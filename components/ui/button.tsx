import { forwardRef } from "react";
import type { ButtonHTMLAttributes, CSSProperties } from "react";

import { colors, radii, sizes, spacing } from "@/config/ui";
import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "outline" | "ghost";
type ButtonSize = "default" | "sm" | "lg" | "icon";

type ButtonStyleConfig = {
  className: string;
  vars?: CSSProperties;
};

const baseStyles =
  "inline-flex items-center justify-center rounded-[var(--button-radius)] text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--button-focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--button-focus-ring-offset)] disabled:cursor-not-allowed disabled:opacity-60";

const baseVars: CSSProperties = {
  "--button-radius": radii.md,
  "--button-focus-ring": colors.focusRing.strong,
  "--button-focus-ring-offset": colors.focusRing.offset,
};

const variantStyles: Record<ButtonVariant, ButtonStyleConfig> = {
  default: {
    className:
      "bg-[var(--button-bg)] text-[var(--button-fg)] hover:bg-[var(--button-bg-hover)]",
    vars: {
      "--button-bg": colors.button.background,
      "--button-bg-hover": colors.button.backgroundHover,
      "--button-fg": colors.button.foreground,
    },
  },
  outline: {
    className:
      "border border-[var(--button-border)] bg-[var(--button-bg)] text-[var(--button-fg)] hover:border-[var(--button-border-hover)] hover:text-[var(--button-fg-hover)]",
    vars: {
      "--button-bg": colors.surface,
      "--button-fg": colors.button.outlineForeground,
      "--button-fg-hover": colors.button.outlineForegroundHover,
      "--button-border": colors.button.outlineBorder,
      "--button-border-hover": colors.button.outlineBorderHover,
      "--button-focus-ring": colors.focusRing.subtle,
    },
  },
  ghost: {
    className:
      "text-[var(--button-fg)] hover:bg-[var(--button-bg-hover)] hover:text-[var(--button-fg-hover)]",
    vars: {
      "--button-fg": colors.button.ghostForeground,
      "--button-fg-hover": colors.button.ghostForegroundHover,
      "--button-bg-hover": colors.button.ghostBackgroundHover,
    },
  },
};

const sizeStyles: Record<ButtonSize, ButtonStyleConfig> = {
  default: {
    className:
      "h-[var(--button-height-default)] px-[var(--button-padding-x-default)] py-[var(--button-padding-y-default)]",
    vars: {
      "--button-height-default": sizes.button.md,
      "--button-padding-x-default": spacing.md,
      "--button-padding-y-default": spacing.xs,
    },
  },
  sm: {
    className: "h-[var(--button-height-sm)] px-[var(--button-padding-x-sm)]",
    vars: {
      "--button-height-sm": sizes.button.sm,
      "--button-padding-x-sm": spacing.sm,
    },
  },
  lg: {
    className: "h-[var(--button-height-lg)] px-[var(--button-padding-x-lg)]",
    vars: {
      "--button-height-lg": sizes.button.lg,
      "--button-padding-x-lg": spacing.lg,
    },
  },
  icon: {
    className: "h-[var(--button-height-default)] w-[var(--button-height-default)]",
    vars: {
      "--button-height-default": sizes.button.md,
    },
  },
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", type = "button", style, ...props }, ref) => {
    const variantStyle = variantStyles[variant];
    const sizeStyle = sizeStyles[size];

    const mergedStyle: CSSProperties = {
      ...baseVars,
      ...variantStyle.vars,
      ...sizeStyle.vars,
      ...style,
    };

    return (
      <button
        ref={ref}
        type={type}
        style={mergedStyle}
        className={cn(baseStyles, variantStyle.className, sizeStyle.className, className)}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
