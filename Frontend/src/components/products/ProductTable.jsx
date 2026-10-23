import { Pencil, Trash2 } from "lucide-react";
import StatusBadge from "../ui/StatusBadge";
import ProductThumb from "../ui/ProductThumb";
import { formatPrice } from "../../utils/product";

export default function ProductTable({ products, loading, onEdit, onDelete }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="px-5 py-3 font-medium">Product</th>
              <th className="px-5 py-3 font-medium">Category</th>
              <th className="px-5 py-3 font-medium">Price</th>
              <th className="px-5 py-3 font-medium">Stock</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 text-right font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-slate-50">
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <ProductThumb product={product} />
                    <span className="font-medium text-slate-900">
                      {product.name}
                    </span>
                  </div>
                </td>
                <td className="px-5 py-3 text-slate-600">{product.category}</td>
                <td className="px-5 py-3 text-slate-600">
                  {formatPrice(product.price)}
                </td>
                <td className="px-5 py-3 text-slate-600">{product.stock}</td>
                <td className="px-5 py-3">
                  <StatusBadge stock={product.stock} />
                </td>
                <td className="px-5 py-3">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => onEdit(product)}
                      className="flex items-center gap-1 rounded-md border border-slate-300 px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100"
                    >
                      <Pencil size={14} />
                      Edit
                    </button>
                    <button
                      onClick={() => onDelete(product)}
                      className="flex items-center gap-1 rounded-md border border-red-200 px-2.5 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50"
                    >
                      <Trash2 size={14} />
                      Delete
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
          Loading products...
        </p>
      )}

      {!loading && products.length === 0 && (
        <p className="px-5 py-10 text-center text-sm text-slate-500">
          No products found. Try changing the search or filters.
        </p>
      )}
    </div>
  );
}
