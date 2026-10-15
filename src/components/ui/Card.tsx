import type { ReactNode } from "react";

type CardTone = "light" | "dark";
type CardSize = "default" | "compact";

type CardProps = {
  children: ReactNode;
  className?: string;
  tone?: CardTone;
  size?: CardSize;
  interactive?: boolean;
};

const toneStyles: Record<CardTone, string> = {
  light:
    "border-midnight-navy/10 bg-pure-white shadow-[0_10px_24px_-16px_rgba(27,46,75,0.45)]",
  dark:
    "border-pure-white/15 bg-pure-white/10 shadow-[0_14px_28px_-16px_rgba(0,0,0,0.55)]",
};

const sizeStyles: Record<CardSize, string> = {
  default: "p-6 sm:p-8",
  compact: "px-5 py-4",
};

const interactiveStyles: Record<CardTone, string> = {
  light:
    "motion-safe:transition-[transform,box-shadow] motion-safe:duration-200 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_18px_32px_-14px_rgba(27,46,75,0.38)]",
  dark:
    "motion-safe:transition-[transform,box-shadow] motion-safe:duration-200 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_18px_34px_-14px_rgba(0,0,0,0.6)]",
};

export function Card({
  children,
  className = "",
  tone = "light",
  size = "default",
  interactive = false,
}: CardProps) {
  return (
    <div
      className={`rounded-lg border ${toneStyles[tone]} ${sizeStyles[size]} ${
        interactive ? interactiveStyles[tone] : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
