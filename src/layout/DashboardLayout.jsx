import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Login from "../pages/Login";
import { Route, Routes } from "react-router";
import Users from "../pages/Users";
import Analytics from "../pages/Analytics";
import Products from "../pages/Products";
import Dashboard from "../pages/Dashboard";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      <div className="col-span-2">
        <Sidebar />
      </div>

      <div className="col-span-10 p-6">
        <Header />

        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="products" element={<Products />} />
        </Routes>
      </div>
    </div>
  );
};

export default DashboardLayout;
