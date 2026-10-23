import { pgTable, serial, text, pgEnum, timestamp } from "drizzle-orm/pg-core";

export const enumRole = pgEnum("role", ["Admin", "Customer"]);
export const enumStatus = pgEnum("status", ["Active", "Inactive"]);


export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").unique().notNull(),
  role: enumRole("role").notNull(),
  status: enumStatus("status").default("Active").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});


