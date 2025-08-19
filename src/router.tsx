import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Homepage";
import App from "./App";
import { PageRoutes } from "./constants/routes";
import { RequireAuth } from "./pages/require-auth";
import Login from "./pages/login-in";
import { RedirectAuthUserGuard } from "./pages/require-auth";
import Estates from "./pages/estates";
import EstateView from "./pages/estates/view-estate";
import CreateEstate from "./pages/estates/create-estate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RequireAuth />,
    children: [
      {
        path: "/",
        element: <App />,
        children: [
          {path: "", element: <Estates/>, index: true},
          {path: PageRoutes.ViewEstate(":id"), element: <EstateView/>},
          {path: PageRoutes.CreateEstate, element: <CreateEstate/>}
        ]
      },
    ],
  },
  {
    path: "/home",
    element: <HomePage />,
  },

  {
    path: "/",
    element: <RedirectAuthUserGuard />,
    children: [
      {
        path: PageRoutes.Login,
        element: <Login />,
      },
    ],
  },
]);

export default router;
