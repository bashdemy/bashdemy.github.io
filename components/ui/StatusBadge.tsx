import {
  BriefcaseBusiness,
  Check,
  Clock3,
  Hammer,
  LucideIcon,
} from "lucide-react";

interface StatusBadgeProps {
  status: string;
  label?: string;
}

const STATUS_TO_BADGE: Record<
  string,
  {
    className: string;
    icon: LucideIcon;
  }
> = {
  Production: {
    className:
      "border-theme-primary bg-theme-background text-theme-accent shadow-sm",
    icon: Check,
  },
  Completed: {
    className: "border-theme-border bg-theme-background-alt text-theme-primary",
    icon: Check,
  },
  "In Development": {
    className: "border-theme-primary bg-theme-background text-theme-accent",
    icon: Hammer,
  },
  Planning: {
    className:
      "border-theme-border bg-theme-background-alt text-theme-secondary",
    icon: Clock3,
  },
  "Current Role": {
    className: "border-theme-border bg-theme-background-alt text-theme-primary",
    icon: BriefcaseBusiness,
  },
  "Currently in Progress": {
    className: "border-theme-primary bg-theme-background text-theme-accent",
    icon: Clock3,
  },
};

function StatusBadge({ status, label }: StatusBadgeProps) {
  const badge = STATUS_TO_BADGE[status] || {
    className: "border-theme-border bg-theme-background-alt text-theme-primary",
    icon: Clock3,
  };
  const Icon = badge.icon;

  return (
    <span
      className={`inline-flex min-h-7 items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium font-heading ${badge.className}`}
    >
      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
      {label || status}
    </span>
  );
}

export default StatusBadge;
