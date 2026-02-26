import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { baseUrl, useAppContext } from "../context/AuthContext";
import axios from "axios";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState("");
  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`${baseUrl}api/users/${id}`);
      setUser(response.data);
      console.log(response);
    };
    fetchUser();
  }, [id]);
  console.log(user);
  return (
    <div className="bg-primary  h-screen p-5 mt-3 rounded-2xl flex items-center justify-center">
      <div className="bg-white p-10 w-1/5 flex flex-col justify-center items-center rounded-2xl">
        {" "}
        <p className="text-gray-500 font-bold text-shadow-2xs">{user.name}</p>
        <p className="text-gray-500 font-bold text-shadow-sm text-xl">
          {user.email}
        </p>
        <p
          className={`mt-4 w-20 text-center py-2 rounded-lg  ${user.status === "active" ? "bg-green-200 text-green-600 " : ""} `}
        >
          {user.status}
        </p>
      </div>{" "}
    </div>
  );
};

export default UserDetails;
