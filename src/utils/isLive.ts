// get Asia/Kathmandu time and is from sunday to thursday 11am to 3pm else return fals
export const isLive = () => {
  return true;
  // Get the current time in UTC
  const now = new Date();

  // Define the Kathmandu timezone offset (UTC+5:45)
  const kathmanduOffset = 5.75 * 60;

  // Convert the current time to Kathmandu time
  const kathmanduTime = new Date(now.getTime() + kathmanduOffset * 60 * 1000);

  // Get the day of the week (0 - Sunday, 6 - Saturday) and hour
  const dayOfWeek = kathmanduTime.getUTCDay();
  const hour = kathmanduTime.getUTCHours();
  const minutes = kathmanduTime.getUTCMinutes();

  // Check if the current day is between Sunday (0) and Thursday (4)
  const isSundayToThursday = dayOfWeek >= 0 && dayOfWeek <= 4;

  // Check if the current time is between 11 AM and 3 PM
  const isInTimeRange =
    (hour === 5 && minutes >= 45) ||
    (hour > 5 && hour < 9) ||
    (hour === 9 && minutes === 0);

  return isSundayToThursday && isInTimeRange;
};
