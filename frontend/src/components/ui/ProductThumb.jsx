export default function ProductThumb({ product }) {
  const name = String(product?.name ?? "Product");

  if (product?.image) {
    return (
      <img
        src={product.image}
        alt={name}
        className="h-10 w-10 shrink-0 rounded-md border border-slate-200 object-cover"
      />
    );
  }

  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-slate-100 text-sm font-semibold text-slate-500">
      {name.charAt(0).toUpperCase()}
    </div>
  );
}