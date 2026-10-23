import { useState } from "react";
import { Plus } from "lucide-react";
import ProductFilters from "../components/products/ProductFilters";
import ProductTable from "../components/products/ProductTable";
import ProductForm from "../components/products/ProductForm";
import DeleteConfirmModal from "../components/products/DeleteConfirmModal";
import Modal from "../components/ui/Modal";
import { categories } from "../data/products";
import { getStatus } from "../utils/product";

export default function ProductsPage({
  products,
  loading,
  addProduct,
  editProduct,
  removeProduct,
}) {
  // Filters
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");

  // Which modal is open: "add", "edit", "delete" or null
  const [modal, setModal] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = !category || p.category === category;
    const matchesStatus = !status || getStatus(p.stock) === status;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  function closeModal() {
    setModal(null);
    setSelectedProduct(null);
  }

  function openEdit(product) {
    setSelectedProduct(product);
    setModal("edit");
  }

  function openDelete(product) {
    setSelectedProduct(product);
    setModal("delete");
  }

  async function handleAdd(data) {
    await addProduct(data);
    closeModal();
  }

  async function handleEdit(data) {
    await editProduct(selectedProduct.id, data);
    closeModal();
  }

  async function handleDelete() {
    await removeProduct(selectedProduct.id);
    closeModal();
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Products</h2>
          <p className="text-sm text-slate-500">
            Manage the products in your store.
          </p>
        </div>
        <button
          onClick={() => setModal("add")}
          className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          <Plus size={16} />
          Add Product
        </button>
      </div>

      <ProductFilters
        categories={categories}
        search={search}
        onSearchChange={setSearch}
        category={category}
        onCategoryChange={setCategory}
        status={status}
        onStatusChange={setStatus}
      />

      <ProductTable
        products={filteredProducts}
        loading={loading}
        onEdit={openEdit}
        onDelete={openDelete}
      />

      {modal === "add" && (
        <Modal title="Add Product" onClose={closeModal}>
          <ProductForm
            categories={categories}
            submitLabel="Add Product"
            onSubmit={handleAdd}
            onCancel={closeModal}
          />
        </Modal>
      )}

      {modal === "edit" && (
        <Modal title="Edit Product" onClose={closeModal}>
          <ProductForm
            product={selectedProduct}
            categories={categories}
            submitLabel="Save Changes"
            onSubmit={handleEdit}
            onCancel={closeModal}
          />
        </Modal>
      )}

      {modal === "delete" && (
        <DeleteConfirmModal onConfirm={handleDelete} onCancel={closeModal} />
      )}
    </div>
  );
}
