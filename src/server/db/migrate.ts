import { migrate } from "drizzle-orm/libsql/migrator";
import { db } from ".";

// import "server-only";

migrate(db, { migrationsFolder: "src/server/db/migrations" })
  .then(() => {
    console.log("Migration complete");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Migration failed", err);
    process.exit(1);
  });
