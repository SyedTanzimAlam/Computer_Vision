import { forwardRef } from "react";
import type { ButtonHTMLAttributes, CSSProperties } from "react";

import { BORDER_RADIUS, COLORS, SPACING } from "@/config/ui";
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
  "--button-radius": BORDER_RADIUS.md,
  "--button-focus-ring": COLORS.focusRingStrong,
  "--button-focus-ring-offset": COLORS.focusRingOffset,
};

const variantStyles: Record<ButtonVariant, ButtonStyleConfig> = {
  default: {
    className:
      "bg-[var(--button-bg)] text-[var(--button-fg)] hover:bg-[var(--button-bg-hover)]",
    vars: {
      "--button-bg": COLORS.buttonBackground,
      "--button-bg-hover": COLORS.buttonBackgroundHover,
      "--button-fg": COLORS.buttonForeground,
    },
  },
  outline: {
    className:
      "border border-[var(--button-border)] bg-[var(--button-bg)] text-[var(--button-fg)] hover:border-[var(--button-border-hover)] hover:text-[var(--button-fg-hover)]",
    vars: {
      "--button-bg": COLORS.surface,
      "--button-fg": COLORS.buttonOutlineForeground,
      "--button-fg-hover": COLORS.buttonOutlineForegroundHover,
      "--button-border": COLORS.buttonOutlineBorder,
      "--button-border-hover": COLORS.buttonOutlineBorderHover,
      "--button-focus-ring": COLORS.focusRingSubtle,
    },
  },
  ghost: {
    className:
      "text-[var(--button-fg)] hover:bg-[var(--button-bg-hover)] hover:text-[var(--button-fg-hover)]",
    vars: {
      "--button-fg": COLORS.buttonGhostForeground,
      "--button-fg-hover": COLORS.buttonGhostForegroundHover,
      "--button-bg-hover": COLORS.buttonGhostBackgroundHover,
    },
  },
};

const sizeStyles: Record<ButtonSize, ButtonStyleConfig> = {
  default: {
    className:
      "h-[var(--button-height-default)] px-[var(--button-padding-x-default)] py-[var(--button-padding-y-default)]",
    vars: {
      "--button-height-default": SPACING.buttonHeightDefault,
      "--button-padding-x-default": SPACING.md,
      "--button-padding-y-default": SPACING.xs,
    },
  },
  sm: {
    className: "h-[var(--button-height-sm)] px-[var(--button-padding-x-sm)]",
    vars: {
      "--button-height-sm": SPACING.buttonHeightSm,
      "--button-padding-x-sm": SPACING.sm,
    },
  },
  lg: {
    className: "h-[var(--button-height-lg)] px-[var(--button-padding-x-lg)]",
    vars: {
      "--button-height-lg": SPACING.buttonHeightLg,
      "--button-padding-x-lg": SPACING.lg,
    },
  },
  icon: {
    className: "h-[var(--button-height-default)] w-[var(--button-height-default)]",
    vars: {
      "--button-height-default": SPACING.buttonHeightDefault,
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
