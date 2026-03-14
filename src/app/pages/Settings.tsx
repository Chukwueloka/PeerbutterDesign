import { Wallet, Sun, Moon, Shield, ExternalLink, DollarSign, Settings2 } from "lucide-react";

interface SettingsProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export function Settings({ isDark, onToggleTheme }: SettingsProps) {
  return (
    <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="font-display text-3xl text-foreground mb-1" style={{ fontWeight: 700 }}>
          Wallet, Permissions, and Pricing
        </h1>
      </div>

      <div className="space-y-6">
        {/* Wallet card */}
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center">
              <Wallet className="w-5 h-5 text-cyan" />
            </div>
            <div>
              <h3 className="text-foreground" style={{ fontWeight: 600 }}>Wallet</h3>
              <p className="text-xs text-muted-foreground">Your connected account and session status.</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-3 border-b border-border">
              <span className="text-sm text-muted-foreground">Address</span>
              <span className="text-sm font-mono" style={{ fontWeight: 500 }}>0x7a3F...e92B</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-border">
              <span className="text-sm text-muted-foreground">Network</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green" />
                <span className="text-sm" style={{ fontWeight: 500 }}>Polygon</span>
              </div>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-border">
              <span className="text-sm text-muted-foreground">Session</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green animate-pulse" />
                <span className="text-sm text-green" style={{ fontWeight: 500 }}>Signed In</span>
              </div>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-sm text-muted-foreground">Role</span>
              <span className="text-xs px-2 py-0.5 rounded bg-cyan/10 text-cyan border border-cyan/20">Trader</span>
            </div>
          </div>
        </div>

        {/* Appearance */}
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
              {isDark ? <Moon className="w-5 h-5 text-foreground" /> : <Sun className="w-5 h-5 text-foreground" />}
            </div>
            <div>
              <h3 className="text-foreground" style={{ fontWeight: 600 }}>Appearance</h3>
              <p className="text-xs text-muted-foreground">Toggle between light and dark themes.</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Theme</span>
            <button
              onClick={onToggleTheme}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted/50 transition-colors text-sm"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              {isDark ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>

        {/* Pricing */}
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-green/10 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-green" />
            </div>
            <div>
              <h3 className="text-foreground" style={{ fontWeight: 600 }}>Pricing</h3>
              <p className="text-xs text-muted-foreground">Fees are charged only on successful executions.</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-3 border-b border-border">
              <span className="text-sm text-muted-foreground">Service Fee</span>
              <span className="text-sm font-mono" style={{ fontWeight: 500 }}>0.3%</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-border">
              <span className="text-sm text-muted-foreground">Fee Model</span>
              <span className="text-sm" style={{ fontWeight: 500 }}>Per successful execution</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-sm text-muted-foreground">Failed Trades</span>
              <span className="text-sm text-green" style={{ fontWeight: 500 }}>No fee charged</span>
            </div>
          </div>
        </div>

        {/* Approvals */}
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-amber" />
            </div>
            <div>
              <h3 className="text-foreground" style={{ fontWeight: 600 }}>Approvals & Permissions</h3>
              <p className="text-xs text-muted-foreground">Check and manage the token permissions used for automated trades.</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-3 border-b border-border">
              <span className="text-sm text-muted-foreground">Executor Contract</span>
              <span className="text-xs font-mono text-muted-foreground">0x4e2a...bC91</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-border">
              <span className="text-sm text-muted-foreground">Relayer Address</span>
              <span className="text-xs font-mono text-muted-foreground">0x8f1c...dE34</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-border">
              <span className="text-sm text-muted-foreground">Current USDC Allowance</span>
              <span className="text-sm font-mono text-green" style={{ fontWeight: 500 }}>5,000 USDC</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-sm text-muted-foreground">Current WMATIC Allowance</span>
              <span className="text-sm font-mono text-green" style={{ fontWeight: 500 }}>10,000 WMATIC</span>
            </div>
          </div>
          <button className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-border hover:bg-muted/50 transition-colors text-sm text-foreground">
            <Settings2 className="w-4 h-4" /> Manage Permissions
          </button>
        </div>

        {/* Quick links */}
        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="text-foreground mb-4" style={{ fontWeight: 600 }}>Quick Links</h3>
          <div className="space-y-2">
            {[
              { label: "View on Polygonscan", url: "#" },
              { label: "Documentation", url: "#" },
              { label: "GitHub", url: "#" },
              { label: "Support", url: "#" },
            ].map(({ label, url }) => (
              <a
                key={label}
                href={url}
                className="flex items-center justify-between py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {label}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
