import React from "react";
import Header from "../others/Header";
import { Outlet } from "react-router-dom";
import SideNev from "../others/SideNev";
import Home1 from "../others/Home1";
import NavBar2 from "../others/NavBar2";
import { Box } from "@mui/material";
const EmployeeDashboard = () => {
  return (
    <div className="py-16  px-[15rem] min-h-screen bg-[#43b5a0] flex flex-col gap-3 w-[1423px] mt-2">
      <NavBar2 />
      <div className="w-[1423px] bg-white p-4   rounded-3xl  h-[90vh] overflow-y-auto">
      <Outlet />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
