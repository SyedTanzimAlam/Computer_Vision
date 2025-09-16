import { forwardRef } from "react";
import type { HTMLAttributes } from "react";

import { COLORS } from "@/config/ui";
import { cn } from "@/lib/utils";

export type SeparatorProps = HTMLAttributes<HTMLDivElement>;

export const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, style, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("h-px w-full", className)}
      style={{ backgroundColor: COLORS.separator, ...style }}
      {...props}
    />
  ),
);
Separator.displayName = "Separator";
