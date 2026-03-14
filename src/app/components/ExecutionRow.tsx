import { Link } from "react-router";
import { ExternalLink, AlertCircle } from "lucide-react";
import { StatusPill } from "./StatusPill";
import { cn } from "./ui/utils";

export interface Execution {
  id: string;
  timestamp: string;
  status: "success" | "failed" | "pending";
  strategyId: string;
  strategyPair: string;
  txHash: string;
  amountIn: string;
  amountOut: string;
  slippage: string;
  fee?: string;
  errorMessage?: string;
}

interface ExecutionRowProps {
  execution: Execution;
}

export function ExecutionRow({ execution }: ExecutionRowProps) {
  return (
    <div className={cn(
      "rounded-xl border bg-card p-4 hover:shadow-sm transition-all",
      execution.status === "failed" ? "border-coral/20" : "border-border"
    )}>
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        {/* Timestamp & status */}
        <div className="flex items-center gap-3 sm:w-48">
          <StatusPill status={execution.status} />
          <span className="text-xs text-muted-foreground font-mono">{execution.timestamp}</span>
        </div>

        {/* Strategy & tx */}
        <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-2">
          <Link
            to={`/strategy/${execution.strategyId}`}
            className="text-sm text-foreground hover:text-cyan transition-colors"
            style={{ fontWeight: 500 }}
          >
            {execution.strategyPair}
          </Link>
          <a
            href={`https://polygonscan.com/tx/${execution.txHash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground font-mono hover:text-cyan transition-colors flex items-center gap-1"
          >
            {execution.txHash.slice(0, 8)}...{execution.txHash.slice(-6)}
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Amounts */}
        <div className="flex items-center gap-4 sm:gap-6 text-sm">
          <div>
            <span className="text-[11px] text-muted-foreground block sm:hidden">In</span>
            <span className="font-mono" style={{ fontWeight: 500 }}>{execution.amountIn}</span>
          </div>
          <span className="text-muted-foreground">&rarr;</span>
          <div>
            <span className="text-[11px] text-muted-foreground block sm:hidden">Out</span>
            <span className="font-mono" style={{ fontWeight: 500 }}>{execution.amountOut}</span>
          </div>
          <div className="text-xs text-muted-foreground">{execution.slippage} slip</div>
          {execution.fee && (
            <div className="text-xs text-muted-foreground">{execution.fee} fee</div>
          )}
        </div>
      </div>

      {execution.status === "failed" && execution.errorMessage && (
        <div className="mt-3 flex items-start gap-2 p-2.5 rounded-lg bg-coral/5 border border-coral/10">
          <AlertCircle className="w-3.5 h-3.5 text-coral flex-shrink-0 mt-0.5" />
          <span className="text-xs text-coral">{execution.errorMessage}</span>
        </div>
      )}
    </div>
  );
}
