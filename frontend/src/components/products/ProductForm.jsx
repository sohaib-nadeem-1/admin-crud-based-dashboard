import { useState } from "react";
import { ImagePlus } from "lucide-react";

const inputClass =
  "w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500";

const emptyForm = {
  name: "",
  category: "",
  price: "",
  stock: "",
  description: "",
  image: "",
};

// Used for both Add and Edit.
// Pass `product` to fill the form with existing data (Edit).
export default function ProductForm({
  product,
  categories,
  submitLabel,
  onSubmit,
  onCancel,
}) {
  const [form, setForm] = useState(
    product
      ? { ...product, price: String(product.price), stock: String(product.stock) }
      : emptyForm
  );
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleImage(e) {
    const file = e.target.files[0];
    if (!file) return;
    // Temporary preview URL. With a real API you will upload the file instead.
    setForm({ ...form, image: URL.createObjectURL(file) });
  }

  function validate() {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Product name is required";
    if (!form.category) newErrors.category = "Choose a category";
    if (form.price === "" || Number(form.price) <= 0)
      newErrors.price = "Enter a price above 0";
    if (form.stock === "" || Number(form.stock) < 0)
      newErrors.stock = "Enter 0 or more";
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    onSubmit({
      name: form.name.trim(),
      category: form.category,
      price: Number(form.price),
      stock: Number(form.stock),
      description: form.description.trim(),
      image: form.image,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">
          Product Name
        </label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="e.g. Wireless Headphones"
          className={inputClass}
        />
        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
      </div>

      <div className="flex flex-wrap gap-4">
        <div className="min-w-[140px] flex-1">
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Category
          </label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select category</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="mt-1 text-xs text-red-600">{errors.category}</p>
          )}
        </div>

        <div className="min-w-[100px] flex-1">
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Price ($)
          </label>
          <input
            type="number"
            name="price"
            min="0"
            step="0.01"
            value={form.price}
            onChange={handleChange}
            placeholder="0.00"
            className={inputClass}
          />
          {errors.price && (
            <p className="mt-1 text-xs text-red-600">{errors.price}</p>
          )}
        </div>

        <div className="min-w-[100px] flex-1">
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Stock
          </label>
          <input
            type="number"
            name="stock"
            min="0"
            step="1"
            value={form.stock}
            onChange={handleChange}
            placeholder="0"
            className={inputClass}
          />
          {errors.stock && (
            <p className="mt-1 text-xs text-red-600">{errors.stock}</p>
          )}
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">
          Description
        </label>
        <textarea
          name="description"
          rows={3}
          value={form.description}
          onChange={handleChange}
          placeholder="Short product description"
          className={inputClass}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">
          Product Image
        </label>
        <div className="flex items-center gap-3">
          {form.image ? (
            <img
              src={form.image}
              alt="Preview"
              className="h-14 w-14 rounded-md border border-slate-200 object-cover"
            />
          ) : (
            <div className="flex h-14 w-14 items-center justify-center rounded-md border border-dashed border-slate-300 text-slate-400">
              <ImagePlus size={20} />
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
            className="min-w-0 flex-1 text-sm text-slate-600 file:mr-3 file:rounded-md file:border file:border-slate-300 file:bg-white file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-slate-700 hover:file:bg-slate-50"
          />
        </div>
      </div>

      <div className="flex justify-end gap-3 border-t border-slate-200 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
