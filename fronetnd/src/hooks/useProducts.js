import { useEffect, useState } from "react";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../services/productService";

// Keeps the product list in React state and talks to the service.
export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  async function addProduct(data) {
    const created = await createProduct(data);
    setProducts((prev) => [created, ...prev]);
  }

  async function editProduct(id, data) {
    const updated = await updateProduct(id, data);
    setProducts((prev) => prev.map((p) => (p.id === id ? updated : p)));
  }

  async function removeProduct(id) {
    await deleteProduct(id);
    setProducts((prev) => prev.filter((p) => p.id !== id));
  }

  return { products, loading, addProduct, editProduct, removeProduct };
}
