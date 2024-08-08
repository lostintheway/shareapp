import MultiSelect from "@/components/main/MultiSelect";
import MyWatchlist from "@/components/main/MyWatchlist";
import { useState } from "react";
import { toast } from "sonner";

const AddWatchlist = () => {
  const [rerender, setRerender] = useState(false);
  return (
    <main className="flex justify-evenly">
      <div>
        <h3>Add to Watchlist</h3>
        <MultiSelect
          items={[
            { id: "1", name: "Item 1" },
            { id: "2", name: "Item 2" },
            { id: "3", name: "Item 3" },
            { id: "4", name: "Item 4" },
            { id: "5", name: "Item 5" },
            { id: "6", name: "Item 6" },
            { id: "7", name: "Item 7" },
          ]}
          handleSelectedItems={(data) => {
            const current = localStorage.getItem("my_watchlist");
            // if (current) {
            //   const parsed = JSON.parse(current);
            //   const newData = new Set([
            //     ...parsed,
            //     ...data.map((dat) => dat.id),
            //   ]);
            //   localStorage.setItem("my_watchlist", JSON.stringify(newData));
            //   setRerender((prev) => !prev);
            //   toast("Success");
            // } else {
            //   const newData = new Set([...data.map((dat) => dat.id)]);
            //   localStorage.setItem("my_watchlist", JSON.stringify(newData));
            //   setRerender((prev) => !prev);
            // }
          }}
        />
      </div>
      <MyWatchlist rerender={rerender} />
    </main>
  );
};

export default AddWatchlist;
