import { Outlet } from "react-router";
import { Header } from "./Header";
import { MobileNav } from "./MobileNav";
import { useTheme } from "../../context/ThemeContext";

export function TraderLayout() {
  const { isDark, toggleTheme } = useTheme();
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header isDark={isDark} onToggleTheme={toggleTheme} walletState="signed-in" />
      <main className="flex-1 pb-20 md:pb-0">
        <Outlet />
      </main>
      <MobileNav />
    </div>
  );
}
