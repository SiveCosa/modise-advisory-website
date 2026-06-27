type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignment} ${className}`}>
      <div
        className={`h-0.5 w-12 bg-rich-gold ${align === "center" ? "mx-auto" : ""}`}
        aria-hidden="true"
      />
      <h2 className="font-heading text-3xl font-semibold tracking-tight text-midnight-navy sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-base leading-relaxed text-slate-grey sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
