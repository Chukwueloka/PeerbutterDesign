import { Link } from "react-router";
import { Clock, ArrowRight } from "lucide-react";
import { PairDisplay } from "./PairDisplay";
import { StatusPill } from "./StatusPill";

export interface Strategy {
  id: string;
  type: "price_swap" | "dca";
  sellToken: { symbol: string; color: string };
  buyToken: { symbol: string; color: string };
  amountPerExecution: string;
  cap: string;
  slippage: string;
  expiry: string;
  status: "active" | "paused" | "cancelled";
  serviceFee?: string;
}

interface StrategyCardProps {
  strategy: Strategy;
}

export function StrategyCard({ strategy }: StrategyCardProps) {
  return (
    <Link
      to={`/strategy/${strategy.id}`}
      className="block rounded-xl border border-border bg-card p-5 hover:shadow-md hover:border-cyan/20 transition-all group"
    >
      <div className="flex items-center justify-between mb-4">
        <PairDisplay sellToken={strategy.sellToken} buyToken={strategy.buyToken} size="sm" />
        <StatusPill status={strategy.status} />
      </div>

      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground">
          {strategy.type === "dca" ? "DCA" : "Price Swap"}
        </span>
        {strategy.serviceFee && (
          <span className="text-xs text-muted-foreground">{strategy.serviceFee} fee</span>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          <span className="text-[11px] text-muted-foreground">Per Execution</span>
          <div className="text-sm font-mono" style={{ fontWeight: 500 }}>{strategy.amountPerExecution}</div>
        </div>
        <div>
          <span className="text-[11px] text-muted-foreground">Cap</span>
          <div className="text-sm font-mono" style={{ fontWeight: 500 }}>{strategy.cap}</div>
        </div>
        <div>
          <span className="text-[11px] text-muted-foreground">Slippage</span>
          <div className="text-sm font-mono" style={{ fontWeight: 500 }}>{strategy.slippage}</div>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="w-3 h-3 text-muted-foreground" />
          <span className="text-[11px] text-muted-foreground">{strategy.expiry}</span>
        </div>
      </div>

      <div className="flex items-center justify-end text-sm text-cyan opacity-0 group-hover:opacity-100 transition-opacity">
        View Details <ArrowRight className="w-3.5 h-3.5 ml-1" />
      </div>
    </Link>
  );
}
