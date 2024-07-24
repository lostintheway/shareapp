// import { SelectStockData, StockDataGet } from "@/db/schema";

import { toast } from "sonner";

type StockDataGet = {
  symbol: string;
  ltp: number;
  timestamp: string;
  ltv: number;
  pointChange: number;
  percentChange: number;
  openPrice: number;
  highPrice: number;
  lowPrice: number;
  avgTradedPrice: number;
  volume: number;
  previousClosing: number;
};

export function isMessageBodyOk(data: unknown): data is StockDataGet[] {
  //   console.log("data", data);

  if (!Array.isArray(data)) {
    toast("at if is arr");
    return false;
  }

  return data.every(
    (item) =>
      typeof item === "object" &&
      item !== null &&
      "symbol" in item &&
      typeof item.symbol === "string" &&
      "ltp" in item &&
      typeof item.ltp === "number" &&
      "timestamp" in item &&
      typeof item.timestamp === "string" &&
      "ltv" in item &&
      typeof item.ltv === "number" &&
      "pointChange" in item &&
      typeof item.pointChange === "number" &&
      "percentChange" in item &&
      typeof item.percentChange === "number" &&
      "openPrice" in item &&
      typeof item.openPrice === "number" &&
      "highPrice" in item &&
      typeof item.highPrice === "number" &&
      "lowPrice" in item &&
      typeof item.lowPrice === "number" &&
      "avgTradedPrice" in item &&
      typeof item.avgTradedPrice === "number" &&
      "volume" in item &&
      typeof item.volume === "number" &&
      "previousClosing" in item &&
      typeof item.previousClosing === "number"
  );
}
