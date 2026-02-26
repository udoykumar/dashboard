import React from "react";
import { Link } from "react-router";

const UserCard = ({ user }) => {
  console.log(user);
  return (
    <Link
      to={`user/${user.id}`}
      className=" flex gap-10 items-center justify-between  bg-white rounded-2xl  px-4 py-3 active:scale-95"
    >
      <h1 className="font-bold line-clamp-1">{user.name}</h1>
      <h2 className="font-semibold">{user.email}</h2>

      <div>
        <p className="flex items-center gap-3 font-bold">
          <span
            className={`${user.status === "active" ? "bg-green-500 animate-pulse" : "bg-red-500"} h-3 w-3 rounded-full`}
          ></span>
        </p>
      </div>
    </Link>
  );
};

export default UserCard;
