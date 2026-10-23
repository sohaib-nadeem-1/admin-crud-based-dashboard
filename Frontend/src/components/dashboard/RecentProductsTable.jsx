import StatusBadge from "../ui/StatusBadge";
import ProductThumb from "../ui/ProductThumb";
import { formatPrice } from "../../utils/product";

export default function RecentProductsTable({ products }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-5 py-4">
        <h2 className="text-base font-semibold text-slate-900">
          Recent Products
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] text-left text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="px-5 py-3 font-medium">Product</th>
              <th className="px-5 py-3 font-medium">Category</th>
              <th className="px-5 py-3 font-medium">Price</th>
              <th className="px-5 py-3 font-medium">Stock</th>
              <th className="px-5 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {products.map((product) => (
              <tr key={product.id}>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
