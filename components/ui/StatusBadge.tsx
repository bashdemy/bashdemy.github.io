interface StatusBadgeProps {
  status: string;
  label?: string;
}

const STATUS_TO_CLASSES = {
  Production: "bg-green-500/20 text-green-600",
  Completed: "bg-blue-500/20 text-blue-600",
  "In Development": "bg-theme-accent/20 text-theme-accent",
  Planning: "bg-theme-secondary/20 text-theme-secondary",
  "Current Role": "bg-blue-500/20 text-blue-600",
};

function StatusBadge({ status, label }: StatusBadgeProps) {
  const classNameForStatus =
    STATUS_TO_CLASSES[status] || "bg-theme-muted/20 text-theme-muted";

  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium font-heading ${classNameForStatus}`}
    >
      {label || status}
    </span>
  );
}

export default StatusBadge;
