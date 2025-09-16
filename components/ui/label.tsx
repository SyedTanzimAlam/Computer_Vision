import { forwardRef } from "react";
import type { LabelHTMLAttributes } from "react";

import { colors } from "@/config/ui";
import { cn } from "@/lib/utils";

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, style, ...props }, ref) => (
    <label
      ref={ref}
      className={cn("text-sm font-medium", className)}
      style={{ color: colors.label, ...style }}
      {...props}
    />
  ),
);
Label.displayName = "Label";
