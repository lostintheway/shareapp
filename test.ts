import { schedule } from "node-cron";

let isRunning: boolean = false;
let intervalId: NodeJS.Timeout | null | Timer = null;

export async function fnAsync(): Promise<void> {
  setTimeout(() => {
    console.log("hello from async fn");
  }, 2000);
}

export async function startScraping(): Promise<void> {
  const isHoli = false;
  if (isHoli) return;
  if (!isRunning) {
    isRunning = true;
    intervalId = setInterval(async () => {
      // a simple sample async fn
      await fnAsync();
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

console.log(new Date());

// Start scraping at 8:50 AM every day
schedule("54 8 * * *", async () => {
  console.log("Schedule started");
  await startScraping();
});

schedule("* * * * *", async () => {
  console.log("Current time: " + new Date());
});

// Stop scraping at 8:51 AM every day
schedule("55 8 * * *", () => {
  console.log("Schedule stopped");
  stopScraping();
});
