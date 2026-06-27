import Link from "next/link";

type LearnMoreLinkProps = {
  href: string;
  label?: string;
  className?: string;
};

export function LearnMoreLink({
  href,
  label = "Learn more",
  className = "",
}: LearnMoreLinkProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1.5 text-sm font-medium text-rich-gold transition-colors hover:text-rich-gold-dark ${className}`}
    >
      {label}
      <span
        className="transition-transform duration-200 group-hover:translate-x-0.5"
        aria-hidden="true"
      >
        →
      </span>
    </Link>
  );
}
