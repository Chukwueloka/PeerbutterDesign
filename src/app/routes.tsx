import { createBrowserRouter } from "react-router";
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

export function createRouter(isDark: boolean, onToggleTheme: () => void) {
  return createBrowserRouter([
    {
      path: "/",
      Component: () => <Home isDark={isDark} onToggleTheme={onToggleTheme} />,
    },
    {
      element: <TraderLayout isDark={isDark} onToggleTheme={onToggleTheme} />,
      children: [
        { path: "/recommendations", Component: Recommendations },
        { path: "/recommendations/:pair", Component: RecommendationDetail },
        { path: "/dashboard", Component: Dashboard },
        { path: "/strategy/new", Component: CreateStrategy },
        { path: "/strategy/:id", Component: StrategyDetail },
        { path: "/executions", Component: Executions },
        {
          path: "/settings",
          Component: () => <Settings isDark={isDark} onToggleTheme={onToggleTheme} />,
        },
      ],
    },
    {
      element: <AdminLayout isDark={isDark} onToggleTheme={onToggleTheme} />,
      children: [
        { path: "/admin", Component: AdminOverview },
        { path: "/admin/recommendations", Component: AdminRecommendations },
        { path: "/admin/users", Component: AdminUsers },
        { path: "/admin/strategies", Component: AdminStrategies },
        { path: "/admin/executions", Component: AdminExecutions },
      ],
    },
    {
      path: "*",
      Component: NotFound,
    },
  ]);
}
