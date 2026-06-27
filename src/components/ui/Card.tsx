import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-sm border border-midnight-navy/10 bg-pure-white p-6 transition-shadow duration-200 hover:shadow-md sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}
