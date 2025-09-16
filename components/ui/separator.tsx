import { forwardRef } from "react";
import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export type SeparatorProps = HTMLAttributes<HTMLDivElement>;

export const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("h-px w-full bg-slate-200", className)}
      {...props}
    />
  ),
);
Separator.displayName = "Separator";
