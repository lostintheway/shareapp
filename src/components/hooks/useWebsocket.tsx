import { SelectStockData } from "@/db/schema";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export const useWebsocket = () => {
  const [stockPrices, setStockPrices] = useState<SelectStockData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const ws = new WebSocket("wss://alphalive.sushilsampangrai.com.np/liveltp");

    ws.onopen = () => {
      console.log("WebSocket connection established");
      setIsLoading(false);
    };

    ws.onmessage = (event) => {
      const newData: SelectStockData[] = JSON.parse(event.data);

      setStockPrices((prevData) => {
        const newDataMap = new Map(newData.map((data) => [data.symbol, data]));
        return prevData.map((item) => newDataMap.get(item.symbol) || item);
      });
    };

    ws.onerror = (error) => {
      if (error instanceof Error) {
        toast(`WebSocket error: ${error.message}`);
      }

      setIsLoading(false);
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed");
      setIsLoading(true);
      setStockPrices([]);
    };

    return () => {
      ws.close();

      setIsLoading(false);

      console.log("WebSocket connection closed");
    };
  }, []);

  return { isLoading, stockPrices };
};
