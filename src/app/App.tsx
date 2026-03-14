import { useState, useEffect, useCallback, useRef } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Home } from "./pages/Home";
import { Recommendations } from "./pages/Recommendations";
import { RecommendationDetail } from "./pages/RecommendationDetail";
import { Dashboard } from "./pages/Dashboard";
import { CreateStrategy } from "./pages/CreateStrategy";
import { StrategyDetail } from "./pages/StrategyDetail";
import { Executions } from "./pages/Executions";
import { Settings } from "./pages/Settings";
import { AdminOverview } from "./pages/AdminOverview";
import { AdminRecommendations } from "./pages/AdminRecommendations";
import { AdminUsers } from "./pages/AdminUsers";
import { AdminStrategies } from "./pages/AdminStrategies";
import { AdminExecutions } from "./pages/AdminExecutions";
import { NotFound } from "./pages/NotFound";
import { TraderLayout } from "./components/layout/TraderLayout";
import { AdminLayout } from "./components/layout/AdminLayout";

function AppContent() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = useCallback(() => setIsDark((prev) => !prev), []);

  const routerRef = useRef(
    createBrowserRouter([
      {
        path: "/",
        Component: () => <HomeWrapper />,
      },
      {
        path: "/",
        Component: () => <TraderLayoutWrapper />,
        children: [
          { path: "recommendations", Component: Recommendations },
          { path: "recommendations/:pair", Component: RecommendationDetail },
          { path: "dashboard", Component: Dashboard },
          { path: "strategy/new", Component: CreateStrategy },
          { path: "strategy/:id", Component: StrategyDetail },
          { path: "executions", Component: Executions },
          { path: "settings", Component: () => <SettingsWrapper /> },
        ],
      },
      {
        path: "/admin",
        Component: () => <AdminLayoutWrapper />,
        children: [
          { index: true, Component: AdminOverview },
          { path: "recommendations", Component: AdminRecommendations },
          { path: "users", Component: AdminUsers },
          { path: "strategies", Component: AdminStrategies },
          { path: "executions", Component: AdminExecutions },
        ],
      },
      { path: "*", Component: NotFound },
    ])
  );

  // Share state via a simple context-like pattern using window
  useEffect(() => {
    (window as any).__peerbutter = { isDark, toggleTheme };
  }, [isDark, toggleTheme]);

  function HomeWrapper() {
    return <Home isDark={isDark} onToggleTheme={toggleTheme} />;
  }

  function TraderLayoutWrapper() {
    return <TraderLayout isDark={isDark} onToggleTheme={toggleTheme} />;
  }

  function AdminLayoutWrapper() {
    return <AdminLayout isDark={isDark} onToggleTheme={toggleTheme} />;
  }

  function SettingsWrapper() {
    return <Settings isDark={isDark} onToggleTheme={toggleTheme} />;
  }

  return <RouterProvider router={routerRef.current} />;
}

export default function App() {
  return <AppContent />;
}
