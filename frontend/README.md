# Shop Admin – Products CRUD UI

First level of an e-commerce project: the admin dashboard with a Products page (add, edit, delete, search, filter).

Built with React, Vite, Tailwind CSS (v3) and JavaScript. Uses mock data for now.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal.

## Folder structure

```
src/
  components/
    layout/      Sidebar, Header
    dashboard/   StatCard, RecentProductsTable
    products/    ProductTable, ProductFilters, ProductForm, DeleteConfirmModal
    users/       UserTable, UserFilters, UserForm, UserViewModal, DeleteUserModal
    orders/      OrderTable, OrderFilters, OrderDetailsModal, OrderStatusBadge
    settings/    ProfileSettings, StoreSettings, PreferencesSettings, SecuritySettings
    ui/          Modal, StatusBadge, ProductThumb, formStyles
  pages/         Dashboard, Products, Users, Orders, Settings
  hooks/         useProducts, useUsers, useOrders, useSettings
  services/      productService, userService, orderService, settingsService
  data/          mock products, users, orders, settings
  utils/         status, price, date and order helpers
```

Users, Orders and Settings are frontend-only for now. There is no login, password handling, or API call anywhere.

## Login (frontend-only for now)

Demo account: `admin@shopadmin.com` / `admin123`

- All admin pages need a login. Logged-out users are sent to `/login`, and logged-in users who open `/login` go to the dashboard.
- The session is saved in the browser so a refresh keeps you logged in. "Remember me" uses `localStorage` (stays after closing the browser). Without it, `sessionStorage` is used (ends with the tab).
- Logout is in the profile menu in the header.

Where things are:

```
src/services/authService.js        login, logout, saved session (mock)
src/context/AuthContext.jsx        keeps the logged-in user for the app
src/hooks/useAuth.js               useAuth() for components
src/components/auth/ProtectedRoute.jsx    wraps admin routes
src/components/auth/PublicOnlyRoute.jsx   wraps /login pages
src/layouts/AdminLayout.jsx        sidebar + header + admin pages
```

To use a real API, replace the body of `login()` in `authService.js` with the `POST /auth/login` call written in the comment.
Real apps should keep the token in an httpOnly cookie set by the server instead of browser storage, so plan that change when you build the backend.

## Connecting the API later

Components never touch the data directly. They call `useProducts`, which calls `src/services/productService.js`.
Each function in that file has the matching REST call written as a comment:

| Function          | Request              |
| ----------------- | -------------------- |
| `getProducts`     | `GET /products`      |
| `getProductById`  | `GET /products/:id`  |
| `createProduct`   | `POST /products`     |
| `updateProduct`   | `PATCH /products/:id`|
| `deleteProduct`   | `DELETE /products/:id`|

Users (`/users`), Orders (`/orders`, status update with `PATCH /orders/:id`) and Settings (`/settings/...`) follow the same pattern in their own service files.
Replace the mock code in those functions with `fetch()` and the UI keeps working.

Notes:
- Product status (In Stock / Low Stock / Out of Stock) is calculated from `stock` in `src/utils/product.js` (low stock = 10 or fewer).
- The image field uses a temporary browser preview URL. When the backend exists, upload the file and save the returned URL.
- Layout uses flexbox only.
