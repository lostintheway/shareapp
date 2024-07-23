import axios from "axios";
import { bulkInsertStockPrices } from "./bulkInsert";
import { sleep, write } from "bun";
import { convertToObjectArray } from "./convertToObjectArray";
import { diffFn } from "../utils/diff";
import { server } from "..";

export async function scrapeJinaLiveMarket(stopCallback: () => boolean) {
  let previousData: any = null;
  while (!stopCallback()) {
    const kathmandyOffsetMinutes = 5 * 60 + 45;
    const kathmandyTime = new Date(
      Date.now() + kathmandyOffsetMinutes * 60 * 1000
    );
    console.log(`Scrape started jina ktm: [${kathmandyTime.toLocaleString()}]`);
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
        if (lastData.content.length < 60) return;
        const stockData = convertToObjectArray(lastData.content);
        const diffData = diffFn(stockData, previousData);
        write("./diff.json", JSON.stringify({ diffData }));

        if (!diffData || diffData.length === 0) {
          console.log("No changes found");
        } else {
          console.log("Changes found, ws publish");

          server.publish("liveltp", JSON.stringify(diffData));
          await bulkInsertStockPrices(diffData);
        }
        previousData = stockData;
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
