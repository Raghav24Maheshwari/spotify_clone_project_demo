import { jwtDecode } from "jwt-decode";
import addDeleteGetLocalStorage from "../prototype/addDeleteGetLocalStorage";
import { STORAGE } from "./LocalVaribale";
const userToken = addDeleteGetLocalStorage(STORAGE?.USER_TOKEN, {}, "get");
export const decoded = () => {
  let decode = null;
  if (!userToken) {
    decode = null;
  } else {
    decode = jwtDecode(userToken);
  }
  return decode;
};
export const decodedToken = (token) => {
  if (!token) {
    return null;
  } else {
    return jwtDecode(token);
  }
};

