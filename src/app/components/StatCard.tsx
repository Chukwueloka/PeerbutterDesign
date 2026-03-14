import { type ReactNode } from "react";
import { cn } from "./ui/utils";

interface StatCardProps {
  label: string;
  value: string | number;
  change?: string;
  changeType?: "up" | "down" | "neutral";
  icon?: ReactNode;
  className?: string;
  accent?: boolean;
}

export function StatCard({ label, value, change, changeType = "neutral", icon, className, accent }: StatCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-sm",
        accent && "border-cyan/20 bg-gradient-to-br from-cyan/5 to-transparent",
        className
      )}
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-sm text-muted-foreground">{label}</span>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </div>
      <div className="font-display text-2xl text-foreground" style={{ fontWeight: 600 }}>
        {value}
      </div>
      {change && (
        <div
          className={cn(
            "text-xs mt-1",
            changeType === "up" && "text-green",
            changeType === "down" && "text-coral",
            changeType === "neutral" && "text-muted-foreground"
          )}
        >
          {change}
        </div>
      )}
    </div>
  );
}
