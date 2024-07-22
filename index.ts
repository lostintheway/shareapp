import { schedule } from "node-cron";
import { scrapeJinaLiveMarket } from "./services/jinaFn";

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
