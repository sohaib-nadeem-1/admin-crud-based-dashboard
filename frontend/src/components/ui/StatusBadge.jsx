import { getStatus } from "../../utils/product";

const styles = {
  "In Stock": "bg-green-50 text-green-700 border-green-200",
  "Low Stock": "bg-amber-50 text-amber-700 border-amber-200",
  "Out of Stock": "bg-red-50 text-red-700 border-red-200",
};

export default function StatusBadge({ stock }) {
  const status = getStatus(stock);

  return (
    <span
      className={`inline-block whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}
