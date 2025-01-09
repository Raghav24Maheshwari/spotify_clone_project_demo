import { STORAGE } from "../common/LocalVaribale";
import addDeleteGetLocalStorage from "../prototype/addDeleteGetLocalStorage";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
const CommonRoutes = () => {
  const userAccess = addDeleteGetLocalStorage(STORAGE?.USER_TOKEN, {}, "get");
  var isUserFirstLogin = localStorage.getItem("userLoginFirstTime") || false;
  // Retrieve the intended URL from local storage
  const intendedURL = localStorage.getItem("intendedURL");
  const returnUrl = (url) => {
    localStorage.removeItem("intendedURL");
    return url;
  };
  return (
    <>
      {!userAccess ? (
        <Outlet />
      ) : isUserFirstLogin ? (
        <Navigate
          to={returnUrl(intendedURL ? intendedURL : "/update-profile")}
        />
      ) : (
        <Navigate to={returnUrl(intendedURL ? intendedURL : "/dashboard")} />
      )}
    </>
  );
};
export default CommonRoutes;