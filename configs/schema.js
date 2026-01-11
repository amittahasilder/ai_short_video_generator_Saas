// import { boolean, pgTable, serial, varchar } from "drizzle-orm/pg-core";

// export const Users=pgTable('users', {
//     id:serial('id').primaryKey(),name:varchar('name').notNull(),
//     email:varchar.notNull(),imageUrl:varchar('imageUrl'),
//     subscription:boolean('subscription').default(false)
// })
import { pgTable, serial, varchar, boolean } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),

email: varchar("email", { length: 255 }).notNull().unique(),

  name: varchar("name", { length: 100 }),

  isActive: boolean("is_active").default(true),
});
