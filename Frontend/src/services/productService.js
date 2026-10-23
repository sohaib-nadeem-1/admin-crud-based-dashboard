// All product data access lives in this file.
//
// Right now it works on an in-memory array (mock data).
// When the Express API is ready, replace the body of each function
// with a fetch() call. The components do not need to change.
//
// const API_URL = "http://localhost:5000";

import { initialProducts } from "../data/products";

let products = [...initialProducts];
let nextId = initialProducts.length + 1;

// GET /products
export async function getProducts() {
  const res = await fetch('http://localhost:3000/api/apple/products');
const data = await   res.json();
  return data.getData;
}

// GET /products/:id
// GET /products/:id
export async function getProductById(id) {
  const res = await fetch(
    `http://localhost:3000/api/apple/products/${id}`
  );

  const result = await res.json();

  return result.GetDataByID[0];
}
// POST /products
export async function createProduct(data) {
  const res = await fetch("http://localhost:3000/api/apple/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await res.json();

  return result.insertingData[0];
}

// PATCH /products/:id
export async function updateProduct(id, data) {
  const res = await fetch(`http://localhost:3000/api/apple/products/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await res.json();

  return result.updatingData[0];
}
// DELETE /products/:id
export async function deleteProduct(id) {
  const res = await fetch(
    `http://localhost:3000/api/apple/products/${id}`,
    {
      method: "DELETE",
    }
  );

  const result = await res.json();

  return result;
}