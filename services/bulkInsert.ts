import { sql } from "drizzle-orm";
import { db } from "../db/db";
import { stockPrice, type StockPricePost } from "../db/schema";

async function bulkInsertStockPrices(data: StockPricePost[]): Promise<void> {
  try {
    await db
      .insert(stockPrice)
      .values(data)
      .onConflictDoUpdate({
        target: stockPrice.symbol,
        set: {
          timestamp: sql`excluded.timestamp`,
          ltp: sql`excluded.ltp`,
          ltv: sql`excluded.ltv`,
          pointChange: sql`excluded.point_change`,
          percentChange: sql`excluded.percent_change`,
          openPrice: sql`excluded.open_price`,
          highPrice: sql`excluded.high_price`,
          lowPrice: sql`excluded.low_price`,
          avgTradedPrice: sql`excluded.avg_traded_price`,
          volume: sql`excluded.volume`,
          previousClosing: sql`excluded.previous_closing`,
        },
      });

    console.error("Bulk upsert of stock prices successful");
  } catch (error) {
    console.error("Error during bulk upsert of stock prices:", error);
  }
}

export { bulkInsertStockPrices };
