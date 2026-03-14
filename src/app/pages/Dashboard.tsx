import { Link } from "react-router";
import { Plus, RefreshCw, TrendingUp, BarChart3, History, Zap, Inbox } from "lucide-react";
import { StatCard } from "../components/StatCard";
import { StrategyCard } from "../components/StrategyCard";
import { strategies } from "../data/mockData";

export function Dashboard() {
  const activeCount = strategies.filter((s) => s.status === "active").length;
  const hasStrategies = strategies.length > 0;

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="font-display text-3xl text-foreground mb-1" style={{ fontWeight: 700 }}>
            Your Automation Desk
          </h1>
          <p className="text-muted-foreground">
            Track live strategies, execution activity, and your next move.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2.5 rounded-xl border border-border bg-card hover:bg-muted/50 transition-colors text-muted-foreground">
            <RefreshCw className="w-4 h-4" />
          </button>
          <Link
            to="/strategy/new"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan text-navy rounded-xl hover:bg-cyan/90 transition-colors text-sm"
            style={{ fontWeight: 600 }}
          >
            <Plus className="w-4 h-4" /> Create Strategy
          </Link>
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <StatCard
          label="Active Strategies"
          value={activeCount}
          icon={<TrendingUp className="w-4 h-4" />}
          accent
        />
        <StatCard
          label="Total Strategies"
          value={strategies.length}
          icon={<BarChart3 className="w-4 h-4" />}
        />
        <StatCard
          label="Total Executions"
          value="12"
          change="+3 this week"
          changeType="up"
          icon={<History className="w-4 h-4" />}
        />
        <StatCard
          label="Quick Action"
          value="—"
          icon={<Zap className="w-4 h-4" />}
          className="flex flex-col justify-between"
        />
      </div>

      {/* Strategies */}
      <div className="mb-4">
        <h2 className="text-foreground" style={{ fontWeight: 600 }}>Your Strategies</h2>
      </div>

      {hasStrategies ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {strategies.map((strategy) => (
            <StrategyCard key={strategy.id} strategy={strategy} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-border bg-card p-12 text-center">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-5">
            <Inbox className="w-7 h-7 text-muted-foreground" />
          </div>
          <h3 className="text-foreground mb-2" style={{ fontWeight: 600 }}>Ready to launch your first strategy?</h3>
          <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
            Use a screened template or build a custom rule set in minutes.
          </p>
          <Link
            to="/strategy/new"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan text-navy rounded-xl hover:bg-cyan/90 transition-colors text-sm"
            style={{ fontWeight: 600 }}
          >
            <Plus className="w-4 h-4" /> Create Strategy
          </Link>
        </div>
      )}
    </div>
  );
}