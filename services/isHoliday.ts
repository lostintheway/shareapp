import { desc } from "drizzle-orm";
import { db } from "../db/db";
import { isHoliday } from "../db/schema";

function convertDatesToArray(dates: { date: string }[]): string[] {
  return dates.map((item) => item.date);
}

function getTodaysDateInKathmandu() {
  const date = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Kathmandu",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const [month, day, year] = date.split("/");

  return `${year}-${month}-${day}`;
}

export async function isHolidayFn(): Promise<boolean> {
  let holiday = false;
  const todaysDate = getTodaysDateInKathmandu();
  try {
    const data = await db
      .select()
      .from(isHoliday)
      .orderBy(desc(isHoliday.date));

    const dates = convertDatesToArray(data);

    if (dates.includes(todaysDate)) {
      holiday = true;
    }
  } catch (error) {
    console.log(error);
  } finally {
    return holiday;
  }
}
