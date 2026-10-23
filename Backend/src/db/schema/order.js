import {
  pgTable,
  serial,
  integer,
  numeric,
  pgEnum,
  timestamp,
} from "drizzle-orm/pg-core";

import { users } from "../schema/user";

export const orderStatus = pgEnum("order_status", [
  "Pending",
  "Paid",
  "Delivered",
  "Cancelled",
]);

export const orders = pgTable("orders", {
  id: serial("id").primaryKey(),

  userId: integer("user_id")
    .notNull()
    .references(() => users.id),

  totalAmount: numeric("total_amount", {
    precision: 10,
    scale: 2,
  }).notNull(),

  status: orderStatus("status")
    .default("Pending")
    .notNull(),

  createdAt: timestamp("created_at")
    .defaultNow()
    .notNull(),

  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull(),
});