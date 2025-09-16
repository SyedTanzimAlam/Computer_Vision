import { forwardRef } from "react";
import type { CSSProperties, HTMLAttributes } from "react";

import { colors, radii, shadows, spacing } from "@/config/ui";
import { cn } from "@/lib/utils";

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, style, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("border", className)}
      style={{
        borderRadius: radii.card,
        borderColor: colors.border,
        backgroundColor: colors.surface,
        color: colors.surfaceForeground,
        boxShadow: shadows.card,
        ...style,
      }}
      {...props}
    />
  ),
);
Card.displayName = "Card";

export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, style, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "space-y-[var(--card-header-gap)] px-[var(--card-section-padding-x)] pt-[var(--card-header-padding-top)] pb-[var(--card-header-padding-bottom)]",
        className,
      )}
      style={{
        "--card-header-gap": spacing.xs,
        "--card-section-padding-x": spacing.xl,
        "--card-header-padding-top": spacing.xl,
        "--card-header-padding-bottom": spacing.none,
        ...style,
      } as CSSProperties}
      {...props}
    />
  ),
);
CardHeader.displayName = "CardHeader";

export const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h2 ref={ref} className={cn("text-2xl font-semibold tracking-tight", className)} {...props} />
  ),
);
CardTitle.displayName = "CardTitle";

export const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, style, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm", className)}
        style={{ color: colors.mutedForeground, ...style }}
      {...props}
    />
  ),
);
CardDescription.displayName = "CardDescription";

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, style, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "px-[var(--card-section-padding-x)] pt-[var(--card-content-padding-top)] pb-[var(--card-content-padding-bottom)]",
        className,
      )}
      style={{
        "--card-section-padding-x": spacing.xl,
        "--card-content-padding-top": spacing.md,
        "--card-content-padding-bottom": spacing.xl,
        ...style,
      } as CSSProperties}
      {...props}
    />
  ),
);
CardContent.displayName = "CardContent";

export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, style, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "px-[var(--card-section-padding-x)] pt-[var(--card-footer-padding-top)] pb-[var(--card-footer-padding-bottom)]",
        className,
      )}
      style={{
        "--card-section-padding-x": spacing.xl,
        "--card-footer-padding-top": spacing.none,
        "--card-footer-padding-bottom": spacing.xl,
        ...style,
      } as CSSProperties}
      {...props}
    />
  ),
);
CardFooter.displayName = "CardFooter";
