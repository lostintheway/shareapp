import { ConfigProvider } from "antd";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "antd/dist/reset.css";
import { IsOpenProvider } from "./store/IsOpenContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 2,
          colorPrimary: "#f48924",
        },
      }}
    >
      <IsOpenProvider>
        <App />
      </IsOpenProvider>
    </ConfigProvider>
  </React.StrictMode>
);
