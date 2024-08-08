import MenuBtn from "./MenuBtn";
import MyNavBar from "./MyNavBar";
import { Outlet } from "react-router-dom";

const MyHeader = () => {
  return (
    <div className="flex flex-col w-full justify-between items-center px-10">
      <div className="flex justify-between w-full py-5 mb-6">
        <MenuBtn />
        <MyNavBar />
      </div>
      <Outlet />
      {/* <div className="w-1"></div> */}
    </div>
  );
};

export default MyHeader;
