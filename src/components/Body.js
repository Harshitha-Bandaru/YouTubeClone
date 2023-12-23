import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import RecommendationList from "./RecommendationList";

const Body = () => {
  return (
    <>
      <Header />

      <div className="flex">
        <Sidebar />
        <div>
          <RecommendationList />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Body;
