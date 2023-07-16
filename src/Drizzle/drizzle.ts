import { integer, pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';
import { InferModel } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/node-postgres';
import { sql } from "@vercel/postgres";

export const formDataDrizzle =  pgTable("form", {
    FULL_NAME: varchar("FULL_NAME", { length: 255 }).notNull(),
    USER_EMAIL: varchar("USER_EMAIL", { length: 255 }).notNull(),
    PASS_WORD: varchar("PASS_WORD").notNull(),
})
export type typeofformTable = InferModel <typeof formDataDrizzle>
export const db = drizzle(sql);


db.select().from(formDataDrizzle)