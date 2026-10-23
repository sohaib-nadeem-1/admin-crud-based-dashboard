import { Eye, Pencil, Trash2 } from "lucide-react";
import UserAvatar from "./UserAvatar";
import { RoleBadge, UserStatusBadge } from "./UserBadges";
import { formatDate } from "../../utils/date";

export default function UserTable({
  users,
  loading,
  onView,
  onEdit,
  onDelete,
}) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[820px] text-left text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="px-5 py-3 font-medium">User</th>
              <th className="px-5 py-3 font-medium">Email</th>
              <th className="px-5 py-3 font-medium">Role</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Joined</th>
              <th className="px-5 py-3 text-right font-medium">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {users.map((user, index) => (
              <tr
                key={user.id ?? `user-${index}`}
                className="hover:bg-slate-50"
              >
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <UserAvatar user={user} />
                    <span className="font-medium text-slate-900">
                      {user.name}
                    </span>
                  </div>
                </td>

                <td className="px-5 py-3 text-slate-600">
                  {user.email}
                </td>

                <td className="px-5 py-3">
                  <RoleBadge role={user.role} />
                </td>

                <td className="px-5 py-3">
                  <UserStatusBadge status={user.status} />
                </td>

                <td className="whitespace-nowrap px-5 py-3 text-slate-600">
                  {formatDate(
                    user.createdAt || user.created_at || user.joined
                  )}
                </td>

                <td className="px-5 py-3">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => onView(user)}
                      className="flex items-center gap-1 rounded-md border border-slate-300 px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100"
                    >
                      <Eye size={14} />
                      View
                    </button>

                    <button
                      onClick={() => onEdit(user)}
                      className="flex items-center gap-1 rounded-md border border-slate-300 px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100"
                    >
                      <Pencil size={14} />
                      Edit
                    </button>

                    <button
                      onClick={() => onDelete(user)}
                      className="flex items-center gap-1 rounded-md border border-red-200 px-2.5 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50"
                    >
                      <Trash2 size={14} />
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {loading && (
        <p className="px-5 py-10 text-center text-sm text-slate-500">
          Loading users...
        </p>
      )}

      {!loading && users.length === 0 && (
        <p className="px-5 py-10 text-center text-sm text-slate-500">
          No users found. Try changing the search or filters.
        </p>
      )}
    </div>
  );
}