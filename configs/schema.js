import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const USER_TABLE = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  image : varchar(),
  email: varchar({ length: 255 }).notNull().unique(),
  credits: integer().default(3),
});
