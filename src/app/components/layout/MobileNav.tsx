import { Link, useLocation } from "react-router";
import { LayoutDashboard, Compass, History, Settings, Plus } from "lucide-react";

export function MobileNav() {
  const location = useLocation();

  const links = [
    { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { to: "/recommendations", label: "Setups", icon: Compass },
    { to: "/strategy/new", label: "New", icon: Plus, accent: true },
    { to: "/executions", label: "History", icon: History },
    { to: "/settings", label: "Settings", icon: Settings },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 backdrop-blur-xl">
      <div className="flex items-center justify-around h-16 px-2">
        {links.map((link) => {
          const isActive = location.pathname.startsWith(link.to);
          const Icon = link.icon;
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg transition-colors ${
                link.accent
                  ? "text-navy"
                  : isActive
                  ? "text-cyan"
                  : "text-muted-foreground"
              }`}
            >
              {link.accent ? (
                <div className="w-10 h-10 rounded-full bg-cyan flex items-center justify-center -mt-4 shadow-lg shadow-cyan/30">
                  <Icon className="w-5 h-5 text-navy" />
                </div>
              ) : (
                <Icon className="w-5 h-5" />
              )}
              <span className="text-[10px]">{link.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
