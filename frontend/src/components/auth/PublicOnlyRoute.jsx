import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

// For pages like /login that logged-in users should not see.
// Logged in -> go to the page they came from, or the dashboard.
// This also handles the redirect right after a successful login.
export default function PublicOnlyRoute({ redirectTo = "/dashboard" }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (isAuthenticated) {
    const from = location.state?.from?.pathname;
    return <Navigate to={from || redirectTo} replace />;
  }

  return <Outlet />;
}
