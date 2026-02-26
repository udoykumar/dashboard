import React, { useState } from "react";
import { useAppContext } from "../context/AuthContext";

const Users = () => {
  const { users } = useAppContext();
  console.log(users);
  return <div></div>;
};

export default Users;
