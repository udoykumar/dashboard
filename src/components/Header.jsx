import React from "react";
import { CiBellOn, CiSearch } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import image from "../assets/user_profile.png";
import { FiCommand } from "react-icons/fi";
import { motion } from "motion/react";
const Header = ({ open }) => {
  return (
    <>
      {/* Mobile: show only if open is true */}
      {open && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 0 }}
          className="bg-primary md:hidden rounded-2xl flex flex-col gap-3 px-4 py-4"
        >
          <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-full w-full shadow-sm">
            <CiSearch size={22} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search task"
              className="flex-1 outline-none text-sm"
            />
            <span className="bg-primary text-sm px-2 py-1 rounded-md flex items-center gap-2">
              <FiCommand /> F
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button className="bg-white p-3 rounded-full shadow-sm hover:scale-105 transition">
              <FaRegMessage size={25} />
            </button>
            <button className="bg-white p-3 rounded-full shadow-sm hover:scale-105 transition">
              <CiBellOn size={25} />
            </button>
            <div className="flex items-center gap-2">
              <img
                src={image}
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <div className="flex flex-col">
                <p className="font-medium">Name</p>
                <p className="text-gray-500 text-sm">Email</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Desktop: always visible */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 0 }}
        className="bg-primary hidden lg:flex justify-between items-center px-10 py-4 rounded-2xl"
      >
        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full w-96 shadow-sm">
          <CiSearch size={22} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search task"
            className="flex-1 outline-none text-sm"
          />
          <span className="bg-primary text-sm px-2 py-1 rounded-md flex items-center gap-2">
            <FiCommand /> F
          </span>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="bg-white p-3 rounded-full shadow-sm hover:scale-105 transition">
            <FaRegMessage size={25} />
          </button>

          <button className="bg-white p-3 rounded-full shadow-sm hover:scale-105 transition">
            <CiBellOn size={25} />
          </button>

          {/* Profile */}
          <div className="flex items-center gap-3">
            <img src={image} alt="Profile" className="w-12 h-12 rounded-full" />
            <div className="">
              <p>Name</p>
              <p>Email</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Header;
