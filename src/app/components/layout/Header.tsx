import { useState } from "react";
import { Link, useLocation } from "react-router";
import {
  LayoutDashboard,
  Compass,
  History,
  Settings,
  Shield,
  Menu,
  X,
  Sun,
  Moon,
  Wallet,
  ChevronDown,
} from "lucide-react";

interface HeaderProps {
  isAdmin?: boolean;
  isDark: boolean;
  onToggleTheme: () => void;
  walletState: "disconnected" | "connected" | "signed-in" | "wrong-network";
}

export function Header({ isAdmin, isDark, onToggleTheme, walletState }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  const publicLinks = [
    { to: "/", label: "Home" },
    { to: "/recommendations", label: "Setups" },
  ];

  const traderLinks = [
    { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { to: "/recommendations", label: "Setups", icon: Compass },
    { to: "/executions", label: "Executions", icon: History },
    { to: "/settings", label: "Settings", icon: Settings },
  ];

  const adminLinks = [
    { to: "/admin", label: "Overview" },
    { to: "/admin/recommendations", label: "Recommendations" },
    { to: "/admin/users", label: "Users" },
    { to: "/admin/strategies", label: "Strategies" },
    { to: "/admin/executions", label: "Executions" },
  ];

  const links = isAdminRoute ? adminLinks : walletState === "signed-in" ? traderLinks : publicLinks;

  const walletDisplay = () => {
    switch (walletState) {
      case "signed-in":
        return (
          <div className="flex items-center gap-2 px-3 py-1.5 bg-cyan/10 text-cyan rounded-lg border border-cyan/20">
            <div className="w-2 h-2 rounded-full bg-green animate-pulse" />
            <span className="font-mono text-sm">0x7a3F...e92B</span>
          </div>
        );
      case "connected":
        return (
          <div className="flex items-center gap-2 px-3 py-1.5 bg-amber/10 text-amber rounded-lg border border-amber/20">
            <Wallet className="w-4 h-4" />
            <span className="text-sm">Sign In</span>
          </div>
        );
      case "wrong-network":
        return (
          <div className="flex items-center gap-2 px-3 py-1.5 bg-coral/10 text-coral rounded-lg border border-coral/20">
            <span className="text-sm">Wrong Network</span>
          </div>
        );
      default:
        return (
          <button className="flex items-center gap-2 px-4 py-2 bg-cyan text-navy rounded-lg hover:bg-cyan/90 transition-colors">
            <Wallet className="w-4 h-4" />
            <span className="text-sm">Connect Wallet</span>
          </button>
        );
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-xl">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan to-cyan/60 flex items-center justify-center">
                <span className="text-navy font-display text-sm" style={{ fontWeight: 700 }}>P</span>
              </div>
              <span className="font-display text-lg text-foreground" style={{ fontWeight: 600 }}>
                Peerbutter
              </span>
              {isAdminRoute && (
                <span className="text-xs px-2 py-0.5 bg-amber/10 text-amber rounded-full border border-amber/20">
                  Admin
                </span>
              )}
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {links.map((link) => {
                const isActive = link.to === "/" 
                  ? location.pathname === "/" 
                  : location.pathname.startsWith(link.to);
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                      isActive
                        ? "bg-cyan/10 text-cyan"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              {walletState === "signed-in" && !isAdminRoute && (
                <Link
                  to="/admin"
                  className="px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 flex items-center gap-1.5"
                >
                  <Shield className="w-3.5 h-3.5" />
                  Admin
                </Link>
              )}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <button
                onClick={onToggleTheme}
                className="p-2 rounded-lg hover:bg-muted/50 text-muted-foreground transition-colors"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <div className="hidden sm:block">{walletDisplay()}</div>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-muted/50 text-muted-foreground"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-card px-4 py-4 space-y-1">
            {links.map((link) => {
              const isActive = link.to === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg text-sm transition-colors ${
                    isActive ? "bg-cyan/10 text-cyan" : "text-muted-foreground hover:bg-muted/50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-border mt-3">{walletDisplay()}</div>
          </div>
        )}
      </header>
    </>
  );
}
