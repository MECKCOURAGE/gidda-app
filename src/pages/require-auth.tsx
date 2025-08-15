import { PageRoutes } from "../constants/routes";
import useAuth from "../hooks/use-auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const RequireAuth = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return (
      <Navigate
        to={PageRoutes.Login}
        state={{ from: location }}
        replace
      />
    );
  }

  return <Outlet />;
};
