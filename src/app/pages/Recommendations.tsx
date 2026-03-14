import { useState } from "react";
import { AlertTriangle, Filter, Grid3X3, List } from "lucide-react";
import { RecommendationCard } from "../components/RecommendationCard";
import { recommendations } from "../data/mockData";

export function Recommendations() {
  const [timeframe, setTimeframe] = useState("7d");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const timeframes = ["1d", "3d", "7d", "14d", "30d"];

  const normalRecs = recommendations.filter((r) => !r.hasWarning);
  const warningRecs = recommendations.filter((r) => r.hasWarning);

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-display text-3xl text-foreground mb-2" style={{ fontWeight: 700 }}>
          Screened Crypto Setups
        </h1>
        <p className="text-muted-foreground">
          Ranked pairs with backtest context, liquidity checks, and strategy-ready templates.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <div className="flex items-center gap-1 p-1 rounded-lg bg-muted">
          {timeframes.map((tf) => (
            <button
              key={tf}
              onClick={() => setTimeframe(tf)}
              className={`px-3 py-1.5 rounded-md text-xs transition-colors ${
                timeframe === tf
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              style={{ fontWeight: 500 }}
            >
              {tf}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border text-sm text-muted-foreground">
          <Filter className="w-3.5 h-3.5" />
          Polygon
        </div>

        <div className="ml-auto flex items-center gap-1 p-1 rounded-lg bg-muted">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-1.5 rounded-md ${viewMode === "grid" ? "bg-card shadow-sm text-foreground" : "text-muted-foreground"}`}
          >
            <Grid3X3 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-1.5 rounded-md ${viewMode === "list" ? "bg-card shadow-sm text-foreground" : "text-muted-foreground"}`}
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        {normalRecs.map((rec) => (
          <RecommendationCard key={rec.id} rec={rec} />
        ))}
      </div>

      {/* Warning section */}
      {warningRecs.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-4 h-4 text-amber" />
            <h3 className="text-foreground" style={{ fontWeight: 600 }}>Visible with warnings</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-5">
            These setups are shown by explicit override and may be below normal eligibility thresholds.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {warningRecs.map((rec) => (
              <RecommendationCard key={rec.id} rec={rec} />
            ))}
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <div className="mt-12 p-4 rounded-xl bg-muted/50 border border-border">
        <p className="text-xs text-muted-foreground text-center">
          Not investment advice. Backtests are historical and do not guarantee future results. Liquidity and scoring are directional signals, not certainty.
        </p>
      </div>
    </div>
  );
}
