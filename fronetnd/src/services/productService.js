const API_URL = import.meta.env.VITE_API_URL;

export async function getProducts() {
  const res = await fetch(`${API_URL}/api/apple/products`);
  if (!res.ok) throw new Error("Failed to fetch products");

  const data = await res.json();
  return data.getData;
}

export async function getProductById(id) {
  const res = await fetch(`${API_URL}/api/apple/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");

  const data = await res.json();
  return data.GetDataByID?.[0];
}

export async function createProduct(data) {
  const res = await fetch(`${API_URL}/api/apple/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to create product");

  const result = await res.json();
  return result.insertingData?.[0];
}

export async function updateProduct(id, data) {
  const res = await fetch(`${API_URL}/api/apple/products/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to update product");

  const result = await res.json();
  return result.updatingData?.[0];
}

export async function deleteProduct(id) {
  const res = await fetch(`${API_URL}/api/apple/products/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Failed to delete product");

  return res.json();
}