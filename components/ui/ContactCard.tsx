import { ReactNode } from "react";
import Card from "./Card";

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  href: string;
  label: string;
  ariaLabel: string;
}

function ContactCard({
  icon,
  title,
  subtitle,
  href,
  label,
  ariaLabel,
}: ContactCardProps) {
  return (
    <div className="group h-full">
      <Card
        as="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className="flex min-h-28 items-start space-x-4 rounded-xl border border-theme-border/50 p-5 transition-all duration-300 hover:border-theme-primary hover:bg-theme-background-alt sm:p-6 h-full"
      >
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-theme-accent/10 rounded-lg flex items-center justify-center group-hover:bg-theme-accent/20 transition-colors">
            {icon}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-theme-primary mb-1 font-heading">
            {title}
          </h3>
          <p className="text-sm text-theme-muted mb-2 font-body">{subtitle}</p>
          <span className="break-words text-sm font-medium text-theme-accent transition-colors group-hover:text-theme-accent-hover">
            {label}
          </span>
        </div>
      </Card>
    </div>
  );
}

export default ContactCard;
