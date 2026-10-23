import {
  LayoutDashboard,
  Package,
  Users,
  ShoppingCart,
  Settings,
  Store,
  X,
} from "lucide-react";

const links = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "products", label: "Products", icon: Package },
  { id: "users", label: "Users", icon: Users },
  { id: "orders", label: "Orders", icon: ShoppingCart },
  { id: "settings", label: "Settings", icon: Settings },
];

export default function Sidebar({ activePage, onNavigate, isOpen, onClose }) {
  return (
    <>
      {/* Dark overlay behind the sidebar on small screens */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-slate-200 bg-white transition-transform duration-200 lg:static lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-slate-200 px-5">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 text-white">
              <Store size={18} />
            </div>
            <span className="text-lg font-semibold text-slate-900">
              ShopAdmin
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-md p-1 text-slate-400 hover:bg-slate-100 lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex flex-col gap-1 p-3">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = activePage === link.id;

            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <Icon size={18} />
                {link.label}
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
