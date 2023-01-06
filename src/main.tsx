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
          colorPrimary: "#5A54F9",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
