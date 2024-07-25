import { Elysia } from "elysia";
import { schedule } from "node-cron";
import { scrapeJinaLiveMarket } from "./services/jinaFn";
import { setupGlobalLogging } from "./utils/globalLogger";
import { checkAndRunIfNeeded } from "./utils/checkAndRunIfNeeded";
import { db } from "./db/db";
import { isHoliday, stockPrice } from "./db/schema";
import { asc } from "drizzle-orm";
import { getTodaysPrice } from "./routes/todaysprice";
import { handleOptions } from "./utils/cors";
import { isHolidayFn } from "./services/isHoliday";
import { cors } from "@elysiajs/cors";

setupGlobalLogging();

let isRunning: boolean = false;

async function startScraping(): Promise<void> {
  const isHoli = await isHolidayFn();
  if (isHoli) return;
  if (!isRunning) {
    isRunning = true;
    scrapeJinaLiveMarket(stopScraping);
  }
}

function stopScraping(): boolean {
  isRunning = false;
  return isRunning;
}

// Start scraping at 11 AM, Sunday to Thursday
schedule("15 5 * * 0-4", () => {
  startScraping();
});

schedule("19 5 * * 0-4", () => {
  stopScraping();
  // Stop after 4 hours
});

// Run the check when the program starts
checkAndRunIfNeeded();

export const app = new Elysia()
  .ws("/ws", {
    open: async (ws) => {
      const origin = ws.remoteAddress;
      console.log(`New WebSocket connection from ${origin}`);
      ws.subscribe("liveltp");
      const data = await db
        .select()
        .from(stockPrice)
        .orderBy(asc(stockPrice.symbol));
      ws.send(JSON.stringify(data));
    },
    message: (ws, message) => {
      ws.send(message);
    },
  })
  .use(cors({ origin: true }))
  .get("/", () => "Hello, World!")
  .get("/todaysprice", getTodaysPrice)
  // .options("*", handleOptions)
  .listen(5600);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
