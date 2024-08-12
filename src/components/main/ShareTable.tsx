import { SelectStockData } from "@/db/schema";
import { TransparentBtn } from "./TransparentBtn";
import GlowingDot from "./GlowingDot";
import { SortDownIcon, SortUpIcon } from "@/assets/icons/SortIcons";
import { useState } from "react";

type Props = {
  stockPrices: SelectStockData[];
};
const ShareTable = ({ stockPrices }: Props) => {
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });

  const data = [
    {
      timestamp: "2024-08-08T14:59:35.000Z",
      symbol: "ACLBSL",
      ltp: 1230.1,
      ltv: 223,
      pointChange: -63.9,
      percentChange: -4.94,
      openPrice: 1295,
      highPrice: 1295,
      lowPrice: 1221,
      avgTradedPrice: 1238.29,
      volume: 10131,
      previousClosing: 1294,
    },
  ];

  // const sortedData = [...stockPrices].sort((a, b) => {
  //   if (a[sortConfig.key] < b[sortConfig.key]) {
  //     return sortConfig.direction === "ascending" ? -1 : 1;
  //   }
  //   if (a[sortConfig.key] > b[sortConfig.key]) {
  //     return sortConfig.direction === "ascending" ? 1 : -1;
  //   }
  //   return 0;
  // });

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const getIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "ascending" ? (
        <SortUpIcon />
      ) : (
        <SortDownIcon />
      );
    }
    return (
      <span className="flex flex-col">
        <SortUpIcon />
        <SortDownIcon />
      </span>
    );
  };
  return (
    <div>
      {/* {JSON.stringify(sortConfig)} */}
      <table className="">
        <thead>
          <tr>
            <th></th>
            <th onClick={() => requestSort("symbol")}>
              <span>Symbol {getIcon("symbol")}</span>
            </th>
            <th onClick={() => requestSort("ltp")}>
              <span> LTP {getIcon("ltp")} </span>
            </th>
            <th onClick={() => requestSort("chg")}>
              <span> Chg {getIcon("chg")} </span>
            </th>
            <th onClick={() => requestSort("percentageChg")}>
              <span>% Chg {getIcon("percentageChg")}</span>
            </th>
            <th onClick={() => requestSort("opening")}>
              <span>Opening {getIcon("opening")}</span>
            </th>
            <th onClick={() => requestSort("highest")}>
              <span>Highest {getIcon("highest")}</span>
            </th>
            <th onClick={() => requestSort("low")}>
              <span> Low {getIcon("low")} </span>
            </th>
            <th onClick={() => requestSort("qty")}>
              <span> Qty {getIcon("qty")} </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {stockPrices &&
            stockPrices?.map((stock, index) => (
              <tr className="text-sm text-color-[#909090]" key={index}>
                <td></td>
                <td className="flex items-center gap-3">
                  <GlowingDot
                    isGreen={
                      stock.percentChange !== null && stock.percentChange > 0
                        ? true
                        : false
                    }
                  />
                  {stock.symbol}
                </td>
                <td
                  className={
                    "font-semibold " +
                    (stock.percentChange !== null && stock.percentChange > 0
                      ? "text-green-500"
                      : "text-red-500")
                  }
                >
                  {stock.ltp}
                </td>
                <td className="">{stock.pointChange}</td>
                <td className="">
                  {stock.percentChange !== null && (
                    <TransparentBtn
                      myColor={stock.percentChange > 0 ? "green" : "red"}
                    >
                      {stock.percentChange}
                    </TransparentBtn>
                  )}
                </td>
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
