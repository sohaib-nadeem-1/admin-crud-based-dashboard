import { useEffect, useState } from "react";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../services/userService";

export default function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
      setLoading(false);
    });
  }, []);

  async function addUser(data) {
    const created = await createUser(data);
    setUsers((prev) => [created, ...prev]);
  }

  async function editUser(id, data) {
    const updated = await updateUser(id, data);
    setUsers((prev) => prev.map((u) => (u.id === id ? updated : u)));
  }

  async function removeUser(id) {
    await deleteUser(id);
    setUsers((prev) => prev.filter((u) => u.id !== id));
  }

  return { users, loading, addUser, editUser, removeUser };
}
