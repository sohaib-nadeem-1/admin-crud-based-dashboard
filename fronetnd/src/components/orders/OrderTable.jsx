import { Eye } from "lucide-react";
import OrderStatusBadge from "./OrderStatusBadge";
import { formatDate } from "../../utils/date";
import {
  formatPrice,
  getOrderTotal,
  getProductSummary,
} from "../../utils/order";

export default function OrderTable({ orders, loading, onView }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[820px] text-left text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="px-5 py-3 font-medium">Order ID</th>
              <th className="px-5 py-3 font-medium">Customer</th>
              <th className="px-5 py-3 font-medium">Product</th>
              <th className="px-5 py-3 font-medium">Amount</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Date</th>
              <th className="px-5 py-3 text-right font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-slate-50">
                <td className="whitespace-nowrap px-5 py-3 font-medium text-slate-900">
                  #{order.id}
                </td>
                <td className="px-5 py-3 text-slate-600">
                  {order.customer.name}
                </td>
                <td className="px-5 py-3 text-slate-600">
                  {getProductSummary(order)}
                </td>
                <td className="px-5 py-3 text-slate-600">
                  {formatPrice(getOrderTotal(order))}
                </td>
                <td className="px-5 py-3">
                  <OrderStatusBadge status={order.status} />
                </td>
                <td className="whitespace-nowrap px-5 py-3 text-slate-600">
                  {formatDate(order.date)}
                </td>
                <td className="px-5 py-3">
                  <div className="flex justify-end">
                    <button
                      onClick={() => onView(order)}
                      className="flex items-center gap-1 rounded-md border border-slate-300 px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100"
                    >
                      <Eye size={14} />
                      View
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {loading && (
        <p className="px-5 py-10 text-center text-sm text-slate-500">
          Loading orders...
        </p>
      )}

      {!loading && orders.length === 0 && (
        <p className="px-5 py-10 text-center text-sm text-slate-500">
          No orders found. Try changing the search or filter.
        </p>
      )}
    </div>
  );
}
