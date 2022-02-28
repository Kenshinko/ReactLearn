import { Navigate, Outlet } from "react-router";

export const RoutePublic = ({ authed }) => {
  return !authed ? <Outlet /> : <Navigate to="/profile" replace />;
};
