import { useEffect, useState } from "react";
import { getOrders, updateOrderStatus } from "../services/orderService";

export default function useOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getOrders().then((data) => {
      setOrders(data);
      setLoading(false);
    });
  }, []);

  async function changeOrderStatus(id, status) {
    const updated = await updateOrderStatus(id, status);
    setOrders((prev) => prev.map((o) => (o.id === id ? updated : o)));
  }

  return { orders, loading, changeOrderStatus };
}
