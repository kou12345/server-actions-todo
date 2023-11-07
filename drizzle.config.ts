import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
  schema: "src/server/db/schema.ts",
  driver: "pg",
  out: "./drizzle",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
} satisfies Config;
