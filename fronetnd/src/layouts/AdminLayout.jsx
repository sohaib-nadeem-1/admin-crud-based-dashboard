import { useState } from "react";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import DashboardPage from "../pages/DashboardPage";
import ProductsPage from "../pages/ProductsPage";
import UsersPage from "../pages/UsersPage";
import OrdersPage from "../pages/OrdersPage";
import SettingsPage from "../pages/SettingsPage";
import useProducts from "../hooks/useProducts";
import useUsers from "../hooks/useUsers";
import useOrders from "../hooks/useOrders";
import useSettings from "../hooks/useSettings";
import useAuth from "../hooks/useAuth";

const pageTitles = {
  dashboard: "Dashboard",
  products: "Products",
  users: "Users",
  orders: "Orders",
  settings: "Settings",
};

export default function AdminLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // "/products" -> "products"
  const activePage = location.pathname.split("/")[1] || "dashboard";

  const { products, loading, addProduct, editProduct, removeProduct } =
    useProducts();
  const {
    users,
    loading: usersLoading,
    addUser,
    editUser,
    removeUser,
  } = useUsers();
  const {
    orders,
    loading: ordersLoading,
    changeOrderStatus,
  } = useOrders();
  const { settings, saveProfile, saveStore, savePreferences } = useSettings();

  function handleNavigate(page) {
    navigate(`/${page}`);
    setSidebarOpen(false);
  }

  function handleLogout() {
    navigate("/login", { replace: true });
    logout();
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        activePage={activePage}
        onNavigate={handleNavigate}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <Header
          title={pageTitles[activePage]}
          onMenuClick={() => setSidebarOpen(true)}
          user={user}
          onLogout={handleLogout}
        />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route
              path="dashboard"
              element={<DashboardPage products={products} />}
            />
            <Route
              path="products"
              element={
                <ProductsPage
                  products={products}
                  loading={loading}
                  addProduct={addProduct}
                  editProduct={editProduct}
                  removeProduct={removeProduct}
                />
              }
            />
            <Route
              path="users"
              element={
                <UsersPage
                  users={users}
                  loading={usersLoading}
                  addUser={addUser}
                  editUser={editUser}
                  removeUser={removeUser}
                />
              }
            />
            <Route
              path="orders"
              element={
                <OrdersPage
                  orders={orders}
                  loading={ordersLoading}
                  changeOrderStatus={changeOrderStatus}
                />
              }
            />
            <Route
              path="settings"
              element={
                <SettingsPage
                  settings={settings}
                  saveProfile={saveProfile}
                  saveStore={saveStore}
                  savePreferences={savePreferences}
                />
              }
            />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
