import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import * as schema from "./schema";
// const schema = require("./schema");
// Turso DB connection

console.log(import.meta.env.VITE_TURSO_DB_URL);

const turso = createClient({
  url: import.meta.env.VITE_TURSO_DB_URL,
  authToken: import.meta.env.VITE_TURSO_DB_TOKEN,
});

export const db = drizzle(turso, { schema, logger: true });
