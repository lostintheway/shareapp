import { Elysia } from "elysia";
import { schedule } from "node-cron";
import { scrapeJinaLiveMarket } from "./services/jinaFn";
import { setupGlobalLogging } from "./utils/globalLogger";
import {
  checkAndRunIfNeeded,
  checkIfScrapingWindow,
} from "./utils/checkAndRunIfNeeded";
import { db } from "./db/db";
import { stockPrice } from "./db/schema";
import { asc } from "drizzle-orm";
import { getTodaysPrice } from "./routes/todaysprice";
import { isHolidayFn } from "./services/isHoliday";
import { cors } from "@elysiajs/cors";

setupGlobalLogging();

let isRunning: boolean = false;
let intervalId: NodeJS.Timeout | null | Timer = null;

export async function startScraping(): Promise<void> {
  const isHoli = await isHolidayFn();
  if (isHoli) return;
  if (!isRunning) {
    isRunning = true;
    intervalId = setInterval(async () => {
      await scrapeJinaLiveMarket();
    }, 6000);
  }
}

function stopScraping(): boolean {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
  isRunning = false;
  return isRunning;
}

// Start scraping at 11 AM, Sunday to Thursday
schedule("15 5 * * 0-4", async () => {
  console.log("Schedule started");
  await startScraping();
});

schedule("15 9 * * 0-4", () => {
  console.log("Schedule stopped");
  stopScraping();
});

// Run the check when the program starts
checkAndRunIfNeeded();

// await scrapeJinaLiveMarket();

export const app = new Elysia()
  .ws("/liveltp", {
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
  .get("/islive", async () => {
    const isHoli = await isHolidayFn();
    if (isHoli) return false;
    const checked = checkIfScrapingWindow();
    if (checked.isLive) return true;
    return false;
  })
  .get("/todaysprice", getTodaysPrice)
  .listen(5600);

// console.log(JSON.stringify(() => isRunning));

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
