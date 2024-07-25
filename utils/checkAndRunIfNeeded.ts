import { startScraping, stopScraping } from "..";

// Check if the current time is within the scraping window when the program first runs
export function checkAndRunIfNeeded() {
  // Get current UTC time
  const now = new Date();

  // Kathmandu is UTC+5:45
  const kathmandyOffsetMinutes = 5 * 60 + 45;

  // Create a new Date object for Kathmandu time
  const kathmandyTime = new Date(
    now.getTime() + kathmandyOffsetMinutes * 60 * 1000
  );

  const day = kathmandyTime.getUTCDay(); // 0-6, where 0 is Sunday
  const hour = kathmandyTime.getUTCHours();
  const minute = kathmandyTime.getUTCMinutes();

  // If it's Sunday to Thursday (0-4) and between 11 AM and 3 PM
  if (day >= 0 && day <= 4 && hour >= 11 && hour < 15) {
    const minutesUntilStop = (15 - hour) * 60 - minute;
    console.log(
      `Current time in Kathmandu is ${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}. ` +
        `It's within scraping window. Starting now and running for ${minutesUntilStop} minutes.`
    );

    startScraping();
  } else {
    console.log(
      `Current time in Kathmandu is ${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}. ` +
        `It's outside scraping window. Waiting for next scheduled run.`
    );
  }
}
