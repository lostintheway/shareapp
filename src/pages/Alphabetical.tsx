import ShareViewLayout from "@/components/layouts/ShareViewLayout";
import ShareTable from "@/components/main/ShareTable";
import { db } from "@/db/db";
import { SelectStockData, stockPrice } from "@/db/schema";
import React, { useEffect, useState } from "react";

const Alphabetical = () => {
  const [stockPrices, setStockPrices] = useState<SelectStockData[]>([]);

  useEffect(() => {
    function getStockPrices() {
      db.select()
        .from(stockPrice)
        .orderBy(stockPrice.symbol)
        .then((res) => {
          setStockPrices(res);
          console.log(res);
        });
    }

    // Fetch immediately on load
    getStockPrices();

    // Set up interval to fetch every 6 seconds
    const intervalId = setInterval(getStockPrices, 6000);

    // Clean up interval on component unmount
    return () => {
      setStockPrices([]);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <ShareViewLayout>
      <ShareTable stockPrices={stockPrices} />
    </ShareViewLayout>
  );
};

export default Alphabetical;
