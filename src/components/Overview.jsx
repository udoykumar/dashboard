import React from "react";
import { useAppContext } from "../context/AuthContext";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "motion/react";
const Overview = () => {
  const { dashboard, loading } = useAppContext();
  if (loading) {
    return <h1>loading...</h1>;
  }
  const overview = dashboard?.overview || {};
  const { totalUsers, activeUsers, revenue, growth } = overview;
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, delay: 0 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 ">
        <div className=" bg-linear-to-b from-secondary to-secondary-dull p-5 rounded-4xl group hover:shadow-xl transition-all duration-300">
          <div className="flex justify-between ">
            <p className="text-white font-bold text-xl lg:text-2xl">
              TotalUsers
            </p>
            <button className="bg-white rounded-full  p-4">
              <FaArrowRight className="-rotate-45  group-hover:rotate-0 duration-300" />
            </button>
          </div>
          <p className=" font-bold text-white py-5 text-3xl lg:text-4xl ">
            {totalUsers}
          </p>
        </div>
        <div className=" p-5 rounded-4xl group hover:shadow-xl t bg-white transition-all duration-300">
          <div className="flex justify-between ">
            <p className=" font-bold text-xl lg:text-2xl ext-black">
              Active Users
            </p>
            <button className=" rounded-full  p-4 border">
              <FaArrowRight className="-rotate-45  group-hover:rotate-0 duration-300" />
            </button>
          </div>
          <p className=" font-bold  py-5 text-3xl lg:text-4xl ">
            {activeUsers}
          </p>
        </div>
        <div className=" p-5 rounded-4xl group hover:shadow-xl t bg-white transition-all duration-300">
          <div className="flex justify-between ">
            <p className=" font-bold text-xl lg:text-2xl ext-black">Revenue</p>
            <button className=" rounded-full  p-4 border">
              <FaArrowRight className="-rotate-45  group-hover:rotate-0 duration-300" />
            </button>
          </div>
          <p className=" font-bold  py-5 text-3xl lg:text-4xl ">${revenue}</p>
        </div>
        <div className=" p-5 rounded-4xl group hover:shadow-xl t bg-white transition-all duration-300">
          <div className="flex justify-between ">
            <p className=" font-bold text-xl lg:text-2xl ext-black">Growth</p>
            <button className=" rounded-full  p-4 border">
              <FaArrowRight className="-rotate-45  group-hover:rotate-0 duration-300" />
            </button>
          </div>
          <p className=" font-bold  py-5 text-3xl lg:text-4xl ">{growth}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Overview;
