import { schedule } from "node-cron";
import { scrapeJinaLiveMarket } from "./services/jinaFn";
import { setupGlobalLogging } from "./utils/globalLogger";
import { checkAndRunIfNeeded } from "./utils/checkAndRunIfNeeded";
import { serve } from "bun";
import { db } from "./db/db";
import { stockPrice } from "./db/schema";
import { asc } from "drizzle-orm";
import { getTodaysPrice } from "./routes/todaysprice";
import { handleOptions } from "./utils/cors";

setupGlobalLogging();

let isRunning: boolean = false;

export function startScraping(): void {
  if (!isRunning) {
    isRunning = true;
    scrapeJinaLiveMarket(stopScraping);
  }
}

export function stopScraping(): boolean {
  isRunning = false;
  return isRunning;
}

// Start scraping at 11 AM, Sunday to Thursday
schedule("0 11 * * 0-4", () => {
  startScraping();
  // Stop after 4 hours
  setTimeout(stopScraping, 4 * 60 * 60 * 1000);
});

// Run the check when the program starts ...
checkAndRunIfNeeded();

export const server = serve({
  port: 5600,
  fetch(req, server) {
    if (server.upgrade(req)) {
      return; // Do not return a Response
    }
    // Handle OPTIONS requests for CORS preflight
    // if (req.method === "OPTIONS") {
    //   return handleOptions();
    // }
    // if (req.method === "GET") {
    //   return getTodaysPrice(req);
    // }
    return new Response("Upgrade failed", { status: 500 });
  },
  websocket: {
    async open(ws) {
      const origin = ws.remoteAddress;

      // List of allowed origins
      // const allowedOrigins = [
      //   "sushilsampangrai.com",
      //   "tunnel.sushilsampangrai.com",
      //   "localhost:5173",
      //   "127.0.0.1:3202",
      // ];

      // // Check if the origin is allowed
      // if (!allowedOrigins.some((allowed) => origin.includes(allowed))) {
      //   console.log(`Rejected WebSocket connection from ${origin}`);
      //   ws.close(1008, "Origin not allowed");
      //   return;
      // }

      console.log(`New WebSocket connection from ${origin}`);
      ws.subscribe("liveltp");
      const data = await db
        .select()
        .from(stockPrice)
        .orderBy(asc(stockPrice.symbol));
      ws.send(JSON.stringify(data));
    },
    message(ws, msg) {
      ws.send(msg);
    },
  },
});
