import { forwardRef } from "react";
import type { CSSProperties, HTMLAttributes } from "react";

import { BORDER_RADIUS, COLORS, SPACING } from "@/config/ui";
import { cn } from "@/lib/utils";

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, style, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("border", className)}
      style={{
        borderRadius: BORDER_RADIUS.card,
        borderColor: COLORS.border,
        backgroundColor: COLORS.surface,
        color: COLORS.surfaceForeground,
        boxShadow: COLORS.cardShadow,
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
        "--card-header-gap": SPACING.xs,
        "--card-section-padding-x": SPACING.xl,
        "--card-header-padding-top": SPACING.xl,
        "--card-header-padding-bottom": SPACING.none,
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
      style={{ color: COLORS.mutedForeground, ...style }}
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
        "--card-section-padding-x": SPACING.xl,
        "--card-content-padding-top": SPACING.md,
        "--card-content-padding-bottom": SPACING.xl,
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
        "--card-section-padding-x": SPACING.xl,
        "--card-footer-padding-top": SPACING.none,
        "--card-footer-padding-bottom": SPACING.xl,
        ...style,
      } as CSSProperties}
      {...props}
    />
  ),
);
CardFooter.displayName = "CardFooter";
