import React from "react";
import MenuBtn from "./MenuBtn";
import MyNavBar from "./MyNavBar";

const MyHeader = () => {
  return (
    <div className="flex w-full justify-between items-center py-4 px-10">
      <MenuBtn />
      <MyNavBar />
      {/* <div className="w-1"></div> */}
    </div>
  );
};

export default MyHeader;
