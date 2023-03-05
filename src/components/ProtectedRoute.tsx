import { ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";

type ProtectedRouteProps = {
  isAllowed: boolean;
  redirectTo?: string;
  children?: any;
}

const ProtectedRoute = ({ isAllowed, redirectTo = "/login", children }: ProtectedRouteProps) => {
  if (!isAllowed) {
    return <>{redirectTo && <Navigate to={redirectTo} replace />}</>;
  }
  

  return children ? children : <Outlet />;
};

export default ProtectedRoute;

