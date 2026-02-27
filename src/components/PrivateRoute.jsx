import React from "react";
import { Navigate } from "react-router";
import { useAppContext } from "../context/AuthContext";
import Loading from "./loading";

const PrivateRoute = ({ children }) => {
  const { token, loading } = useAppContext();
  if (loading) {
    return <Loading />;
  }
  if (!token) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default PrivateRoute;
