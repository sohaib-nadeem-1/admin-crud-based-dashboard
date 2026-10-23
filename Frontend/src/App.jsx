import { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import DashboardPage from "./pages/DashboardPage";
import ProductsPage from "./pages/ProductsPage";
import PlaceholderPage from "./pages/PlaceholderPage";
import useProducts from "./hooks/useProducts";

const pageTitles = {
  dashboard: "Dashboard",
  products: "Products",
  users: "Users",
  orders: "Orders",
  settings: "Settings",
};

export default function App() {
  // Products is the main page, so it opens first
  const [activePage, setActivePage] = useState("products");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { products, loading, addProduct, editProduct, removeProduct } =
    useProducts();

  function handleNavigate(page) {
    setActivePage(page);
    setSidebarOpen(false);
  }

  function renderPage() {
    if (activePage === "dashboard") {
      return <DashboardPage products={products} />;
    }
    if (activePage === "products") {
      return (
        <ProductsPage
          products={products}
          loading={loading}
          addProduct={addProduct}
          editProduct={editProduct}
          removeProduct={removeProduct}
        />
      );
    }
    return <PlaceholderPage title={pageTitles[activePage]} />;
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
        />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">{renderPage()}</main>
      </div>
    </div>
  );
}
