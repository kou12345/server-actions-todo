import { drizzle, type PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

const sql = postgres(process.env.DATABASE_URL!, {
  ssl: "require",
  max: 1,
});

const db: PostgresJsDatabase = drizzle(sql);

await migrate(db, { migrationsFolder: "drizzle" });
console.log("migration completed");
