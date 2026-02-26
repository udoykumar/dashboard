import React from "react";
import { BiMessage } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { GrTasks } from "react-icons/gr";
import { IoAnalyticsOutline } from "react-icons/io5";
import { MdDashboard, MdFeaturedPlayList } from "react-icons/md";
import { Link, NavLink } from "react-router";
import { useAppContext } from "../context/AuthContext";
const menus = [
  { name: "Dashboard", href: "", icon: MdDashboard },
  { name: "Users", href: "users", icon: FiUsers },
  { name: "Analytics", href: "analytics", icon: IoAnalyticsOutline },
  { name: "Products", href: "products", icon: MdFeaturedPlayList },
];

const Sidebar = () => {
  const { logout } = useAppContext();

  return (
    <div className="bg-primary rounded-2xl px-10 h-full flex flex-col justify-between">
      {/* Top Section */}
      <div>
        <p className="text-lg font-bold pt-10">Dashboard</p>

        <div className="flex flex-col gap-4 mt-3">
          <p className="text-lg text-start py-4">MENU</p>

          {menus.map((menu, ind) => {
            const Icon = menu.icon;
            return (
              <NavLink
                key={ind}
                to={menu.href === "" ? "/dashboard" : `/dashboard/${menu.href}`}
                end={menu.href === ""}
                className={({ isActive }) =>
                  `flex gap-3 items-center px-3 py-2 rounded-md transition-all
                   ${
                     isActive
                       ? "bg-black text-white"
                       : "text-text hover:bg-gray-200"
                   }`
                }
              >
                <Icon className="w-5 h-5" />
                <p className="text-lg">{menu.name}</p>
              </NavLink>
            );
          })}
        </div>
      </div>

      {/* Bottom Section */}
      <button
        onClick={logout}
        className="bg-black px-3 py-2 cursor-pointer text-white mb-6 w-full rounded-md"
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
