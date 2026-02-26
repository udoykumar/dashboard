import React from "react";
import { useAppContext } from "../context/AuthContext";

import Overview from "../components/Overview";
import AnalyticsChart from "../components/AnalyticsChart";
import Products from "./Products";
import Users from "./Users";

const Dashboard = () => {
  return (
    <div className="bg-primary mt-3 p-4 rounded-2xl">
      <p className="font-bold text-4xl py-3 ">Dashboard</p>
      <div className="space-y-2">
        <Overview />
        <div className="lg:flex ">
          <AnalyticsChart />
          <Users />
        </div>
        <Products />
      </div>
    </div>
  );
};

export default Dashboard;
