import React from "react";
import { Navigate } from "react-router";
import { useAppContext } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { token, loading } = useAppContext();
  if (loading) {
    return <p>loading...</p>;
  }
  if (!token) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default PrivateRoute;
