import React from "react";
import Header from "./Header";
import SidePanel from "./SidePanel";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex ">
      <SidePanel />
      <div className="flex flex-col relative">
        <Header />
        <div className="p-6 bg-[#f3f4f6] h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
