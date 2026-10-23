// All order data access lives here (mock data for now).
// Later, replace each function body with the fetch() call in the comment.
//
// const API_URL = "http://localhost:5000";

import { initialOrders } from "../data/orders";

let orders = [...initialOrders];

// GET /orders
export async function getOrders() {
  // const res = await fetch(`${API_URL}/orders`);
  // return res.json();
  return [...orders];
}

// GET /orders/:id
export async function getOrderById(id) {
  // const res = await fetch(`${API_URL}/orders/${id}`);
  // return res.json();
  return orders.find((o) => o.id === id);
}

// PATCH /orders/:id  (body: { status })
export async function updateOrderStatus(id, status) {
  // const res = await fetch(`${API_URL}/orders/${id}`, {
  //   method: "PATCH",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ status }),
  // });
  // return res.json();
  orders = orders.map((o) => (o.id === id ? { ...o, status } : o));
  return orders.find((o) => o.id === id);
}
