import { SelectStockData } from "@/db/schema";
import React from "react";

type Props = {
  stockPrices: SelectStockData[];
};
const ShareTable = ({ stockPrices }: Props) => {
  return (
    <div>
      <table className="">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>LTP</th>
            <th>Chg</th>
            <th>% Chg</th>
            <th>Opening</th>
            <th>Highest</th>
            <th>Low</th>
            <th>Qty</th>
          </tr>
        </thead>
        <tbody>
          {stockPrices.map((stock) => (
            <tr className="text-green-500" key={stock.symbol}>
              <td className="">{stock.symbol}</td>
              <td className="">{stock.ltp}</td>
              <td className="">{stock.pointChange}</td>
              <td className="">{stock.percentChange}</td>
              <td className="">{stock.openPrice}</td>
              <td className="">{stock.highPrice}</td>
              <td className="">{stock.lowPrice}</td>
              <td className="">{stock.volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShareTable;
