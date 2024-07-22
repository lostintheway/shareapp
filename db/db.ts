import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

// Turso DB connection
const turso = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_DATABASE_AUTH_TOKEN,
});

const db = drizzle(turso);

export { db };
