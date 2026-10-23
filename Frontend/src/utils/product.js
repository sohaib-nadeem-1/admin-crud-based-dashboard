export const LOW_STOCK_LIMIT = 10;

// Status is worked out from the stock number.
export function getStatus(stock) {
  if (stock <= 0) return "Out of Stock";
  if (stock <= LOW_STOCK_LIMIT) return "Low Stock";
  return "In Stock";
}

export function formatPrice(price) {
  return `$${Number(price).toFixed(2)}`;
}
