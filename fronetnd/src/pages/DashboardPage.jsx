import { Package, Users, ShoppingCart, AlertTriangle } from "lucide-react";
import StatCard from "../components/dashboard/StatCard";
import RecentProductsTable from "../components/dashboard/RecentProductsTable";
import { getStatus } from "../utils/product";

// Users and orders do not exist yet, so these are fixed sample numbers.
const SAMPLE_TOTAL_USERS = 1248;
const SAMPLE_TOTAL_ORDERS = 356;

export default function DashboardPage({ products }) {
  const lowStockCount = products.filter(
    (p) => getStatus(p.stock) === "Low Stock"
  ).length;

  // Newest products are added to the start of the list
  const recentProducts = products.slice(0, 5);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-4">
        <StatCard
          label="Total Products"
          value={products.length}
          icon={Package}
          color="bg-blue-50 text-blue-600"
        />
        <StatCard
          label="Total Users"
          value={SAMPLE_TOTAL_USERS.toLocaleString()}
          icon={Users}
          color="bg-green-50 text-green-600"
        />
        <StatCard
          label="Total Orders"
          value={SAMPLE_TOTAL_ORDERS}
          icon={ShoppingCart}
          color="bg-purple-50 text-purple-600"
        />
        <StatCard
          label="Low Stock Products"
          value={lowStockCount}
          icon={AlertTriangle}
          color="bg-amber-50 text-amber-600"
        />
      </div>

      <RecentProductsTable products={recentProducts} />
    </div>
  );
}
