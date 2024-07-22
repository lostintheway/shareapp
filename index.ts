import { schedule } from "node-cron";
import { scrapeJinaLiveMarket } from "./services/jinaFn";
import { setupGlobalLogging } from "./utils/globalLogger";

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

// Check if the current time is within the scraping window when the program first runs
function checkAndRunIfNeeded() {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();

  // If it's Sunday to Thursday (0-4) and between 11 AM and 3 PM
  if (day >= 0 && day <= 4 && hour >= 11 && hour < 15) {
    const minutesUntilStop = (15 - hour) * 60 - now.getMinutes();
    console.log(
      `Current time is within scraping window. Starting now and running for ${minutesUntilStop} minutes.`
    );

    startScraping();
    setTimeout(stopScraping, minutesUntilStop * 60 * 1000);
  } else {
    console.log(
      "Current time is outside scraping window. Waiting for next scheduled run."
    );
  }
}

// Run the check when the program starts
checkAndRunIfNeeded();
