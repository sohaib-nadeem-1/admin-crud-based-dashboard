import { useEffect, useRef, useState } from "react";
import { Bell, ChevronDown, LogOut, Menu, Search } from "lucide-react";

export default function Header({ title, onMenuClick, user, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const name = user ? user.name : "Admin";

  // Close the profile menu on outside click or Escape
  useEffect(() => {
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    function handleKey(e) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

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

        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-haspopup="menu"
            aria-expanded={menuOpen}
            aria-label="Profile menu"
            className="flex items-center gap-2 rounded-md p-1 hover:bg-slate-100"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
              {name.charAt(0).toUpperCase()}
            </div>
            <span className="hidden text-sm font-medium text-slate-700 md:block">
              {name}
            </span>
            <ChevronDown size={16} className="hidden text-slate-400 md:block" />
          </button>

          {menuOpen && (
            <div
              role="menu"
              className="absolute right-0 z-20 mt-2 w-56 rounded-lg border border-slate-200 bg-white py-1 shadow-lg"
            >
              <div className="border-b border-slate-100 px-4 py-3">
                <p className="text-sm font-medium text-slate-900">{name}</p>
                {user && (
                  <p className="truncate text-xs text-slate-500">{user.email}</p>
                )}
              </div>
              <button
                role="menuitem"
                onClick={() => {
                  setMenuOpen(false);
                  onLogout();
                }}
                className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
