import { useState } from "react";
import OrderFilters from "../components/orders/OrderFilters";
import OrderTable from "../components/orders/OrderTable";
import OrderDetailsModal from "../components/orders/OrderDetailsModal";

export default function OrdersPage({ orders, loading, changeOrderStatus }) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  // We keep only the id, so the modal always shows the latest order data
  const [selectedId, setSelectedId] = useState(null);
  const selectedOrder = orders.find((o) => o.id === selectedId);

  const filteredOrders = orders.filter((o) => {
    const text = search.toLowerCase();
    const matchesSearch =
      o.id.toLowerCase().includes(text) ||
      o.customer.name.toLowerCase().includes(text) ||
      o.items.some((item) => item.name.toLowerCase().includes(text));
    const matchesStatus = !status || o.status === status;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">Orders</h2>
        <p className="text-sm text-slate-500">
          Track orders and update their status.
        </p>
      </div>

      <OrderFilters
        search={search}
        onSearchChange={setSearch}
        status={status}
        onStatusChange={setStatus}
      />

      <OrderTable
        orders={filteredOrders}
        loading={loading}
        onView={(order) => setSelectedId(order.id)}
      />

      {selectedOrder && (
        <OrderDetailsModal
          order={selectedOrder}
          onStatusChange={changeOrderStatus}
          onClose={() => setSelectedId(null)}
        />
      )}
    </div>
  );
}
