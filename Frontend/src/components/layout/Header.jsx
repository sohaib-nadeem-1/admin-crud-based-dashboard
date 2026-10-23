import { Bell, Menu, Search } from "lucide-react";

export default function Header({ title, onMenuClick }) {
  return (
    <header className="flex h-16 shrink-0 items-center gap-3 border-b border-slate-200 bg-white px-4 sm:px-6">
      <button
        onClick={onMenuClick}
        aria-label="Open menu"
        className="rounded-md p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
      >
        <Menu size={20} />
      </button>

      <h1 className="truncate text-lg font-semibold text-slate-900">{title}</h1>

      {/* Search is hidden on very small screens */}
      <div className="ml-auto hidden max-w-xs flex-1 items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-2 sm:flex">
        <Search size={16} className="text-slate-400" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
        />
      </div>

      <div className="ml-auto flex items-center gap-3 sm:ml-0">
        <button
          aria-label="Notifications"
          className="rounded-md p-2 text-slate-500 hover:bg-slate-100"
        >
          <Bell size={20} />
        </button>

        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
            A
          </div>
          <span className="hidden text-sm font-medium text-slate-700 md:block">
            Admin
          </span>
        </div>
      </div>
    </header>
  );
}
