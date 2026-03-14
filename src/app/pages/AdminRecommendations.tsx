import { useState } from "react";
import { RefreshCw, Eye, EyeOff, Star, StarOff, Ban, CheckCircle } from "lucide-react";
import { StatusPill } from "../components/StatusPill";
import { recommendations } from "../data/mockData";

export function AdminRecommendations() {
  const [page, setPage] = useState(1);

  const adminRecs = recommendations.map((r) => ({
    ...r,
    eligible: r.confidence !== "low",
    promoted: r.rank <= 2,
    disabled: false,
    traderVisible: !r.hasWarning || true,
    updatedAt: "2h ago",
  }));

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="font-display text-3xl text-foreground mb-1" style={{ fontWeight: 700 }}>Recommendations</h1>
          <p className="text-muted-foreground">Control ranking visibility, warnings, promotions, and refresh jobs.</p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-cyan text-navy rounded-xl hover:bg-cyan/90 transition-colors text-sm" style={{ fontWeight: 600 }}>
          <RefreshCw className="w-4 h-4" /> Refresh All
        </button>
      </div>

      {/* Table */}
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-surface-2">
                <th className="text-left text-xs text-muted-foreground px-5 py-3" style={{ fontWeight: 500 }}>Pair</th>
                <th className="text-left text-xs text-muted-foreground px-5 py-3" style={{ fontWeight: 500 }}>Score</th>
                <th className="text-left text-xs text-muted-foreground px-5 py-3 hidden md:table-cell" style={{ fontWeight: 500 }}>Win Rate</th>
                <th className="text-left text-xs text-muted-foreground px-5 py-3 hidden lg:table-cell" style={{ fontWeight: 500 }}>Liquidity</th>
                <th className="text-left text-xs text-muted-foreground px-5 py-3" style={{ fontWeight: 500 }}>Status</th>
                <th className="text-left text-xs text-muted-foreground px-5 py-3 hidden md:table-cell" style={{ fontWeight: 500 }}>Updated</th>
                <th className="text-right text-xs text-muted-foreground px-5 py-3" style={{ fontWeight: 500 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {adminRecs.map((rec) => (
                <tr key={rec.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                  <td className="px-5 py-4">
                    <div className="text-sm" style={{ fontWeight: 600 }}>{rec.sellToken.symbol} → {rec.buyToken.symbol}</div>
                  </td>
                  <td className="px-5 py-4">
                    <span className="font-mono text-sm" style={{ fontWeight: 600 }}>{rec.score.toFixed(1)}</span>
                  </td>
                  <td className="px-5 py-4 hidden md:table-cell">
                    <span className="font-mono text-sm">{rec.winRate}%</span>
                  </td>
                  <td className="px-5 py-4 hidden lg:table-cell">
                    <span className="font-mono text-sm text-muted-foreground">{rec.liquidity}</span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex flex-wrap gap-1">
                      <StatusPill status={rec.confidence} label={rec.confidence} />
                      {rec.eligible ? (
                        <StatusPill status="eligible" label="Eligible" />
                      ) : (
                        <StatusPill status="ineligible" label="Ineligible" />
                      )}
                      {rec.promoted && <StatusPill status="promoted" label="Promoted" />}
                    </div>
                  </td>
                  <td className="px-5 py-4 hidden md:table-cell">
                    <span className="text-xs text-muted-foreground">{rec.updatedAt}</span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-1.5 rounded-lg hover:bg-muted/50 text-muted-foreground" title="Refresh">
                        <RefreshCw className="w-3.5 h-3.5" />
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-muted/50 text-amber" title="Toggle promote">
                        {rec.promoted ? <StarOff className="w-3.5 h-3.5" /> : <Star className="w-3.5 h-3.5" />}
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-muted/50 text-muted-foreground" title="Toggle visibility">
                        {rec.traderVisible ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-muted/50 text-coral" title="Disable">
                        <Ban className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-5 py-4 border-t border-border">
          <span className="text-xs text-muted-foreground">Showing 1-6 of 12</span>
          <div className="flex items-center gap-1">
            <button className="px-3 py-1.5 rounded-lg text-xs text-muted-foreground hover:bg-muted/50 transition-colors">Previous</button>
            <button className="px-3 py-1.5 rounded-lg text-xs bg-cyan/10 text-cyan">1</button>
            <button className="px-3 py-1.5 rounded-lg text-xs text-muted-foreground hover:bg-muted/50">2</button>
            <button className="px-3 py-1.5 rounded-lg text-xs text-muted-foreground hover:bg-muted/50 transition-colors">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
