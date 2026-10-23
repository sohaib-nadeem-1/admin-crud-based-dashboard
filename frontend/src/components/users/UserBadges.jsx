const roleStyles = {
  Admin: "bg-blue-50 text-blue-700 border-blue-200",
  Customer: "bg-slate-50 text-slate-600 border-slate-200",
};

const statusStyles = {
  Active: "bg-green-50 text-green-700 border-green-200",
  Inactive: "bg-slate-100 text-slate-500 border-slate-200",
};

const base =
  "inline-block whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-medium";

export function RoleBadge({ role }) {
  return <span className={`${base} ${roleStyles[role]}`}>{role}</span>;
}

export function UserStatusBadge({ status }) {
  return <span className={`${base} ${statusStyles[status]}`}>{status}</span>;
}
