import { useParams, Link } from "react-router";
import { ArrowLeft, RefreshCw, ExternalLink, XCircle, Shield } from "lucide-react";
import { PairDisplay } from "../components/PairDisplay";
import { StatusPill } from "../components/StatusPill";
import { ExecutionRow } from "../components/ExecutionRow";
import { strategies, executions } from "../data/mockData";

export function StrategyDetail() {
  const { id } = useParams();
  const strategy = strategies.find((s) => s.id === id) || strategies[0];
  const strategyExecs = executions.filter((e) => e.strategyId === strategy.id);

  const details = [
    { label: "Strategy Type", value: strategy.type === "dca" ? "DCA" : "Price Swap" },
    { label: "Sell Token", value: strategy.sellToken.symbol },
    { label: "Buy Token", value: strategy.buyToken.symbol },
    { label: "Amount Per Execution", value: strategy.amountPerExecution },
    { label: "Total Cap", value: strategy.cap },
    { label: "Max Slippage", value: strategy.slippage },
    { label: "Service Fee", value: strategy.serviceFee || "0.3%" },
    { label: "Fee Recipient", value: "0x9a2...cF41", mono: true },
    { label: "Trigger Logic", value: "RSI(14) < 30" },
    { label: "Expiry", value: strategy.expiry },
    { label: "Owner", value: "0x7a3F...e92B", mono: true },
    { label: "Strategy Hash", value: "0xabcd...ef12", mono: true },
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link to="/dashboard" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to Dashboard
      </Link>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="font-display text-2xl text-foreground" style={{ fontWeight: 700 }}>Strategy Control</h1>
            <StatusPill status={strategy.status} />
          </div>
          <div className="text-sm text-muted-foreground font-mono">{strategy.id}</div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2.5 rounded-xl border border-border bg-card hover:bg-muted/50 text-muted-foreground transition-colors">
            <RefreshCw className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-card hover:bg-muted/50 text-muted-foreground transition-colors text-sm">
            <Shield className="w-4 h-4" /> Manage Permissions
          </button>
          {strategy.status !== "cancelled" && (
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-coral/30 bg-coral/5 text-coral hover:bg-coral/10 transition-colors text-sm">
              <XCircle className="w-4 h-4" /> Cancel Strategy
            </button>
          )}
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr_400px] gap-8">
        {/* Main detail card */}
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="flex items-center gap-3 mb-6">
            <PairDisplay sellToken={strategy.sellToken} buyToken={strategy.buyToken} size="lg" />
          </div>

          <div className="space-y-0">
            {details.map(({ label, value, mono }) => (
              <div key={label} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                <span className="text-sm text-muted-foreground">{label}</span>
                <span className={`text-sm ${mono ? "font-mono" : ""}`} style={{ fontWeight: 500 }}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right rail - execution history */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-foreground" style={{ fontWeight: 600 }}>Recent Executions</h3>
            <Link to={`/executions?strategy=${strategy.id}`} className="text-sm text-cyan hover:underline">
              View all
            </Link>
          </div>
          {strategyExecs.length > 0 ? (
            <div className="space-y-3">
              {strategyExecs.map((exec) => (
                <ExecutionRow key={exec.id} execution={exec} />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-border bg-card p-8 text-center">
              <p className="text-sm text-muted-foreground">No executions yet for this strategy.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
