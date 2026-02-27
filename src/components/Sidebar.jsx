import { BiLogOut, BiMenu } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import { NavLink } from "react-router";
import { useAppContext } from "../context/AuthContext";
import { motion } from "motion/react";
const menus = [{ name: "Dashboard", href: "", icon: MdDashboard }];

const Sidebar = ({ open, setOpen }) => {
  const { logout } = useAppContext();

  return (
    <>
      <motion.div
        whileHover={{ scale: 0.9 }}
        className="lg:hidden flex justify-between items-center bg-primary p-4"
      >
        <button onClick={() => setOpen(!open)}>
          <BiMenu size={30} />
        </button>
      </motion.div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ x: -200, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          exit={{ x: -200, opacity: 0 }} 
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className="lg:hidden bg-primary p-3 flex gap-4"
        >
          {menus.map((menu, ind) => {
            const Icon = menu.icon;
            return (
              <NavLink
                key={ind}
                to={menu.href === "" ? "/dashboard" : `/dashboard/${menu.href}`}
                end={menu.href === ""}
                className={({ isActive }) =>
                  `flex gap-3 items-center justify-center px-3 py-2 rounded-md transition-all w-20 ${
                    isActive
                      ? "bg-secondary text-white"
                      : "text-text hover:bg-gray-200"
                  }`
                }
                onClick={() => setOpen(false)}
              >
                <Icon className="w-5 h-5" />
              </NavLink>
            );
          })}

          <button
            onClick={logout}
            className="px-3 py-2 cursor-pointer bg-black/90 flex items-center justify-center text-white rounded-md w-20"
          >
            <BiLogOut />
          </button>
        </motion.div>
      )}
      {/* Desktop  */}
      <motion.div
        initial={{ x: -20, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          duration: 2,
        }}
        className="hidden lg:flex lg:flex-col md:h-screen md:bg-primary md:rounded-2xl md:px-6 md:py-10 md:justify-between"
      >
        <div>
          <p className="text-lg font-bold pb-6">Dashboard</p>
          <div className="flex flex-col gap-3">
            {menus.map((menu, ind) => {
              const Icon = menu.icon;
              return (
                <NavLink
                  key={ind}
                  to={
                    menu.href === "" ? "/dashboard" : `/dashboard/${menu.href}`
                  }
                  end={menu.href === ""}
                  className={({ isActive }) =>
                    `flex gap-3 items-center px-3 py-2 rounded-md transition-all ${
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

        <button
          onClick={logout}
          className="bg-black px-3 py-2 cursor-pointer text-white w-full rounded-md flex items-center gap-2 text-lg"
        >
          <BiLogOut />
          Logout
        </button>
      </motion.div>
    </>
  );
};

export default Sidebar;
