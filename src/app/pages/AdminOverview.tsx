import { Link } from "react-router";
import { Users, BarChart3, Zap, DollarSign, TrendingUp, Layers } from "lucide-react";
import { StatCard } from "../components/StatCard";
import { StatusPill } from "../components/StatusPill";
import { TokenIcon } from "../components/PairDisplay";

export function AdminOverview() {
  const recentExecs = [
    { pair: "USDC → WETH", owner: "0x7a3F...e92B", status: "success" as const, amount: "500 USDC", time: "2h ago" },
    { pair: "USDC → WBTC", owner: "0x9c2D...a1F4", status: "success" as const, amount: "200 USDC", time: "5h ago" },
    { pair: "USDC → WETH", owner: "0x7a3F...e92B", status: "failed" as const, amount: "500 USDC", time: "1d ago" },
    { pair: "WMATIC → USDC", owner: "0x5fA1...d3B2", status: "success" as const, amount: "1,000 WMATIC", time: "1d ago" },
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="font-display text-3xl text-foreground mb-1" style={{ fontWeight: 700 }}>Platform Overview</h1>
        <p className="text-muted-foreground">Platform-wide metrics and operational signals.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard label="Users" value="24" change="+3 this week" changeType="up" icon={<Users className="w-4 h-4" />} />
        <StatCard label="Strategies" value="47" change="+5 active" changeType="up" icon={<BarChart3 className="w-4 h-4" />} accent />
        <StatCard label="Executions" value="312" change="+18 this week" changeType="up" icon={<Zap className="w-4 h-4" />} />
        <StatCard label="Fees Collected" value="$847" change="+$124 this week" changeType="up" icon={<DollarSign className="w-4 h-4" />} />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        <StatCard label="Volume In" value="$52.4K" change="Last 30 days" changeType="neutral" icon={<TrendingUp className="w-4 h-4" />} />
        <StatCard label="Active Pairs" value="6" icon={<Layers className="w-4 h-4" />} />
        <StatCard label="Recommendations" value="12" change="6 eligible" changeType="neutral" />
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Active pairs */}
        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="text-foreground mb-4" style={{ fontWeight: 600 }}>Active Trading Pairs</h3>
          <div className="flex flex-wrap gap-2">
            {[
              ["USDC", "WETH"], ["USDC", "WBTC"], ["WMATIC", "USDC"],
              ["USDC", "LINK"], ["USDC", "AAVE"], ["WMATIC", "WETH"],
            ].map(([a, b]) => (
              <div key={`${a}-${b}`} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-2 border border-border">
                <div className="flex -space-x-1.5">
                  <TokenIcon symbol={a} size="sm" />
                  <TokenIcon symbol={b} size="sm" />
                </div>
                <span className="text-xs" style={{ fontWeight: 500 }}>{a} → {b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Strategies by status */}
        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="text-foreground mb-4" style={{ fontWeight: 600 }}>Strategies by Status</h3>
          <div className="space-y-3">
            {[
              { status: "active" as const, count: 12, pct: 50 },
              { status: "paused" as const, count: 5, pct: 21 },
              { status: "cancelled" as const, count: 7, pct: 29 },
            ].map(({ status, count, pct }) => (
              <div key={status} className="flex items-center gap-3">
                <StatusPill status={status} className="w-24" />
                <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      status === "active" ? "bg-green" : status === "paused" ? "bg-amber" : "bg-muted-foreground"
                    }`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="text-sm font-mono w-8 text-right" style={{ fontWeight: 500 }}>{count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent executions */}
      <div className="mt-8 rounded-xl border border-border bg-card overflow-hidden">
        <div className="flex items-center justify-between p-6 pb-4">
          <h3 className="text-foreground" style={{ fontWeight: 600 }}>Recent Executions</h3>
          <Link to="/admin/executions" className="text-sm text-cyan hover:underline">View all</Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-t border-border">
                <th className="text-left text-xs text-muted-foreground px-6 py-3" style={{ fontWeight: 500 }}>Pair</th>
                <th className="text-left text-xs text-muted-foreground px-6 py-3" style={{ fontWeight: 500 }}>Owner</th>
                <th className="text-left text-xs text-muted-foreground px-6 py-3" style={{ fontWeight: 500 }}>Status</th>
                <th className="text-left text-xs text-muted-foreground px-6 py-3" style={{ fontWeight: 500 }}>Amount</th>
                <th className="text-right text-xs text-muted-foreground px-6 py-3" style={{ fontWeight: 500 }}>Time</th>
              </tr>
            </thead>
            <tbody>
              {recentExecs.map((exec, i) => (
                <tr key={i} className="border-t border-border hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-3 text-sm" style={{ fontWeight: 500 }}>{exec.pair}</td>
                  <td className="px-6 py-3 text-sm font-mono text-muted-foreground">{exec.owner}</td>
                  <td className="px-6 py-3"><StatusPill status={exec.status} /></td>
                  <td className="px-6 py-3 text-sm font-mono">{exec.amount}</td>
                  <td className="px-6 py-3 text-sm text-muted-foreground text-right">{exec.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
