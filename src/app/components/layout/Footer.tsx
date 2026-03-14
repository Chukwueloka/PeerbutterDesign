import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-auto">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan to-cyan/60 flex items-center justify-center">
                <span className="text-navy font-display text-xs" style={{ fontWeight: 700 }}>P</span>
              </div>
              <span className="font-display text-foreground" style={{ fontWeight: 600 }}>Peerbutter</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Non-custodial crypto automation for traders who want clearer setups and tighter control.
            </p>
          </div>
          <div>
            <h4 className="text-sm text-foreground mb-3" style={{ fontWeight: 600 }}>Product</h4>
            <div className="space-y-2">
              <Link to="/recommendations" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Screened Setups</Link>
              <Link to="/dashboard" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Dashboard</Link>
              <Link to="/strategy/new" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Strategy Builder</Link>
              <Link to="/executions" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Executions</Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm text-foreground mb-3" style={{ fontWeight: 600 }}>Resources</h4>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Documentation</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Discord</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
            </div>
          </div>
          <div>
            <h4 className="text-sm text-foreground mb-3" style={{ fontWeight: 600 }}>Legal</h4>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-xs text-muted-foreground">
              &copy; 2026 Peerbutter. Not investment advice. Backtests are historical and do not guarantee future results.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">Polygon</span>
              <div className="w-1 h-1 rounded-full bg-green" />
              <span className="text-xs text-green">Live</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
