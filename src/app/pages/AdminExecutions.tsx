import { useState } from "react";
import { StatusPill } from "../components/StatusPill";
import { executions } from "../data/mockData";

export function AdminExecutions() {
  const [statusFilter, setStatusFilter] = useState("all");

  const allExecs = [
    ...executions,
    ...executions.map((e, i) => ({
      ...e,
      id: `exec-admin-${i}`,
      timestamp: `Mar ${8 - i}, 2026 10:${10 + i * 7}`,
      strategyPair: i % 2 === 0 ? "WMATIC → USDC" : "USDC → LINK",
    })),
  ];

  const filtered = allExecs.filter((e) => statusFilter === "all" || e.status === statusFilter);

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="font-display text-3xl text-foreground mb-1" style={{ fontWeight: 700 }}>Executions</h1>
        <p className="text-muted-foreground">All trade executions across the platform.</p>
      </div>

      {/* Status filter */}
      <div className="flex items-center gap-1 p-1 rounded-lg bg-muted mb-6 w-fit">
        {["all", "success", "failed", "pending"].map((s) => (
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

      {/* Table */}
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-surface-2">
                <th className="text-left text-xs text-muted-foreground px-5 py-3" style={{ fontWeight: 500 }}>Pair</th>
                <th className="text-left text-xs text-muted-foreground px-5 py-3 hidden md:table-cell" style={{ fontWeight: 500 }}>Owner</th>
                <th className="text-left text-xs text-muted-foreground px-5 py-3" style={{ fontWeight: 500 }}>Amount In</th>
                <th className="text-left text-xs text-muted-foreground px-5 py-3 hidden md:table-cell" style={{ fontWeight: 500 }}>Amount Out</th>
                <th className="text-left text-xs text-muted-foreground px-5 py-3 hidden lg:table-cell" style={{ fontWeight: 500 }}>Fee</th>
                <th className="text-left text-xs text-muted-foreground px-5 py-3" style={{ fontWeight: 500 }}>Status</th>
                <th className="text-right text-xs text-muted-foreground px-5 py-3" style={{ fontWeight: 500 }}>Time</th>
              </tr>
            </thead>
            <tbody>
              {filtered.slice(0, 10).map((exec) => (
                <tr key={exec.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                  <td className="px-5 py-4 text-sm" style={{ fontWeight: 500 }}>{exec.strategyPair}</td>
                  <td className="px-5 py-4 hidden md:table-cell font-mono text-sm text-muted-foreground">0x7a3F...e92B</td>
                  <td className="px-5 py-4 font-mono text-sm">{exec.amountIn}</td>
                  <td className="px-5 py-4 hidden md:table-cell font-mono text-sm">{exec.amountOut}</td>
                  <td className="px-5 py-4 hidden lg:table-cell font-mono text-sm text-muted-foreground">{exec.fee || "—"}</td>
                  <td className="px-5 py-4"><StatusPill status={exec.status} /></td>
                  <td className="px-5 py-4 text-right text-sm text-muted-foreground">{exec.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between px-5 py-4 border-t border-border">
          <span className="text-xs text-muted-foreground">Showing 1-10 of {filtered.length}</span>
          <div className="flex items-center gap-1">
            <button className="px-3 py-1.5 rounded-lg text-xs bg-cyan/10 text-cyan">1</button>
            <button className="px-3 py-1.5 rounded-lg text-xs text-muted-foreground hover:bg-muted/50">2</button>
          </div>
        </div>
      </div>
    </div>
  );
}
