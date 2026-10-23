import { useState } from "react";
import Modal from "../ui/Modal";
import OrderStatusBadge from "./OrderStatusBadge";
import { orderStatuses } from "../../data/orders";
import { formatDate } from "../../utils/date";
import { formatPrice, getOrderTotal } from "../../utils/order";
import {
  inputClass,
  labelClass,
  primaryButtonClass,
  secondaryButtonClass,
} from "../ui/formStyles";

function InfoRow({ label, children }) {
  return (
    <div className="flex justify-between gap-4 py-1.5 text-sm">
      <span className="shrink-0 text-slate-500">{label}</span>
      <span className="text-right text-slate-900">{children}</span>
    </div>
  );
}

export default function OrderDetailsModal({ order, onStatusChange, onClose }) {
  const [newStatus, setNewStatus] = useState(order.status);
  const [saved, setSaved] = useState(false);

  async function handleUpdate() {
    await onStatusChange(order.id, newStatus);
    setSaved(true);
  }

  return (
    <Modal title={`Order #${order.id}`} onClose={onClose}>
      <div className="flex flex-col gap-5">
        {/* Order info */}
        <div className="rounded-lg border border-slate-200 px-4 py-2">
          <InfoRow label="Order date">{formatDate(order.date)}</InfoRow>
          <InfoRow label="Status">
            <OrderStatusBadge status={order.status} />
          </InfoRow>
        </div>

        {/* Customer */}
        <div>
          <h3 className="mb-2 text-sm font-semibold text-slate-900">
            Customer information
          </h3>
          <div className="rounded-lg border border-slate-200 px-4 py-2">
            <InfoRow label="Name">{order.customer.name}</InfoRow>
            <InfoRow label="Email">{order.customer.email}</InfoRow>
            <InfoRow label="Phone">{order.customer.phone}</InfoRow>
            <InfoRow label="Address">{order.customer.address}</InfoRow>
          </div>
        </div>

        {/* Products */}
        <div>
          <h3 className="mb-2 text-sm font-semibold text-slate-900">Products</h3>
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full min-w-[380px] text-left text-sm">
              <thead className="bg-slate-50 text-slate-500">
                <tr>
                  <th className="px-4 py-2 font-medium">Product</th>
                  <th className="px-4 py-2 font-medium">Qty</th>
                  <th className="px-4 py-2 font-medium">Price</th>
                  <th className="px-4 py-2 text-right font-medium">Subtotal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {order.items.map((item) => (
                  <tr key={item.name}>
                    <td className="px-4 py-2 text-slate-900">{item.name}</td>
                    <td className="px-4 py-2 text-slate-600">{item.quantity}</td>
                    <td className="px-4 py-2 text-slate-600">
                      {formatPrice(item.price)}
                    </td>
                    <td className="px-4 py-2 text-right text-slate-600">
                      {formatPrice(item.price * item.quantity)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between border-t border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900">
              <span>Total</span>
              <span>{formatPrice(getOrderTotal(order))}</span>
            </div>
          </div>
        </div>

        {/* Update status */}
        <div className="border-t border-slate-200 pt-4">
          <label className={labelClass}>Update status</label>
          <div className="flex flex-wrap gap-3">
            <select
              value={newStatus}
              onChange={(e) => {
                setNewStatus(e.target.value);
                setSaved(false);
              }}
              className={`${inputClass} min-w-[160px] flex-1`}
            >
              {orderStatuses.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <button
              onClick={handleUpdate}
              disabled={newStatus === order.status}
              className={`${primaryButtonClass} disabled:cursor-not-allowed disabled:opacity-50`}
            >
              Update Status
            </button>
          </div>
          {saved && (
            <p className="mt-2 text-xs text-green-600">Order status updated.</p>
          )}
        </div>

        <div className="flex justify-end">
          <button onClick={onClose} className={secondaryButtonClass}>
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
}
