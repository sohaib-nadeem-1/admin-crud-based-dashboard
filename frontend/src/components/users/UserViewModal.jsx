import Modal from "../ui/Modal";
import UserAvatar from "./UserAvatar";
import { RoleBadge, UserStatusBadge } from "./UserBadges";
import { formatDate } from "../../utils/date";
import { primaryButtonClass, secondaryButtonClass } from "../ui/formStyles";

function DetailRow({ label, children }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-slate-100 py-3 text-sm last:border-b-0">
      <span className="text-slate-500">{label}</span>
      <span className="text-right font-medium text-slate-900">{children}</span>
    </div>
  );
}

export default function UserViewModal({ user, onClose, onEdit }) {
  return (
    <Modal title="User Details" onClose={onClose}>
      <div className="flex items-center gap-4 pb-4">
        <UserAvatar user={user} size="h-14 w-14" />
        <div className="min-w-0">
          <p className="truncate text-base font-semibold text-slate-900">
            {user.name}
          </p>
          <p className="truncate text-sm text-slate-500">{user.email}</p>
        </div>
      </div>

      <div className="rounded-lg border border-slate-200 px-4">
        <DetailRow label="Role">
          <RoleBadge role={user.role} />
        </DetailRow>
        <DetailRow label="Status">
          <UserStatusBadge status={user.status} />
        </DetailRow>
        <DetailRow label="Joined">{formatDate(user.joined)}</DetailRow>
      </div>

      <div className="mt-6 flex justify-end gap-3">
        <button onClick={onClose} className={secondaryButtonClass}>
          Close
        </button>
        <button onClick={onEdit} className={primaryButtonClass}>
          Edit User
        </button>
      </div>
    </Modal>
  );
}
