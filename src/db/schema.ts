import { sqliteTable, text, real, integer } from "drizzle-orm/sqlite-core";

// Define the schema
export const stockPrice = sqliteTable("stock_prices", {
  timestamp: text("timestamp").notNull(),
  symbol: text("symbol").notNull().primaryKey().unique(),
  ltp: real("ltp"),
  ltv: real("ltv"),
  pointChange: real("point_change"),
  percentChange: real("percent_change"),
  openPrice: real("open_price"),
  highPrice: real("high_price"),
  lowPrice: real("low_price"),
  avgTradedPrice: real("avg_traded_price"),
  volume: integer("volume"),
  previousClosing: real("previous_closing"),
});

// module.exports = { stockPrice };
export type InsertStockData = typeof stockPrice.$inferInsert;
export type SelectStockData = typeof stockPrice.$inferSelect;
