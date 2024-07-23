import MultiSelect from "@/components/main/MultiSelect";
import React from "react";
import { toast } from "sonner";

type Props = {};

const AddWatchlist = (props: Props) => {
  return (
    <div>
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
          toast(JSON.stringify(data));
        }}
      />
    </div>
  );
};

export default AddWatchlist;
