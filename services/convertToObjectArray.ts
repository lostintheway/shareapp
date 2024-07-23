import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import type { StockPricePost } from "../db/schema";

dayjs.extend(customParseFormat);

export function convertToObjectArray(content: string | ""): StockPricePost[] {
  const lines = content.split("\n");
  const dataLines = lines.filter(
    (line) => line.startsWith("| ") && line.includes(" | ")
  );

  let timestamp: Date | null = null;

  const match = content.match(/As of (.+)/);
  //   if (match) {
  //     const dateString = match[1];

  //     const formats = [
  //       "YYYY-MM-DDTHH:mm:ss.SSSSSS",
  //       "YYYY-MM-DD THH:mm:ss.SSSSSS",
  //       "YYYY-MM-DDTHH:mm:ss.SSS",
  //       "YYYY-MM-DD THH:mm:ss.SSS",
  //       "YYYY-MM-DDTHH:mm:ss",
  //       "YYYY-MM-DD THH:mm:ss",
  //       "YYYY-MM-DD HH:mm:ss",
  //       "MM/DD/YYYY HH:mm:ss",
  //       "DD-MM-YYYY HH:mm:ss",
  //       "YYYY-MM-DD",
  //       "MM/DD/YYYY",
  //       "DD-MM-YYYY",
  //     ];

  //     for (const format of formats) {
  //       const parsedDate = dayjs(dateString, format, true);
  //       if (parsedDate.isValid()) {
  //         timestamp = parsedDate.format("YYYY-MM-DD HH:mm:ss");
  //         break;
  //       }
  //     }
  //   }

  if (!match) {
    console.error("Invalid timestamp format");
    return [];
  }

  timestamp = new Date(match?.[1] ?? "");

  if (timestamp === null) {
    console.error("Invalid timestamp format");
    return [];
  }

  return dataLines
    .map((line) => {
      const [
        _,
        sn,
        symbol,
        ltp,
        ltv,
        pointChange,
        percentChange,
        openPrice,
        highPrice,
        lowPrice,
        avgTradedPrice,
        volume,
        previousClosing,
      ] = line.split("|").map((item) => item.trim());

      if (symbol.replace(/[^-]/g, "") === symbol) {
        return null;
      }

      const parseValue = (value: string, parseFunc: (v: string) => number) => {
        if (value === "") return undefined;
        const parsed = parseFunc(value.replace(",", "").replace("\\", ""));
        return isNaN(parsed) ? null : parsed;
      };

      const obj: StockPricePost = {
        timestamp: timestamp?.toISOString(),
        symbol,
        ltp: parseValue(ltp, parseFloat),
        ltv: parseValue(ltv, parseInt),
        pointChange: parseValue(pointChange, parseFloat),
        percentChange: parseValue(percentChange, parseFloat),
        openPrice: parseValue(openPrice, parseFloat),
        highPrice: parseValue(highPrice, parseFloat),
        lowPrice: parseValue(lowPrice, parseFloat),
        avgTradedPrice: parseValue(avgTradedPrice, parseFloat),
        volume: parseValue(volume, parseInt),
        previousClosing: parseValue(previousClosing, parseFloat),
      };

      return obj;
    })
    .filter(
      (item): item is StockPricePost =>
        item !== null && Object.keys(item).length > 1
    )
    .filter((item) => Object.values(item).every((value) => value !== null))
    .filter((item) => !item.symbol.includes("Symbol"));
}
