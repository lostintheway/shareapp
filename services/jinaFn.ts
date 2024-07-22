import axios from "axios";
import { bulkInsertStockPrices } from "./bulkInsert";
import type { StockPricePost } from "../db/schema";

function convertToObjectArray(content: string | ""): StockPricePost[] {
  const lines = content?.split("\n") ?? [];
  const dataLines = lines?.filter(
    (line) => line.startsWith("| ") && line.includes(" | ")
  );

  let timestamp: string;

  const match = content?.match(/As of (.+)/);
  timestamp = match ? match[1] : "";

  return dataLines.map((line) => {
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

    return {
      timestamp,
      symbol,
      ltp: parseFloat(ltp.replace(",", "")),
      ltv: parseInt(ltv),
      pointChange: parseFloat(pointChange),
      percentChange: parseFloat(percentChange),
      openPrice: parseFloat(openPrice.replace(",", "")),
      highPrice: parseFloat(highPrice.replace(",", "")),
      lowPrice: parseFloat(lowPrice.replace(",", "")),
      avgTradedPrice: parseFloat(avgTradedPrice.replace(",", "")),
      volume: parseInt(volume.replace(",", "")),
      previousClosing: parseFloat(previousClosing.replace(",", "")),
    };
  });
}

export async function scrapeJinaLiveMarket(stopCallback: () => boolean) {
  while (true) {
    console.log("Scrape started jina " + new Date());
    try {
      const response = await axios.get(
        "https://r.jina.ai/https://nepalstock.com/live-market",
        {
          headers: {
            "X-No-Cache": "true",
            "X-Set-Cookie":
              "<cookie-name-1>=<cookie-value>; domain=<cookie-1-domain>, <cookie-name-2>=<cookie-value>; domain=<cookie-2-domain>; Secure",
            "X-Timeout": "15",
            "X-Target-Selector": "tr td",
            "X-Wait-For-Selector": ".table-responsive",
            Accept: "text/event-stream",
          },
        }
      );

      const lines = response.data.split("\n");
      let lastData: any = null;

      lines.forEach((line: string) => {
        if (line.startsWith("data: ")) {
          try {
            const jsonData: { content: string } = JSON.parse(line.slice(6));
            lastData = jsonData;
          } catch (error) {
            console.log("Error parsing JSON:", error);
          }
        }
      });

      if (lastData && typeof lastData === "object" && "content" in lastData) {
        const stockData = convertToObjectArray(lastData.content);
        bulkInsertStockPrices(stockData);
      } else {
        console.log("No data received");
      }
    } catch (error) {
      console.log("Error:", error);
    }
    // Check if we should stop
    if (!stopCallback()) {
      break;
    }
  }
}

module.exports = { scrapeJinaLiveMarket };
