import { useEffect } from "react";

type Props = {
  onPriceUpdate: (price: { symbol: string; price: number }[]) => void;
};

function WebSocketConnection({ onPriceUpdate }: Props) {
  useEffect(() => {
    const socket = new WebSocket("wss://tunnel.libsql.so/ws");

    socket.onopen = () => {
      console.log("WebSocket connection established");
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      onPriceUpdate(data);
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => {
      socket.close();
    };
  }, [onPriceUpdate]);

  return null;
}

export default WebSocketConnection;
