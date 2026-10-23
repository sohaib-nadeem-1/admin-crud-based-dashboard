import {
  pgTable,
  serial,
  text,
  numeric,
  integer,
  timestamp
} from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),

  name: text("name").notNull(),

  category: text("category").notNull(),

  price: numeric("price", {
    precision: 10,
    scale: 2
  }).notNull(),

  stock: integer("stock").notNull(),

  description: text("description"),

  image: text("image"),

  createdAt: timestamp("created_at")
    .defaultNow()
    .notNull(),

  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
});