import { forwardRef } from "react";
import type { CSSProperties, InputHTMLAttributes } from "react";

import { colors, radii, sizes, spacing } from "@/config/ui";
import { cn } from "@/lib/utils";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", style, ...props }, ref) => {
    const inputVars: CSSProperties = {
      "--input-radius": radii.md,
      "--input-border": colors.border,
      "--input-background": colors.input.background,
      "--input-foreground": colors.input.foreground,
      "--input-placeholder": colors.input.placeholder,
      "--input-ring": colors.focusRing.subtle,
      "--input-ring-offset": colors.focusRing.offset,
      "--input-height": sizes.button.md,
      "--input-padding-x": spacing.sm,
      "--input-padding-y": spacing.xs,
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
