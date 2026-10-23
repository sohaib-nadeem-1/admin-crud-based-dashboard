import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

// Wrap any routes that need a logged-in user:
//
//   <Route element={<ProtectedRoute />}>
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
//
// Not logged in -> redirect to /login (and remember where they wanted to go).
export default function ProtectedRoute({ redirectTo = "/login" }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace state={{ from: location }} />;
  }

  return <Outlet />;
}
