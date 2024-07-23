import { SelectStockData } from "@/db/schema";
import { TransparentBtn } from "./TransparentBtn";
import GlowingDot from "./GlowingDot";

type Props = {
  stockPrices: SelectStockData[];
};
const ShareTable = ({ stockPrices }: Props) => {
  return (
    <div>
      {/* {JSON.stringify(stockPrices[0])} */}
      <table className="">
        <thead>
          <tr>
            <th></th>
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
          {stockPrices.map((stock, index) => (
            <tr className="text-sm text-color-[#909090]" key={index}>
              <td>
                <GlowingDot isGreen />
              </td>
              <td className="">{stock.symbol}</td>
              <td className="">{stock.ltp}</td>
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
