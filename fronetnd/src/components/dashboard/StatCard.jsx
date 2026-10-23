export default function StatCard({ label, value, icon: Icon, color }) {
  return (
    <div className="flex min-w-[220px] flex-1 items-center gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${color}`}
      >
        <Icon size={22} />
      </div>
      <div>
        <p className="text-sm text-slate-500">{label}</p>
        <p className="text-2xl font-semibold text-slate-900">{value}</p>
      </div>
    </div>
  );
}
