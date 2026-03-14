import { useParams, Link } from "react-router";
import { ArrowLeft, ArrowRight, AlertTriangle, Info } from "lucide-react";
import { PairDisplay } from "../components/PairDisplay";
import { StatusPill } from "../components/StatusPill";
import { Sparkline } from "../components/Sparkline";
import { StatCard } from "../components/StatCard";
import { recommendations } from "../data/mockData";

export function RecommendationDetail() {
  const { pair } = useParams();
  const rec = recommendations.find((r) => r.id === pair) || recommendations[0];

  const backtestMetrics = [
    { label: "Win Rate", value: `${rec.winRate}%`, change: "+2.1% vs 30d", changeType: "up" as const },
    { label: "Expectancy", value: `${rec.expectancy > 0 ? "+" : ""}${rec.expectancy}%`, change: "per trade avg", changeType: "neutral" as const },
    { label: "Sharpe Approx", value: "1.42", change: "90-day window", changeType: "neutral" as const },
    { label: "Recent Return", value: `${rec.netPnl > 0 ? "+" : ""}${rec.netPnl}%`, change: "last 30 days", changeType: rec.netPnl >= 0 ? "up" as const : "down" as const },
    { label: "Est. Liquidity", value: rec.liquidity, change: "24h avg depth", changeType: "neutral" as const },
    { label: "Trade Count", value: "47", change: "in backtest window", changeType: "neutral" as const },
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back */}
      <Link to="/recommendations" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to Setups
      </Link>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="text-xs text-muted-foreground mb-2">Setup Detail</div>
          <PairDisplay sellToken={rec.sellToken} buyToken={rec.buyToken} size="lg" />
          <p className="text-sm text-muted-foreground mt-2">
            Review the chart, signal quality, and template before you automate.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="text-xs text-muted-foreground">Score</div>
            <div className="font-display text-3xl text-foreground" style={{ fontWeight: 700 }}>{rec.score.toFixed(1)}</div>
          </div>
          <StatusPill status={rec.confidence} label={`${rec.confidence} confidence`} />
        </div>
      </div>

      {/* Warning banner */}
      {rec.hasWarning && (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-amber/5 border border-amber/20 mb-8">
          <AlertTriangle className="w-5 h-5 text-amber flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-amber text-sm" style={{ fontWeight: 600 }}>Setup Warning</h4>
            <p className="text-xs text-amber/80 mt-1">{rec.warningText}</p>
          </div>
        </div>
      )}

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Chart card */}
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-foreground" style={{ fontWeight: 600 }}>Price Chart</h3>
              <div className="flex items-center gap-1 p-1 rounded-lg bg-muted">
                {["1H", "4H", "1D", "1W"].map((tf) => (
                  <button
                    key={tf}
                    className={`px-2.5 py-1 rounded-md text-xs ${
                      tf === "1D" ? "bg-card shadow-sm text-foreground" : "text-muted-foreground"
                    }`}
                    style={{ fontWeight: 500 }}
                  >
                    {tf}
                  </button>
                ))}
              </div>
            </div>
            <div className="h-64 rounded-lg bg-surface-2 border border-border flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 p-6 flex items-end">
                <Sparkline
                  data={[...rec.sparkline, ...rec.sparkline.map((v) => v + Math.random() * 10 - 5)]}
                  color="#0ACDDA"
                  width={600}
                  height={200}
                />
              </div>
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="text-xs px-2 py-0.5 rounded bg-cyan/10 text-cyan border border-cyan/20">RSI(14)</span>
                <span className="text-xs px-2 py-0.5 rounded bg-green/10 text-green border border-green/20">EMA(20)</span>
              </div>
            </div>
          </div>

          {/* Why this setup */}
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-2 mb-3">
              <Info className="w-4 h-4 text-cyan" />
              <h3 className="text-foreground" style={{ fontWeight: 600 }}>Why this setup is surfacing</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              This pair shows consistent mean-reversion behavior with {rec.winRate}% historical win rate across 47 backtested trades.
              Liquidity depth of {rec.liquidity} supports automated execution with low slippage risk.
              The RSI-based trigger combined with EMA confirmation has produced a {rec.expectancy}% positive expectancy per trade.
            </p>
          </div>

          {/* Backtest metrics */}
          <div>
            <h3 className="text-foreground mb-4" style={{ fontWeight: 600 }}>Backtest Summary</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {backtestMetrics.map((m) => (
                <StatCard key={m.label} {...m} />
              ))}
            </div>
          </div>
        </div>

        {/* Right rail */}
        <div className="space-y-6">
          {/* Template preview */}
          <div className="rounded-xl border border-cyan/20 bg-card p-6 sticky top-24">
            <h3 className="text-foreground mb-4" style={{ fontWeight: 600 }}>Strategy Template</h3>
            <div className="space-y-3">
              {[
                { label: "Type", value: "Price Swap" },
                { label: "Trigger", value: "RSI(14) < 30" },
                { label: "Confirmation", value: "2 candle close" },
                { label: "Amount", value: "500 USDC" },
                { label: "Slippage", value: "0.5%" },
                { label: "Timeframe", value: "1D" },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <span className="text-xs text-muted-foreground">{label}</span>
                  <span className="text-sm font-mono" style={{ fontWeight: 500 }}>{value}</span>
                </div>
              ))}
            </div>
            <Link
              to={`/strategy/new?template=${rec.id}`}
              className="mt-6 w-full flex items-center justify-center gap-2 py-3 bg-cyan text-navy rounded-xl hover:bg-cyan/90 transition-colors text-sm"
              style={{ fontWeight: 600 }}
            >
              Use This Template <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-[11px] text-muted-foreground text-center mt-3">
              Backtests are historical and do not guarantee future results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
