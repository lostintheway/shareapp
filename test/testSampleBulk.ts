import { bulkInsertStockPrices } from "../services/bulkInsert";

const sample = [
  {
    timestamp: "2024-07-22 06:48:40",
    symbol: "BNL",
    ltp: 17400,
    ltv: 10,
    pointChange: -101,
    percentChange: -0.58,
    openPrice: 17400,
    highPrice: 17400,
    lowPrice: 17400,
    avgTradedPrice: 17400,
    volume: 10,
    previousClosing: 17501,
  },
  {
    timestamp: "2024-07-22 06:48:40",
    symbol: "CMF2",
    ltp: 10.17,
    ltv: 100,
    pointChange: 0.19,
    percentChange: 1.9,
    openPrice: 10.17,
    highPrice: 10.17,
    lowPrice: 10.17,
    avgTradedPrice: 10.17,
    volume: 100,
    previousClosing: 9.98,
  },
];

bulkInsertStockPrices(sample);
