import { forwardRef } from "react";
import type { CSSProperties, InputHTMLAttributes } from "react";

import { BORDER_RADIUS, COLORS, SPACING } from "@/config/ui";
import { cn } from "@/lib/utils";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", style, ...props }, ref) => {
    const inputVars: CSSProperties = {
      "--input-radius": BORDER_RADIUS.md,
      "--input-border": COLORS.border,
      "--input-background": COLORS.inputBackground,
      "--input-foreground": COLORS.inputForeground,
      "--input-placeholder": COLORS.placeholder,
      "--input-ring": COLORS.focusRingSubtle,
      "--input-ring-offset": COLORS.focusRingOffset,
      "--input-height": SPACING.buttonHeightDefault,
      "--input-padding-x": SPACING.sm,
      "--input-padding-y": SPACING.xs,
    };

    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "flex h-[var(--input-height)] w-full rounded-[var(--input-radius)] border border-[var(--input-border)] bg-[var(--input-background)] px-[var(--input-padding-x)] py-[var(--input-padding-y)] text-sm text-[var(--input-foreground)] ring-offset-[var(--input-ring-offset)] placeholder:text-[var(--input-placeholder)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--input-ring)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
          className,
        )}
        style={{ ...inputVars, ...style }}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";
