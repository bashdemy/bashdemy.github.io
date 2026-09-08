interface SectionIntroProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  headingLevel?: 1 | 2;
  className?: string;
  subtitleClassName?: string;
}

function SectionIntro({
  title,
  subtitle,
  align = "center",
  headingLevel = 2,
  className = "",
  subtitleClassName = "",
}: SectionIntroProps) {
  const Heading = headingLevel === 1 ? "h1" : "h2";
  const alignment =
    align === "center"
      ? "text-center"
      : align === "left"
        ? "text-left"
        : "text-right";
  const subtitleClasses = [
    "text-theme-secondary",
    "max-w-3xl",
    "mx-auto",
    "font-body",
    "description",
    "whitespace-pre-line",
    subtitleClassName || "text-lg",
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={`${alignment} mb-12 ${className}`}>
      <Heading className="text-4xl font-bold text-theme-primary mb-4 font-heading">
        {title}
      </Heading>
      {subtitle ? <p className={subtitleClasses}>{subtitle}</p> : null}
    </div>
  );
}

export default SectionIntro;
