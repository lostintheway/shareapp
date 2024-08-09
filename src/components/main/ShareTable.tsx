import { SelectStockData } from "@/db/schema";
import { TransparentBtn } from "./TransparentBtn";
import GlowingDot from "./GlowingDot";
import { SortDownIcon } from "@/assets/icons/SortIcons";

type Props = {
  stockPrices: SelectStockData[];
};
const ShareTable = ({ stockPrices }: Props) => {
  return (
    <div>
      <table className="">
        <thead>
          <tr>
            <th></th>
            <th>
              <span>
                Symbol <SortDownIcon />
              </span>
            </th>
            <th>
              <span>LTP</span>
            </th>
            <th>
              <span>Chg</span>
            </th>
            <th>
              <span>% Chg</span>
            </th>
            <th>
              <span>Opening</span>
            </th>
            <th>
              <span>Highest</span>
            </th>
            <th>
              <span>Low</span>
            </th>
            <th>
              <span>Qty</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {stockPrices &&
            stockPrices?.map((stock, index) => (
              <tr className="text-sm text-color-[#909090]" key={index}>
                <td>
                  <GlowingDot
                    isGreen={
                      stock.percentChange !== null && stock.percentChange > 0
                        ? true
                        : false
                    }
                  />
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
