"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface NotificationProps {
  show: boolean;
  onClose: () => void;
  className?: string;
  children: React.ReactNode;
}

export const Notification: React.FC<NotificationProps> = ({
  show,
  onClose,
  className,
  children,
}) => {
  React.useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 10000); // Auto-dismiss after 5 seconds

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div
      className={cn(
        "fixed top-5 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md mx-auto px-4",
        className
      )}
    >
      <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 backdrop-blur-sm shadow-lg animate-in slide-in-from-top-2 duration-300">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="text-sm font-medium text-foreground">
              {children}
            </div>
          </div>
          <button
            onClick={onClose}
            className="ml-4 text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
