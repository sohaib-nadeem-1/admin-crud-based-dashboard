import { Search } from "lucide-react";
import { orderStatuses } from "../../data/orders";

const inputClass =
  "rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500";

export default function OrderFilters({
  search,
  onSearchChange,
  status,
  onStatusChange,
}) {
  return (
    <div className="flex flex-wrap gap-3">
      <div className="relative min-w-[220px] flex-1">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by order ID, customer or product..."
          className={`${inputClass} w-full pl-9`}
        />
      </div>

      <select
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
        className={`${inputClass} flex-1 sm:flex-none`}
      >
        <option value="">All status</option>
        {orderStatuses.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
    </div>
  );
}
