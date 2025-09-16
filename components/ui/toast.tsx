"use client";

import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";

import { colors, radii, shadows, spacing } from "@/config/ui";
import { cn } from "@/lib/utils";

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, style, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "pointer-events-none fixed inset-x-4 top-6 z-[100] flex max-h-screen flex-col gap-[var(--toast-gap)] sm:inset-x-auto sm:right-6 sm:w-[360px]",
      className,
    )}
    style={{ "--toast-gap": spacing.sm, ...style }}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

type ToastVariant = "default" | "success" | "destructive";

const toastBaseVars: React.CSSProperties = {
  "--toast-radius": radii.toast,
  "--toast-padding-x": spacing.md,
  "--toast-padding-y": spacing.md,
  "--toast-padding-right": spacing.xl,
  "--toast-gap": spacing.sm,
};

const toastVariantStyles: Record<ToastVariant, React.CSSProperties> = {
  default: {
    backgroundColor: colors.toast.default.background,
    color: colors.toast.default.foreground,
    borderColor: colors.toast.default.border,
    boxShadow: shadows.toast.default,
  },
  success: {
    backgroundColor: colors.toast.success.background,
    color: colors.toast.success.foreground,
    borderColor: colors.toast.success.border,
    boxShadow: shadows.toast.success,
  },
  destructive: {
    backgroundColor: colors.toast.destructive.background,
    color: colors.toast.destructive.foreground,
    borderColor: colors.toast.destructive.border,
    boxShadow: shadows.toast.destructive,
  },
};

interface ToastProps extends React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> {
  variant?: ToastVariant;
}

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  ToastProps
>(({ className, style, variant = "default", ...props }, ref) => (
  <ToastPrimitives.Root
    ref={ref}
    className={cn(
      "toast-root group pointer-events-auto relative flex w-full min-w-0 max-w-[360px] items-start gap-[var(--toast-gap)] overflow-hidden rounded-[var(--toast-radius)] border py-[var(--toast-padding-y)] pl-[var(--toast-padding-x)] pr-[var(--toast-padding-right)] text-sm transition-all",
      className,
    )}
    style={{ ...toastBaseVars, ...toastVariantStyles[variant], ...style }}
    {...props}
  />
));
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center rounded-full border border-current px-3 py-1 text-xs font-semibold uppercase tracking-wide transition focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring-strong)] focus:ring-offset-2 focus:ring-offset-[var(--focus-ring-offset)]",
      className,
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    aria-label="Close notification"
    className={cn(
      "absolute right-3 top-3 rounded-full p-1 text-current/60 transition hover:text-current focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring-subtle)] focus:ring-offset-2 focus:ring-offset-[var(--focus-ring-offset)]",
      className,
    )}
    toast-close=""
    {...props}
  >
    <span aria-hidden>×</span>
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("text-sm font-semibold leading-5", className)}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("text-sm leading-5 text-current/80", className)}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

export type { ToastProps };
export type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
};
export type { ToastVariant };
