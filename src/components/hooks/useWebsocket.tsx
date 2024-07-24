import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { SelectStockData } from "@/db/schema";
import { isLive } from "@/utils/isLive";
import { BASE_URL } from "@/api/api";
import { toast } from "sonner";
import { isMessageBodyOk } from "@/utils/isMessageBodyOk";

export const useWebsocket = () => {
  const [stockPrices, setStockPrices] = useState<SelectStockData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const retryCount = 2;
  const retryRef = useRef(0);
  let timeoutId: NodeJS.Timeout;
  let ws: WebSocket | undefined;

  useEffect(() => {
    const connectWebSocket = () => {
      ws = new WebSocket(`wss://${BASE_URL}/liveltp`);

      const onOpen = () => {
        console.log("WebSocket connection established");
        setIsLoading(false);
        retryRef.current = 0; // Reset retry count on successful connection
      };

      const onError = () => {
        if (retryRef.current < retryCount) {
          retryRef.current++;
          console.log(`Retrying connection... Attempt ${retryRef.current}`);
          setTimeout(connectWebSocket, 1000 * retryRef.current); // Exponential backoff
        } else {
          console.log("Max retries reached. Falling back to HTTP request.");
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

        if (isMessageBodyOk(newData)) {
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
        } else {
          console.error("Received data does not match expected format:");
        }
      };

      ws.onclose = (err) => {
        console.log(
          `WebSocket closed with code, reason: ${JSON.stringify(err)}`
        );
        console.log("WebSocket connection closed");
        setIsLoading(true);
        setStockPrices([]);

        // Attempt to reconnect on unexpected closure
        if (retryRef.current < retryCount) {
          console.log("Unexpected closure. Attempting to reconnect...");
          onError(); // This will trigger the retry logic
        } else {
          console.log(
            "Max retries reached after unexpected closure. Falling back to HTTP request."
          );
          getTodaysPrice();
        }
      };
    };

    function getTodaysPrice() {
      axios
        .get(BASE_URL + "/todaysprice")
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
      // toast("at get todays price");
      getTodaysPrice();
    } else {
      // toast("at connect websocket");
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
