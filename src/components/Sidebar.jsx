import { BiLogOut, BiMenu } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import { NavLink } from "react-router";
import { useAppContext } from "../context/AuthContext";

const menus = [{ name: "Dashboard", href: "", icon: MdDashboard }];

const Sidebar = ({ open, setOpen }) => {
  const { logout } = useAppContext();

  return (
    <>
      <div className="lg:hidden flex justify-between items-center bg-primary p-4">
        <button onClick={() => setOpen(!open)}>
          <BiMenu size={30} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-primary p-4 flex flex-col gap-4">
          {menus.map((menu, ind) => {
            const Icon = menu.icon;
            return (
              <NavLink
                key={ind}
                to={menu.href === "" ? "/dashboard" : `/dashboard/${menu.href}`}
                end={menu.href === ""}
                className={({ isActive }) =>
                  `flex gap-3 items-center justify-center px-3 py-2  rounded-md transition-all ${
                    isActive
                      ? "bg-black text-white"
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
            className=" px-3 py-2 cursor-pointer bg-black flex items-center justify-center  text-white  rounded-full"
          >
            <BiLogOut />
          </button>
        </div>
      )}
      {/* Desktop  */}
      <div className="hidden lg:flex lg:flex-col md:h-screen md:bg-primary md:rounded-2xl md:px-6 md:py-10 md:justify-between">
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
          className="bg-black px-3 py-2 cursor-pointer text-white w-full rounded-md"
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Sidebar;
