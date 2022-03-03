import { Navigate, Outlet } from "react-router";

export const RoutePrivate = ({ authed }) => {
  return authed ? <Outlet /> : <Navigate to="/" replace />;
};
