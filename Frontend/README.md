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
    ui/          Modal, StatusBadge, ProductThumb
  pages/         DashboardPage, ProductsPage, PlaceholderPage
  hooks/         useProducts (product state + actions)
  services/      productService (all data access)
  data/          mock products and categories
  utils/         status and price helpers
```

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

Replace the mock code in those functions with `fetch()` and the UI keeps working.

Notes:
- Product status (In Stock / Low Stock / Out of Stock) is calculated from `stock` in `src/utils/product.js` (low stock = 10 or fewer).
- The image field uses a temporary browser preview URL. When the backend exists, upload the file and save the returned URL.
- Layout uses flexbox only.
