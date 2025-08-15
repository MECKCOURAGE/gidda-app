import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Homepage";
import App from "./App";
import { RequireAuth } from "./pages/require-auth";
import Login from "./pages/login-in";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RequireAuth />,
    children: [
        {
            path: "/",
            element: <App/>,
            children: []
        }
    ],
  },
  {
    path: "/home",
    element: <HomePage />,
  },

  {
    path: "/account/login",
    element: <Login />,
  },

]);

export default router;
