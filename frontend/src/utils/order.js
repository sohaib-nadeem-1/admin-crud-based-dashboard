import { formatPrice } from "./product";

export function getOrderTotal(order) {
  return order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

// "Mechanical Keyboard" or "Mechanical Keyboard +1 more"
export function getProductSummary(order) {
  const first = order.items[0].name;
  const extra = order.items.length - 1;
  return extra > 0 ? `${first} +${extra} more` : first;
}

export { formatPrice };
