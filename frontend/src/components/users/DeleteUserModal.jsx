import Modal from "../ui/Modal";

export default function DeleteUserModal({ user, onConfirm, onCancel }) {
  return (
    <Modal title="Delete User?" onClose={onCancel}>
      <p className="text-sm text-slate-600">
        Are you sure you want to delete {user.name}?
      </p>
      <div className="mt-6 flex justify-end gap-3">
        <button
          onClick={onCancel}
          className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </Modal>
  );
}
