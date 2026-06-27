type SectionHeadingProps = {
  id?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  id,
  title,
  subtitle,
  align = "left",
  theme = "dark",
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";
  const titleColor = theme === "light" ? "text-pure-white" : "text-midnight-navy";
  const subtitleColor = theme === "light" ? "text-slate-grey-light" : "text-slate-grey";

  return (
    <div className={`flex flex-col gap-3 ${alignment} ${className}`}>
      <div
        className={`h-0.5 w-12 bg-rich-gold ${align === "center" ? "mx-auto" : ""}`}
        aria-hidden="true"
      />
      <h2
        id={id}
        className={`font-heading text-3xl font-semibold tracking-tight sm:text-4xl ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className={`max-w-2xl text-base leading-relaxed sm:text-lg ${subtitleColor}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
