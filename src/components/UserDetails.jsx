import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { baseUrl } from "../context/AuthContext";
import axios from "axios";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState("");
  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`${baseUrl}api/users/${id}`);
      setUser(response.data);
    };
    fetchUser();
  }, [id]);
  return (
    <div className="bg-primary  h-screen p-5 mt-3 rounded-2xl r">
      <div className="bg-white p-10 flex flex-col justify-center items-center md:justify-start md:items-start rounded-2xl">
        {" "}
        <p className="text-gray-500 font-bold text-shadow-2xs">{user.name}</p>
        <p className="text-gray-500 font-bold text-shadow-sm text-xl">
          {user.email}
        </p>
        <p
          className={`mt-4 w-20 text-center py-2 rounded-lg cursor-pointer hover:opacity-90  ${user.status === "active" ? "bg-green-200 text-green-600 " : "bg-red-200 text-red-600"} `}
        >
          {user.status}
        </p>
      </div>{" "}
    </div>
  );
};

export default UserDetails;
