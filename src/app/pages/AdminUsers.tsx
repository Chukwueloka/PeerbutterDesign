import { useState } from "react";
import { Search, Ban, CheckCircle } from "lucide-react";
import { StatusPill } from "../components/StatusPill";
import { adminUsers } from "../data/mockData";

export function AdminUsers() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = adminUsers.filter(
    (u) => searchQuery === "" || u.wallet.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="font-display text-3xl text-foreground mb-1" style={{ fontWeight: 700 }}>Users</h1>
        <p className="text-muted-foreground">Registered wallets, access roles, and moderation controls.</p>
      </div>

      {/* Search */}
      <div className="relative max-w-sm mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search by wallet address..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-border bg-card text-sm"
        />
      </div>

      {/* Table */}
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-surface-2">
                <th className="text-left text-xs text-muted-foreground px-5 py-3" style={{ fontWeight: 500 }}>Wallet</th>
                <th className="text-left text-xs text-muted-foreground px-5 py-3" style={{ fontWeight: 500 }}>Role</th>
                <th className="text-left text-xs text-muted-foreground px-5 py-3 hidden md:table-cell" style={{ fontWeight: 500 }}>Strategies</th>
                <th className="text-left text-xs text-muted-foreground px-5 py-3 hidden md:table-cell" style={{ fontWeight: 500 }}>Joined</th>
                <th className="text-left text-xs text-muted-foreground px-5 py-3" style={{ fontWeight: 500 }}>Status</th>
                <th className="text-right text-xs text-muted-foreground px-5 py-3" style={{ fontWeight: 500 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.wallet} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                  <td className="px-5 py-4">
                    <span className="font-mono text-sm" style={{ fontWeight: 500 }}>{user.wallet}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`text-xs px-2 py-0.5 rounded border ${
                      user.role === "admin"
                        ? "bg-amber/10 text-amber border-amber/20"
                        : "bg-cyan/10 text-cyan border-cyan/20"
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-5 py-4 hidden md:table-cell">
                    <span className="text-sm font-mono">{user.strategies}</span>
                  </td>
                  <td className="px-5 py-4 hidden md:table-cell">
                    <span className="text-sm text-muted-foreground">{user.joined}</span>
                  </td>
                  <td className="px-5 py-4">
                    {user.banned ? (
                      <StatusPill status="failed" label="Banned" />
                    ) : (
                      <StatusPill status="active" label="Active" />
                    )}
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end">
                      {user.banned ? (
                        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-green hover:bg-green/10 transition-colors">
                          <CheckCircle className="w-3.5 h-3.5" /> Unban
                        </button>
                      ) : (
                        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-coral hover:bg-coral/10 transition-colors">
                          <Ban className="w-3.5 h-3.5" /> Ban
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
