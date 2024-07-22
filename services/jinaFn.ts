import axios from "axios";
import { bulkInsertStockPrices } from "./bulkInsert";
import type { StockPricePost } from "../db/schema";
import { sleep } from "bun";

function convertToObjectArray(content: string | ""): StockPricePost[] {
  const lines = content?.split("\n") ?? [];
  const dataLines = lines?.filter(
    (line) => line.startsWith("| ") && line.includes(" | ")
  );

  let timestamp: string;

  const match = content?.match(/As of (.+)/);
  timestamp = match ? match[1] : "";

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

      // Check if symbol contains only dashes
      if (symbol.replace(/[^-]/g, "") === symbol) {
        return null;
      }

      const obj: any = {
        timestamp: new Date(timestamp)
          .toISOString()
          .slice(0, 19)
          .replace("T", " "),
        symbol,
        ltp: parseFloat(ltp.replace(",", "")) || null,
        ltv: parseInt(ltv) || null,
        pointChange:
          parseFloat(pointChange.replace(",", "").replace("\\", "")) || null,
        percentChange:
          parseFloat(percentChange.replace(",", "").replace("\\", "")) || null,
        openPrice: parseFloat(openPrice.replace(",", "")) || null,
        highPrice: parseFloat(highPrice.replace(",", "")) || null,
        lowPrice: parseFloat(lowPrice.replace(",", "")) || null,
        avgTradedPrice: parseFloat(avgTradedPrice.replace(",", "")) || null,
        volume: parseInt(volume.replace(",", "")) || null,
        previousClosing: parseFloat(previousClosing.replace(",", "")) || null,
      };

      // Filter out keys with null values
      return Object.fromEntries(
        Object.entries(obj).filter(([_, value]) => value !== null)
      ) as StockPricePost;
    })
    .filter(
      (item): item is StockPricePost =>
        item !== null && Object.keys(item).length > 1
    );
}

export async function scrapeJinaLiveMarket(stopCallback: () => boolean) {
  while (!stopCallback()) {
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
    sleep(2000);
  }
  console.log("Scraping stopped as per stopCallback");
}
