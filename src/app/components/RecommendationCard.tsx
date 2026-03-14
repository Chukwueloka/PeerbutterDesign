import { Link } from "react-router";
import { ArrowRight, AlertTriangle } from "lucide-react";
import { PairDisplay } from "./PairDisplay";
import { StatusPill } from "./StatusPill";
import { Sparkline } from "./Sparkline";
import { cn } from "./ui/utils";

export interface Recommendation {
  id: string;
  rank: number;
  sellToken: { symbol: string; color: string };
  buyToken: { symbol: string; color: string };
  score: number;
  sparkline: number[];
  winRate: number;
  expectancy: number;
  netPnl: number;
  liquidity: string;
  confidence: "high" | "medium" | "low";
  hasWarning?: boolean;
  warningText?: string;
}

interface RecommendationCardProps {
  rec: Recommendation;
  isLoading?: boolean;
}

export function RecommendationCard({ rec, isLoading }: RecommendationCardProps) {
  if (isLoading) {
    return (
      <div className="rounded-xl border border-border bg-card p-5 animate-pulse">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-muted" />
          <div className="h-4 w-24 bg-muted rounded" />
        </div>
        <div className="space-y-3">
          <div className="h-3 w-full bg-muted rounded" />
          <div className="h-3 w-2/3 bg-muted rounded" />
          <div className="h-8 w-20 bg-muted rounded" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "rounded-xl border bg-card p-5 hover:shadow-md transition-all group relative",
        rec.hasWarning ? "border-amber/30" : "border-border hover:border-cyan/30"
      )}
    >
      {/* Rank badge */}
      <div className="absolute -top-2.5 -left-1 bg-navy text-white px-2.5 py-0.5 rounded-md text-xs font-mono" style={{ fontWeight: 600 }}>
        #{rec.rank}
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-4 pt-1">
        <PairDisplay sellToken={rec.sellToken} buyToken={rec.buyToken} size="sm" />
        <StatusPill status={rec.confidence} label={`${rec.confidence} conf.`} />
      </div>

      {/* Score and sparkline */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-xs text-muted-foreground">Score</span>
          <div className="font-display text-xl text-foreground" style={{ fontWeight: 600 }}>{rec.score.toFixed(1)}</div>
        </div>
        <Sparkline data={rec.sparkline} color={rec.netPnl >= 0 ? "#22C55E" : "#EF4444"} />
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">
        <div>
          <span className="text-[11px] text-muted-foreground">Win Rate</span>
          <div className="text-sm font-mono" style={{ fontWeight: 500 }}>{rec.winRate}%</div>
        </div>
        <div>
          <span className="text-[11px] text-muted-foreground">Expectancy</span>
          <div className="text-sm font-mono" style={{ fontWeight: 500 }}>{rec.expectancy > 0 ? "+" : ""}{rec.expectancy}%</div>
        </div>
        <div>
          <span className="text-[11px] text-muted-foreground">Net PnL</span>
          <div className={cn("text-sm font-mono", rec.netPnl >= 0 ? "text-green" : "text-coral")} style={{ fontWeight: 500 }}>
            {rec.netPnl >= 0 ? "+" : ""}{rec.netPnl}%
          </div>
        </div>
        <div>
          <span className="text-[11px] text-muted-foreground">Liquidity</span>
          <div className="text-sm font-mono" style={{ fontWeight: 500 }}>{rec.liquidity}</div>
        </div>
      </div>

      {/* Warning */}
      {rec.hasWarning && (
        <div className="flex items-center gap-2 mb-3 p-2 rounded-lg bg-amber/5 border border-amber/10">
          <AlertTriangle className="w-3.5 h-3.5 text-amber flex-shrink-0" />
          <span className="text-[11px] text-amber">{rec.warningText || "Below normal eligibility thresholds"}</span>
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center gap-2 pt-3 border-t border-border">
        <Link
          to={`/recommendations/${rec.id}`}
          className="flex-1 text-center text-sm py-2 rounded-lg border border-border text-foreground hover:bg-muted/50 transition-colors"
        >
          View Details
        </Link>
        <Link
          to={`/strategy/new?template=${rec.id}`}
          className="flex-1 flex items-center justify-center gap-1.5 text-sm py-2 rounded-lg bg-cyan text-navy hover:bg-cyan/90 transition-colors"
        >
          Use Template <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
