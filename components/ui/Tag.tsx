import { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  tone?: "accent" | "primary" | "muted" | "success" | "info";
  variant?: "soft" | "solid";
  className?: string;
}

function Tag({
  children,
  tone = "accent",
  variant = "soft",
  className = "",
}: TagProps) {
  const softToneClasses = {
    accent: "bg-theme-accent text-theme-background",
    primary: "bg-theme-primary text-theme-background",
    muted: "bg-theme-secondary text-theme-background",
    success: "bg-green-600 text-white",
    info: "bg-blue-600 text-white",
  };

  const solidToneClasses = {
    accent: "bg-theme-background text-theme-accent border border-theme-accent",
    primary:
      "bg-theme-background text-theme-primary border border-theme-primary",
    muted:
      "bg-theme-background text-theme-secondary border border-theme-secondary",
    success: "bg-white text-green-700 border border-green-600",
    info: "bg-white text-blue-700 border border-blue-600",
  };

  const base =
    "inline-flex items-center justify-center px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide font-heading transition-colors duration-200";
  const toneClass =
    variant === "solid"
      ? solidToneClasses[tone] || solidToneClasses.accent
      : softToneClasses[tone] || softToneClasses.accent;

  const classes = [base, toneClass, className].filter(Boolean).join(" ");

  return <span className={classes}>{children}</span>;
}

export default Tag;
