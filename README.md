# Admin Dashboard

A full-stack admin panel for managing products and users. Built with React on the frontend, an Express REST API on the backend, and PostgreSQL (Neon) with Drizzle ORM for data.

## Features

- **Products:** view, add, update and delete products with validation
- **Users:** view, add, update and delete users, with roles, active/inactive status and unique emails
- **Dashboard UI:** responsive layout with loading and error states, plus Orders and Settings sections (structure only)

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** PostgreSQL (Neon), Drizzle ORM, Drizzle Kit

## API

| Resource | Endpoints |
| -------- | --------- |
| Products | `GET/POST /api/apple/products`, `GET/PATCH/DELETE /api/apple/products/:id` |
| Users    | `GET/POST /api/acc/user`, `PATCH/DELETE /api/acc/user/:id` |

## Getting Started

```bash
git clone <repo-url>
cd Admin-Dashboard
```

**Backend**

```bash
cd Backend
npm install
```

Create `Backend/.env`:

```env
PORT=3000
DATABASE_URL=your_postgresql_connection_string
```

```bash
npx drizzle-kit migrate
npm run dev
```

**Frontend**

```bash
cd Frontend
npm install
npm run dev
```

## Roadmap

JWT authentication, role-based authorization, search and pagination, image upload, order management, deployment.

## Author

Sohaib Nadeem
