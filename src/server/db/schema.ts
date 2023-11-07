// import "server-only";

import { sql } from "drizzle-orm";
import { boolean, pgTable, serial, text } from "drizzle-orm/pg-core";

export const todos = pgTable("todos", {
  id: serial("id").primaryKey(),
  user_id: text("user_id").notNull(),
  title: text("title").notNull(),
  is_done: boolean("is_done").notNull().default(false),
  created_at: text("created_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updated_at: text("updated_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});
