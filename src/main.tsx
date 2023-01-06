import { ConfigProvider } from "antd";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "antd/dist/reset.css";

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
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
