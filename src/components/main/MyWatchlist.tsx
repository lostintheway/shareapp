import React, { useEffect, useState } from "react";

type Props = {
  rerender: boolean;
};

const MyWatchlist = ({ rerender }: Props) => {
  const [myWatchlist, setMyWatchlist] = useState<string[]>([]);
  useEffect(() => {
    const mylist = localStorage.getItem("my_watchlist");
    if (mylist) {
      const parsed = JSON.parse(mylist);
      setMyWatchlist(parsed);
    }
    return () => {};
  }, [rerender]);

  return (
    <div className="w-72 mt-8 ">
      <h4>Current List:</h4>
      <ul>
        {myWatchlist.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyWatchlist;
