import type { ReactNode } from "react";
import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  children: ReactNode;
};

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isLoading, user } = useAuth();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }
  return <>{children}</>;
}

export default ProtectedRoute;
