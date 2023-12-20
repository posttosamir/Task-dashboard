import React from "react";
import "./main.css";

import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
const Main = () => {
  // throw new Error();

  return (
    <div className="content-wrapper">
      <div className="sidebar-wrapper">
        <Sidebar />
      </div>
      <div className="main-wrapper">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
