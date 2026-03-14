import { useState } from "react";
import { Link } from "react-router";
import { Search, Plus, Inbox, CheckCircle, XCircle, Clock } from "lucide-react";
import { StatCard } from "../components/StatCard";
import { ExecutionRow } from "../components/ExecutionRow";
import { executions } from "../data/mockData";

export function Executions() {
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const statuses = ["all", "success", "failed", "pending"];

  const filteredExecs = executions.filter((e) => {
    const matchesStatus = statusFilter === "all" || e.status === statusFilter;
    const matchesSearch = searchQuery === "" || e.strategyPair.toLowerCase().includes(searchQuery.toLowerCase()) || e.txHash.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const successCount = executions.filter((e) => e.status === "success").length;
  const failedCount = executions.filter((e) => e.status === "failed").length;
  const pendingCount = executions.filter((e) => e.status === "pending").length;

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-display text-3xl text-foreground mb-1" style={{ fontWeight: 700 }}>Execution History</h1>
        <p className="text-muted-foreground">All execution history</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard label="Total" value={executions.length} icon={<Clock className="w-4 h-4" />} />
        <StatCard label="Successful" value={successCount} icon={<CheckCircle className="w-4 h-4" />} accent />
        <StatCard label="Failed" value={failedCount} icon={<XCircle className="w-4 h-4" />} />
        <StatCard label="Pending" value={pendingCount} icon={<Clock className="w-4 h-4" />} />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by pair or tx hash..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-border bg-card text-sm"
          />
        </div>
        <div className="flex items-center gap-1 p-1 rounded-lg bg-muted">
          {statuses.map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-3 py-1.5 rounded-md text-xs capitalize transition-colors ${
                statusFilter === s
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              style={{ fontWeight: 500 }}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Execution list */}
      {filteredExecs.length > 0 ? (
        <div className="space-y-3">
          {filteredExecs.map((exec) => (
            <ExecutionRow key={exec.id} execution={exec} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-border bg-card p-12 text-center">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-5">
            <Inbox className="w-7 h-7 text-muted-foreground" />
          </div>
          <h3 className="text-foreground mb-2" style={{ fontWeight: 600 }}>
            {searchQuery || statusFilter !== "all" ? "No matching executions" : "No executions yet"}
          </h3>
          <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
            {searchQuery || statusFilter !== "all"
              ? "Try adjusting your search or filter."
              : "Executions will appear here when your strategies run."
            }
          </p>
          {!(searchQuery || statusFilter !== "all") && (
            <Link to="/strategy/new" className="inline-flex items-center gap-2 px-6 py-3 bg-cyan text-navy rounded-xl hover:bg-cyan/90 transition-colors text-sm" style={{ fontWeight: 600 }}>
              <Plus className="w-4 h-4" /> Create Strategy
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
