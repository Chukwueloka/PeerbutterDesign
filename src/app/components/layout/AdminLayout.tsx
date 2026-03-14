import { Outlet } from "react-router";
import { Header } from "./Header";

interface AdminLayoutProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export function AdminLayout({ isDark, onToggleTheme }: AdminLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header isAdmin isDark={isDark} onToggleTheme={onToggleTheme} walletState="signed-in" />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
