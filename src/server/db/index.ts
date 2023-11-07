import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import "server-only";
import * as schema from "./schema";

console.log("db");

neonConfig.fetchConnectionCache = true;

const sql = neon(process.env.DATABASE_URL as string);

export const db = drizzle(sql, { schema });
