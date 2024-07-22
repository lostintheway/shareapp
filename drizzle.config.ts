import type { Config } from "drizzle-kit";

export default {
  dialect: "sqlite",
  schema: "./db/schema.ts",

  driver: "turso",
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_DATABASE_AUTH_TOKEN,
  },
  out: "./drizzle",
} satisfies Config;
