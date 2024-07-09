import React from "react";

const ShareTable = () => {
  return (
    <div>
      <table className="">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>LTP</th>
            <th>Chg</th>
            <th>% Chg</th>
            <th>Max Price</th>
            <th>Min Price</th>
            <th>Open</th>
            <th>Qty</th>
            <th>Txn</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ALICL</td>
            <td>846.35</td>
            <td>122</td>
            <td>1.33</td>
            <td>849.00</td>
            <td>844.00</td>
            <td>846.00</td>
            <td>1,00,000</td>
            <td>1,00,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ShareTable;
