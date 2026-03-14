import { useState } from "react";
import { Pause, Play, XCircle } from "lucide-react";
import { StatusPill } from "../components/StatusPill";
import { strategies } from "../data/mockData";

export function AdminStrategies() {
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  const allStrategies = [
    ...strategies,
    {
      id: "strat-005", type: "dca" as const, sellToken: { symbol: "USDC", color: "#2775CA" }, buyToken: { symbol: "AAVE", color: "#B6509E" },
      amountPerExecution: "100 USDC", cap: "1,200 USDC", slippage: "0.5%", expiry: "May 01, 2026", status: "active" as const,
      owner: "0x9c2D...a1F4", created: "Feb 15, 2026",
    },
    {
      id: "strat-006", type: "price_swap" as const, sellToken: { symbol: "WMATIC", color: "#8247E5" }, buyToken: { symbol: "WETH", color: "#627EEA" },
      amountPerExecution: "2,000 WMATIC", cap: "20,000 WMATIC", slippage: "1.0%", expiry: "Apr 30, 2026", status: "active" as const,
      owner: "0x5fA1...d3B2", created: "Mar 01, 2026",
    },
  ].map((s) => ({ ...s, owner: (s as any).owner || "0x7a3F...e92B", created: (s as any).created || "Jan 20, 2026" }));

  const filtered = allStrategies.filter((s) => {
    const matchStatus = statusFilter === "all" || s.status === statusFilter;
    const matchType = typeFilter === "all" || s.type === typeFilter;
    return matchStatus && matchType;
  });

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="font-display text-3xl text-foreground mb-1" style={{ fontWeight: 700 }}>Strategies</h1>
        <p className="text-muted-foreground">All strategies across the platform.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        <div className="flex items-center gap-1 p-1 rounded-lg bg-muted">
          {["all", "active", "paused", "cancelled"].map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-3 py-1.5 rounded-md text-xs capitalize transition-colors ${
                statusFilter === s ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
              }`}
              style={{ fontWeight: 500 }}
            >
              {s}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1 p-1 rounded-lg bg-muted">
          {["all", "price_swap", "dca"].map((t) => (
            <button
              key={t}
              onClick={() => setTypeFilter(t)}
              className={`px-3 py-1.5 rounded-md text-xs transition-colors ${
                typeFilter === t ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
              }`}
              style={{ fontWeight: 500 }}
            >
              {t === "all" ? "All Types" : t === "dca" ? "DCA" : "Price Swap"}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-surface-2">
                <th className="text-left text-xs text-muted-foreground px-5 py-3" style={{ fontWeight: 500 }}>Owner</th>
                <th className="text-left text-xs text-muted-foreground px-5 py-3" style={{ fontWeight: 500 }}>Pair</th>
                <th className="text-left text-xs text-muted-foreground px-5 py-3 hidden md:table-cell" style={{ fontWeight: 500 }}>Type</th>
                <th className="text-left text-xs text-muted-foreground px-5 py-3" style={{ fontWeight: 500 }}>Status</th>
                <th className="text-left text-xs text-muted-foreground px-5 py-3 hidden lg:table-cell" style={{ fontWeight: 500 }}>Per Exec</th>
                <th className="text-left text-xs text-muted-foreground px-5 py-3 hidden md:table-cell" style={{ fontWeight: 500 }}>Created</th>
                <th className="text-right text-xs text-muted-foreground px-5 py-3" style={{ fontWeight: 500 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((s) => (
                <tr key={s.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                  <td className="px-5 py-4 font-mono text-sm text-muted-foreground">{s.owner}</td>
                  <td className="px-5 py-4 text-sm" style={{ fontWeight: 600 }}>{s.sellToken.symbol} → {s.buyToken.symbol}</td>
                  <td className="px-5 py-4 hidden md:table-cell">
                    <span className="text-xs px-2 py-0.5 rounded bg-muted">{s.type === "dca" ? "DCA" : "Price Swap"}</span>
                  </td>
                  <td className="px-5 py-4"><StatusPill status={s.status} /></td>
                  <td className="px-5 py-4 hidden lg:table-cell font-mono text-sm">{s.amountPerExecution}</td>
                  <td className="px-5 py-4 hidden md:table-cell text-sm text-muted-foreground">{s.created}</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-1">
                      {s.status === "active" && (
                        <button className="p-1.5 rounded-lg hover:bg-amber/10 text-amber" title="Pause">
                          <Pause className="w-3.5 h-3.5" />
                        </button>
                      )}
                      {s.status === "paused" && (
                        <button className="p-1.5 rounded-lg hover:bg-green/10 text-green" title="Resume">
                          <Play className="w-3.5 h-3.5" />
                        </button>
                      )}
                      {s.status !== "cancelled" && (
                        <button className="p-1.5 rounded-lg hover:bg-coral/10 text-coral" title="Cancel">
                          <XCircle className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between px-5 py-4 border-t border-border">
          <span className="text-xs text-muted-foreground">Showing {filtered.length} strategies</span>
          <div className="flex items-center gap-1">
            <button className="px-3 py-1.5 rounded-lg text-xs bg-cyan/10 text-cyan">1</button>
          </div>
        </div>
      </div>
    </div>
  );
}
