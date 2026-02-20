"use client";

import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import { CheckCircle2, AlertCircle, AlertTriangle, Info } from "lucide-react";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        const Icon =
          {
            success: CheckCircle2,
            error: AlertCircle,
            warning: AlertTriangle,
            default: Info,
            destructive: AlertCircle,
          }[props.variant || "default"] || Info;

        return (
          <Toast key={id} {...props}>
            <div className="flex w-full items-start gap-3">
              <Icon className="mt-0.5 h-4 w-4 shrink-0 opacity-90" />
              <div className="flex flex-col gap-1">
                {title && (
                  <ToastTitle className="text-[13px]">{title}</ToastTitle>
                )}
                {description && (
                  <ToastDescription className="text-xs leading-relaxed">
                    {description}
                  </ToastDescription>
                )}
              </div>
            </div>
            {action}
            <ToastClose className="top-3 right-3" />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
