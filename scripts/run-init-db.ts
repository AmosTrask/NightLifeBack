import { initDb } from "./init-db";

initDb().then(() => {
  console.log("Database initialized");
  process.exit(0);
});
