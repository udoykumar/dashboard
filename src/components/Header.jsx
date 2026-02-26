import { CiBellOn, CiSearch } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import image from "../assets/user_profile.png";
const Header = () => {
  return (
    <div className="bg-primary rounded-2xl flex justify-between items-center px-10 py-4">
      <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full w-96 shadow-sm">
        <CiSearch size={22} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search task"
          className="flex-1 outline-none text-sm"
        />
        <span className="bg-primary text-xs px-2 py-1 rounded-md">F</span>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-4">
        <button className="bg-white p-3 rounded-full shadow-sm hover:scale-105 transition">
          <FaRegMessage size={25} />
        </button>

        <button className="bg-white p-3 rounded-full shadow-sm hover:scale-105 transition">
          <CiBellOn size={25} />
        </button>

        {/* profile */}

        <div className="flex items-center gap-3">
          <img src={image} alt="" className="w-15 h-15 rounded-full" />
          <div className="">
            <p>Name</p>
            <p>Email</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
