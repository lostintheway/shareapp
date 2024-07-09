import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { useState } from "react";

export function MyMenuBar() {
  const [selected, setSelected] = useState("File");

  const menuItems = ["File", "Edit", "View", "Help"];

  return (
    <Menubar className="w-min bg-[#232329]">
      {menuItems.map((item) => (
        <MenubarMenu key={item}>
          <MenubarTrigger
            className="cursor-pointer"
            onClick={() => setSelected(item)}
            style={{
              backgroundColor: selected === item ? "rgb(103, 53, 243)" : "",
              color: selected === item ? "white" : "",
            }}
          >
            {item}
          </MenubarTrigger>
        </MenubarMenu>
      ))}
    </Menubar>
  );
}
