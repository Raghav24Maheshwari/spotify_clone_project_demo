import axios from "axios";
// import addDeleteGetLocalStorage from "./addDeleteGetLocalStorage";
import { API_KEY, BASE_URL } from "../BaseUrl";
// import { STORAGE } from "common/LocalVariable";
// import { API_ROUTES } from "../common/Enum";
// import { decodedToken } from "common/TokenDecode";
import { useDispatch } from "react-redux";
import { setSnackbar } from "../redux/reducers/snackbar";

const dispatch = useDispatch
/**
 * @description This function is used to call all api
 * global axios request for post get put and delete
 */
const globalRequest = (
   
  url,
  method = "get",
  data = {},
  options = {},
  token = false
) => {
    console.log("INSIDE",BASE_URL, '+' ,url)
    let headers = {
      "x-api-key":API_KEY,
    }

  let sendData = {
    method: method,
    url: BASE_URL + url,
    headers:headers,
    ...options,
  };
  if (data) {
    sendData.data = data;
  }
  return new Promise((resolve, reject) => {
    axios(sendData)
      .then((response) => {
        console.log(" response ")
        if (response?.data?.status === 401) {
            dispatch(
                setSnackbar({
                  isOpen: true,
                  message: "Unauthorized",
                  state: "success",
                })
              );
        }
        resolve(response.data);
      })
      .catch((err) => {
        if (err?.response?.status === 401) {
            dispatch(
                setSnackbar({
                  isOpen: true,
                  message: "Unauthorized",
                  state: "success",
                })
              );
        }
        reject(err);
      });
  });
};
export default globalRequest;