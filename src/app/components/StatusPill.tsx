import { cn } from "./ui/utils";

type StatusType =
  | "active"
  | "pending"
  | "paused"
  | "cancelled"
  | "success"
  | "failed"
  | "warning"
  | "signed-in"
  | "wrong-network"
  | "promoted"
  | "disabled"
  | "eligible"
  | "ineligible"
  | "high"
  | "medium"
  | "low";

const statusStyles: Record<StatusType, string> = {
  active: "bg-green/10 text-green border-green/20",
  pending: "bg-amber/10 text-amber border-amber/20",
  paused: "bg-muted text-muted-foreground border-border",
  cancelled: "bg-muted text-muted-foreground border-border",
  success: "bg-green/10 text-green border-green/20",
  failed: "bg-coral/10 text-coral border-coral/20",
  warning: "bg-amber/10 text-amber border-amber/20",
  "signed-in": "bg-cyan/10 text-cyan border-cyan/20",
  "wrong-network": "bg-coral/10 text-coral border-coral/20",
  promoted: "bg-cyan/10 text-cyan border-cyan/20",
  disabled: "bg-muted text-muted-foreground border-border",
  eligible: "bg-green/10 text-green border-green/20",
  ineligible: "bg-coral/10 text-coral border-coral/20",
  high: "bg-green/10 text-green border-green/20",
  medium: "bg-amber/10 text-amber border-amber/20",
  low: "bg-coral/10 text-coral border-coral/20",
};

interface StatusPillProps {
  status: StatusType;
  label?: string;
  className?: string;
}

export function StatusPill({ status, label, className }: StatusPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-full border",
        statusStyles[status],
        className
      )}
      style={{ fontWeight: 500 }}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {label || status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}
