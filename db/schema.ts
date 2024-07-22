import type {
  InferInsertModel,
  InferModel,
  InferSelectModel,
} from "drizzle-orm";
import { sqliteTable, text, real, integer } from "drizzle-orm/sqlite-core";

// Define the schema
const stockPrice = sqliteTable("stock_prices", {
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

const isHoliday = sqliteTable("is_holiday", {
  date: text("date").notNull(),
});

const todaysPrice = sqliteTable("todays_price", {
  business_date: text("business_date").notNull(),
  security_id: text("security_id").notNull(),
  symbol: text("symbol").notNull(),
  security_name: text("security_name").notNull(),
  open_price: real("open_price"),
  high_price: real("high_price"),
  low_price: real("low_price"),
  close_price: real("close_price"),
  total_traded_quantity: integer("total_traded_quantity"),
  total_traded_value: real("total_traded_value"),
  previous_day_close_price: real("previous_day_close_price"),
  fifty_two_weeks_high: real("fifty_two_weeks_high"),
  fifty_two_weeks_low: real("fifty_two_weeks_low"),
  last_updated_time: text("last_updated_time"),
  last_updated_price: real("last_updated_price"),
  total_trades: integer("total_trades"),
  average_traded_price: real("average_traded_price"),
  market_capitalization: real("market_capitalization"),
});

export type StockPriceGet = InferSelectModel<typeof stockPrice>;
export type StockPricePost = InferInsertModel<typeof stockPrice>;
export type TodaysPrice = InferModel<typeof todaysPrice>;
export type IsHoliday = InferModel<typeof isHoliday>;

export { stockPrice, todaysPrice, isHoliday };
