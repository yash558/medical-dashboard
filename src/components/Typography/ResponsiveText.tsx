import React from "react";
import { cn } from "src/utils/common.helper";

interface ResponsiveTextProps {
  variant?: "theme" | "primary" | "secondary" | "error" | "white";
  size?: "xl" | "rg" | "lg" | "md" | "base" | "sm" | "xs";
  children: React.ReactNode;
  className?: string;
}

export const ResponsiveText: React.FC<ResponsiveTextProps> = ({
  variant,
  size,
  children,
  className = "",
}) => (
  <span
    className={cn(
      {
        "text-5xl xl:text-6xl 2xl:text-7xl": size === "xl",
        "text-3xl xl:text-4xl 2xl:text-5xl": size === "rg",
        "text-xl xl:text-2xl 2xl:text-3xl": size === "lg",
        "text-lg xl:text-xl 2xl:text-2xl": size === "md",
        "text-base xl:text-lg 2xl:text-xl": size === "base",
        "text-xs xl:text-sm": size === "sm",
        "text-xs": size === "xs",
        "text-[var(--text-theme)]": variant === "theme",
        "text-[var(--text-primary)]": variant === "primary",
        "text-[var(--text-secondary)]": variant === "secondary",
        "text-[var(--text-error)]": variant === "error",
        "text-white": variant === "white",
      },
      className
    )}
  >
    {children}
  </span>
);
