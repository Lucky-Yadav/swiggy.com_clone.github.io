import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Private = ({ children }) => {
    const token = useSelector((state) => state.auth.token);
    console.log(token)

  if (!token) {
      return
    //   <Navigate to={"/"} />;
  }
  return children;
};

export default Private;
