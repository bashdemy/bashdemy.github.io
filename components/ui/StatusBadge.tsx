interface StatusBadgeProps {
  status: string;
  label?: string;
}

const STATUS_TO_CLASSES = {
  Production: "bg-green-700 text-white",
  Completed: "bg-blue-700 text-white",
  "In Development": "bg-theme-primary text-white",
  Planning: "bg-theme-secondary text-white",
  "Current Role": "bg-blue-700 text-white",
};

function StatusBadge({ status, label }: StatusBadgeProps) {
  const classNameForStatus =
    STATUS_TO_CLASSES[status] || "bg-theme-secondary text-white";

  return (
    <span
      className={`inline-flex min-h-7 items-center rounded-full px-2.5 py-1 text-xs font-medium font-heading ${classNameForStatus}`}
    >
      {label || status}
    </span>
  );
}

export default StatusBadge;
