import React from "react";
import MenuBtn from "./MenuBtn";
import MyNavBar from "./MyNavBar";

const MyHeader = () => {
  return (
    <div className="flex w-full justify-between items-center p-4">
      <MenuBtn />
      <MyNavBar />
      <div className="w-1"></div>
    </div>
  );
};

export default MyHeader;
