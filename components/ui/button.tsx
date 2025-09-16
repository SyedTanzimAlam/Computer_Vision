import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "outline" | "ghost";
type ButtonSize = "default" | "sm" | "lg" | "icon";

const baseStyles =
  "inline-flex items-center justify-center rounded-lg text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900/20 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-60";

const variantStyles: Record<ButtonVariant, string> = {
  default: "bg-slate-900 text-white hover:bg-slate-800",
  outline:
    "border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:text-slate-900 focus-visible:ring-slate-900/10",
  ghost: "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
};

const sizeStyles: Record<ButtonSize, string> = {
  default: "h-10 px-4 py-2",
  sm: "h-9 px-3",
  lg: "h-11 px-5",
  icon: "h-10 w-10",
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
