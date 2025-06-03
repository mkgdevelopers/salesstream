import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeFour from "./components/HomeFour";
import HelpPage from "./components/Help";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Layout from "./components/Helper/Layout";

// 🧩 ADMIN COMPONENTS
import AdminLayout from "./admin/components/AdminLayout";
import Dashboard from "./admin/pages/Dashboard";
import HomepageSections from "./admin/pages/HomepageSections";
import Users from "./admin/pages/Users";
import Settings from "./admin/pages/Settings";
import HomepageSolutions from "./admin/pages/HomepageSolutions";
import HomepageBenefits from "./admin/pages/HomepageBenefits";


const router = createBrowserRouter([
  // 🌐 PUBLIC ROUTES
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, element: <HomeFour /> },
      { path: "/help", element: <HelpPage /> },
      { path: "/features", element: <Service /> },
      { path: "/contact", element: <Contact /> },
      { path: "/error", element: <Error /> },
      { path: "*", element: <Error /> },
    ],
  },

  // 🔐 ADMIN ROUTES (with their own layout)
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "homepage", element: <HomepageSections /> },
      { path: "users", element: <Users /> },
      { path: "settings", element: <Settings /> },
      { path: "homepage/solutions",element: <HomepageSolutions />},
      { path: "homepage/benefits", element: <HomepageBenefits /> },
      // { path: "nightmares", element: <HomepageNightmares /> },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
