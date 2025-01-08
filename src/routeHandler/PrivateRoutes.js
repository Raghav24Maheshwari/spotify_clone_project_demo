import { STORAGE } from "../common/LocalVaribale";
import addDeleteGetLocalStorage from "../prototype/addDeleteGetLocalStorage";
import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
const PrivateRoutes = () => {
  const userAccess = addDeleteGetLocalStorage(STORAGE?.USER_TOKEN, {}, "get");
  const location = useLocation();
  if (!userAccess) {
    // Save the intended URL
    localStorage.setItem("intendedURL", location.pathname);
    return <Navigate to="/login" />;
  }
  return <Outlet /> ;
};
export default PrivateRoutes;