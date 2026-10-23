import { useState } from "react";
import { Plus } from "lucide-react";
import UserFilters from "../components/users/UserFilters";
import UserTable from "../components/users/UserTable";
import UserForm from "../components/users/UserForm";
import UserViewModal from "../components/users/UserViewModal";
import DeleteUserModal from "../components/users/DeleteUserModal";
import Modal from "../components/ui/Modal";

export default function UsersPage({
  users,
  loading,
  addUser,
  editUser,
  removeUser,
}) {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");

  const [modal, setModal] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  const filteredUsers = users.filter((u) => {
    const text = search.toLowerCase();

    const name = String(u.name ?? "").toLowerCase();
    const email = String(u.email ?? "").toLowerCase();

    const matchesSearch =
      name.includes(text) ||
      email.includes(text);

    const matchesRole = !role || u.role === role;
    const matchesStatus = !status || u.status === status;

    return matchesSearch && matchesRole && matchesStatus;
  });

  function openModal(type, user = null) {
    setSelectedUser(user);
    setModal(type);
  }

  function closeModal() {
    setModal(null);
    setSelectedUser(null);
  }

  async function handleAdd(data) {
    await addUser(data);
    closeModal();
  }

  async function handleEdit(data) {
    await editUser(selectedUser.id, data);
    closeModal();
  }

  async function handleDelete() {
    await removeUser(selectedUser.id);
    closeModal();
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Users</h2>
          <p className="text-sm text-slate-500">
            Manage the people who use your store.
          </p>
        </div>

        <button
          onClick={() => openModal("add")}
          className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          <Plus size={16} />
          Add User
        </button>
      </div>

      <UserFilters
        search={search}
        onSearchChange={setSearch}
        role={role}
        onRoleChange={setRole}
        status={status}
        onStatusChange={setStatus}
      />

      <UserTable
        users={filteredUsers}
        loading={loading}
        onView={(u) => openModal("view", u)}
        onEdit={(u) => openModal("edit", u)}
        onDelete={(u) => openModal("delete", u)}
      />

      {modal === "add" && (
        <Modal title="Add User" onClose={closeModal}>
          <UserForm
            submitLabel="Add User"
            onSubmit={handleAdd}
            onCancel={closeModal}
          />
        </Modal>
      )}

      {modal === "view" && (
        <UserViewModal
          user={selectedUser}
          onClose={closeModal}
          onEdit={() => setModal("edit")}
        />
      )}

      {modal === "edit" && (
        <Modal title="Edit User" onClose={closeModal}>
          <UserForm
            user={selectedUser}
            submitLabel="Save Changes"
            onSubmit={handleEdit}
            onCancel={closeModal}
          />
        </Modal>
      )}

      {modal === "delete" && (
        <DeleteUserModal
          user={selectedUser}
          onConfirm={handleDelete}
          onCancel={closeModal}
        />
      )}
    </div>
  );
}