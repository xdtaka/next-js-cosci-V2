<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 7f91e2c (Created new)
import { mysqlTable, primaryKey, int, varchar, decimal } from "drizzle-orm/mysql-core"
// import { sql } from "drizzle-orm"

export const product = mysqlTable("product", {
	id: int({ unsigned: true }).autoincrement().notNull(),
	title: varchar({ length: 255 }).notNull(),
	price: decimal({ precision: 10, scale: 2 }).notNull(),
},
(table) => [
	primaryKey({ columns: [table.id], name: "product_id"}),
<<<<<<< HEAD
=======
=======
import { mysqlTable, primaryKey, int, varchar, decimal, text, boolean, timestamp } from "drizzle-orm/mysql-core"

export const user = mysqlTable("user", {
                    id: varchar('id', { length: 36 }).primaryKey(),
                    name: text('name').notNull(),
 email: varchar('email', { length: 255 }).notNull().unique(),
 emailVerified: boolean('email_verified').$defaultFn(() => false).notNull(),
 image: text('image'),
 createdAt: timestamp('created_at').$defaultFn(() => /* @__PURE__ */ new Date()).notNull(),
 updatedAt: timestamp('updated_at').$defaultFn(() => /* @__PURE__ */ new Date()).notNull()
                });

export const session = mysqlTable("session", {
                    id: varchar('id', { length: 36 }).primaryKey(),
                    expiresAt: timestamp('expires_at').notNull(),
 token: varchar('token', { length: 255 }).notNull().unique(),
 createdAt: timestamp('created_at').notNull(),
 updatedAt: timestamp('updated_at').notNull(),
 ipAddress: text('ip_address'),
 userAgent: text('user_agent'),
 userId: varchar('user_id', { length: 36 }).notNull().references(()=> user.id, { onDelete: 'cascade' })
                });

export const account = mysqlTable("account", {
                    id: varchar('id', { length: 36 }).primaryKey(),
                    accountId: text('account_id').notNull(),
 providerId: text('provider_id').notNull(),
 userId: varchar('user_id', { length: 36 }).notNull().references(()=> user.id, { onDelete: 'cascade' }),
 accessToken: text('access_token'),
 refreshToken: text('refresh_token'),
 idToken: text('id_token'),
 accessTokenExpiresAt: timestamp('access_token_expires_at'),
 refreshTokenExpiresAt: timestamp('refresh_token_expires_at'),
 scope: text('scope'),
 password: text('password'),
 createdAt: timestamp('created_at').notNull(),
 updatedAt: timestamp('updated_at').notNull()
                });

export const verification = mysqlTable("verification", {
                    id: varchar('id', { length: 36 }).primaryKey(),
                    identifier: text('identifier').notNull(),
 value: text('value').notNull(),
 expiresAt: timestamp('expires_at').notNull(),
 createdAt: timestamp('created_at').$defaultFn(() => /* @__PURE__ */ new Date()),
 updatedAt: timestamp('updated_at').$defaultFn(() => /* @__PURE__ */ new Date())
                });

export const product = mysqlTable("product", {
    id: int({ unsigned: true }).autoincrement().notNull(),
    title: varchar({ length: 255 }).notNull(),
    price: decimal({ precision: 10, scale: 2 }).notNull(),
},
(table) => [
    primaryKey({ columns: [table.id], name: "product_id"}),
>>>>>>> 2af5971 (Initial commit)
>>>>>>> 7f91e2c (Created new)
]);
