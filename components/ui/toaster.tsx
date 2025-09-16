"use client";

import type { CSSProperties } from "react";

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import type { ToastVariant } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { colors } from "@/config/ui";

function ToastIndicator({ variant }: { variant?: ToastVariant }) {
  const baseClasses =
    "mt-0.5 h-2.5 w-2.5 flex-none rounded-full border border-current/40";

  const indicatorStyles: Record<ToastVariant, CSSProperties> = {
    default: { backgroundColor: colors.toast.default.indicator },
    success: { backgroundColor: colors.toast.success.indicator },
    destructive: { backgroundColor: colors.toast.destructive.indicator },
  };

  return (
    <span
      className={baseClasses}
      style={indicatorStyles[variant ?? "default"]}
      aria-hidden
    />
  );
}

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider swipeDirection="right">
      {toasts.map(({ id, title, description, action, variant, ...props }) => (
        <Toast key={id} variant={variant} {...props}>
          <div className="flex w-full items-start gap-3">
            <ToastIndicator variant={variant} />
            <div className="flex-1 space-y-1">
              {title ? <ToastTitle>{title}</ToastTitle> : null}
              {description ? (
                <ToastDescription>{description}</ToastDescription>
              ) : null}
            </div>
            {action}
          </div>
          <ToastClose className="text-current/50 hover:text-current" />
        </Toast>
      ))}
      <ToastViewport />
    </ToastProvider>
  );
}
