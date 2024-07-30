import { startScraping } from "..";

// Check if the kTM day: ${day} time: the scraping window when the program first runs

export const checkIfScrapingWindow = (): {
  day: number;
  hour: number;
  minute: number;
  isLive: boolean;
} => {
  const now = new Date();

  // KTM is UTC+5:45
  const kathmandyOffsetMinutes = 5 * 60 + 45;

  // Create a new Date object for KTM time
  const kathmandyTime = new Date(
    now.getTime() + kathmandyOffsetMinutes * 60 * 1000
  );

  const day = kathmandyTime.getUTCDay(); // 0-6, where 0 is Sunday
  const hour = kathmandyTime.getUTCHours();
  const minute = kathmandyTime.getUTCMinutes();

  const data = {
    day,
    hour,
    minute,
    isLive: false,
  };
  // If it's Sunday to Thursday (0-4) and between 11 AM and 3 PM
  if (day >= 0 && day <= 4 && hour >= 11 && hour < 15) {
    data.isLive = true;
  } else {
    data.isLive = false;
  }
  return data;
};

export function checkAndRunIfNeeded() {
  const { day, hour, minute, isLive } = checkIfScrapingWindow();
  // Get current UTC time
  if (isLive) {
    const minutesUntilStop = (15 - hour) * 60 - minute;
    console.log(
      `KTM Day: ${day} Time: ${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}. ` +
        `It's within scraping window. Starting now and running for ${minutesUntilStop} minutes.`
    );

    startScraping();
  } else {
    console.log(
      `KTM Day: ${day} Time: ${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}. ` +
        `It's outside scraping window. Waiting for next scheduled run.`
    );
  }
}
