import ShareViewLayout from "@/components/layouts/ShareViewLayout";
import ShareTable from "@/components/main/ShareTable";
import { db } from "@/db/db";
import { SelectStockData, stockPrice } from "@/db/schema";
import { sql } from "drizzle-orm";
import React, { useEffect, useState } from "react";

const ViewWatchlist = () => {
  const [stockPrices, setStockPrices] = useState<SelectStockData[]>([]);
  useEffect(() => {
    function getStockPrices() {
      const watchList = ["UPPER", "PHCL"];
      db.select()
        .from(stockPrice)
        .where(sql`${stockPrice.symbol} in ${watchList}`)
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

export default ViewWatchlist;
