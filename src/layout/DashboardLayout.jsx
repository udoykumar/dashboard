import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Route, Routes } from "react-router";
import Products from "../pages/Products";
import Dashboard from "../pages/Dashboard";
import ProductDetails from "../components/ProductDetails";
import UserDetails from "../components/UserDetails";

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
      <div className=" lg:col-span-2 py-4 px-2">
        <Sidebar open={open} setOpen={setOpen} />
      </div>

      <div className=" lg:col-span-10 py-4 px-2 ">
        <Header open={open} />

        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/user/:id" element={<UserDetails />} />
          <Route path="products" element={<Products />} />
        </Routes>
      </div>
    </div>
  );
};

export default DashboardLayout;
