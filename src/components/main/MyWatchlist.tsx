import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { TrashIcon } from "@radix-ui/react-icons";

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

  const handleDelete = (item) => {
    const current = localStorage.getItem("my_watchlist");
    if (current) {
      const parsed: string[] = JSON.parse(current);
      const newData = parsed.filter((dat) => dat !== item);
      localStorage.setItem("my_watchlist", JSON.stringify(newData));
      setMyWatchlist(newData);
    }
  };

  return (
    <div className="w-72 mt-8 ">
      <h4>Current List:</h4>
      <ul>
        {myWatchlist.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <Button variant={"ghost"} onClick={() => handleDelete(item)}>
              <TrashIcon />
            </Button>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyWatchlist;
