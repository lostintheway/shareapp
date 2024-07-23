import { useState, useEffect } from "react";
import axios from "axios";
import { SelectStockData } from "@/db/schema";
import { isLive } from "@/utils/isLive";

export const useWebsocket = () => {
  const [stockPrices, setStockPrices] = useState<SelectStockData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const retryCount = 2;
  let retry = 0;
  let timeoutId: NodeJS.Timeout;
  let ws: WebSocket | undefined;

  useEffect(() => {
    const connectWebSocket = () => {
      ws = new WebSocket("wss://localhost:5600/liveltp");

      const onOpen = () => {
        console.log("WebSocket connection established");
        setIsLoading(false);

        // Clear any existing timeout
        clearTimeout(timeoutId);

        // Set a new timeout for the WebSocket
        timeoutId = setTimeout(() => {
          ws?.close();
        }, 3000); // 4 seconds
      };

      const onError = () => {
        if (retry < retryCount) {
          retry++;
          connectWebSocket();
        } else {
          getTodaysPrice();
        }
      };

      ws.onopen = onOpen;
      ws.onerror = () => {
        clearTimeout(timeoutId);
        onError();
      };

      ws.onmessage = (event) => {
        clearTimeout(timeoutId);
        const newData = JSON.parse(event.data);
        console.log({ newData });

        setStockPrices((prevData) => {
          const newDataMap = prevData.reduce(
            (map, data) => map.set(data.symbol, data),
            new Map<string, SelectStockData>()
          );
          newData.forEach((newData: SelectStockData) => {
            newDataMap.set(newData.symbol, newData);
          });
          return Array.from(newDataMap.values());
        });

        // Set a new timeout for the next WebSocket message
        timeoutId = setTimeout(() => {
          ws?.close();
        }, 3000); // 4 seconds
      };

      ws.onclose = () => {
        clearTimeout(timeoutId);
        console.log("WebSocket connection closed");
        setIsLoading(true);
        setStockPrices([]);
        onError();
      };
    };
    function getTodaysPrice() {
      axios
        .get("http://localhost:5600/todaysprice")
        .then((res) => {
          setStockPrices(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
    if (!isLive()) {
      getTodaysPrice();
    } else {
      connectWebSocket();
    }
    return () => {
      clearTimeout(timeoutId);
      if (ws) {
        ws.close();
      }
      console.log("useWebsocket cleanup");
      setStockPrices([]);
      setIsLoading(true);
    };
  }, []);

  return { isLoading, stockPrices };
};
