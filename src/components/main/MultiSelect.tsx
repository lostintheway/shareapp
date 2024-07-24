import React, { useState } from "react";
import { Button } from "../ui/button";

type Stonks = {
  id: string;
  name: string;
};

type Props = {
  items: Stonks[];
  handleSelectedItems: (items: Stonks[]) => void;
};

const MultiSelect = ({ items, handleSelectedItems }: Props) => {
  const [selectedItems, setSelectedItems] = useState<Stonks[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSelect = (item: Stonks) => {
    setSelectedItems((prevSelected) => {
      if (prevSelected.find((i) => i.id === item.id)) {
        return prevSelected.filter((i) => i.id !== item.id);
      } else {
        return [...prevSelected, item];
      }
    });
  };

  const filteredItems = items
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, 5);

  return (
    <div className="w-80">
      <input
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={(e) => handleSearch(e)}
        className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-primary"
      />
      <ul className="space-y-2 mb-2">
        {filteredItems.map((item) => (
          <li
            key={item.id}
            className="flex items-center space-x-2 p-2 border rounded-md hover:bg-gray-100 cursor-pointer"
            onClick={() => handleSelect(item)}
          >
            <input
              type="checkbox"
              checked={selectedItems.some((i) => i.id === item.id)}
              readOnly
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <span>{item.name}</span>
          </li>
        ))}
      </ul>

      <Button onClick={() => handleSelectedItems(selectedItems)}>Submit</Button>
      <div className="mt-4">
        <h3 className="font-semibold">Selected Items:</h3>
        <ul className="list-disc list-inside">
          {selectedItems.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MultiSelect;
