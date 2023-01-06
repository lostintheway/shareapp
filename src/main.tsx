import React from "react";
import { ConfigProvider } from "antd";

import ReactDOM from "react-dom/client";
import App from "./App";
import "antd/dist/reset.css";
import "./styles/Global.scss";
import "./styles/Common.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 2,
          colorPrimary: "#9370DB",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
