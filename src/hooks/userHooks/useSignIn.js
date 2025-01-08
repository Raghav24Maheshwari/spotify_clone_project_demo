import { useState } from "react";
import { validateEmail, validatePassword } from "../../utils/helper/validation";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { API_ROUTES } from "../../common/Enum";
import globalRequest from "../../prototype/globalRequest";
import { changeLoader } from "../../redux/reducers/loader";
import { setSnackbar } from "../../redux/reducers/snackbar";
import addDeleteGetLocalStorage from "../../prototype/addDeleteGetLocalStorage";
import { STORAGE } from "../../common/LocalVaribale";
export const useSignIn = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signInErrors, setSignInError] = useState(null);
  const handleErrors = (data) => {
    let error = false;
    let errObj = { ...data };
    if (!validateEmail(data?.email)) {
      errObj.emailError = t("errorMessages.invalidEmailAddress");
      error = true;
    }
    // Validate password
    if (!validatePassword(data?.password)) {
      errObj.passwordError = t("errorMessages.inValidPassword");
      error = true;
    }
    return { error, errObj };
  };
  const signIn = async (formData) => {
    let { error, errObj } = handleErrors(formData);
    if (error) {
      setSignInError(errObj);
      return;
    } else {
      setSignInError(null);
      let data = {
        email: formData.email,
        password: formData.password,
      };
      dispatch(changeLoader(true));
      try {
        const res = await globalRequest(
          API_ROUTES?.SIGN_IN,
          "post",
          data,
          {},
          false
        );
        if (res?.message === "Success") {
          addDeleteGetLocalStorage(STORAGE.USER_TOKEN,res.data.token,"add","single");
          dispatch(
            setSnackbar({
              isOpen: true,
              message: t("common.loginSuccessful"),
              state: "success",
            })
          );
          navigate("/dashboard");
        }
      } catch (err) {
        console.error("error", err);
        dispatch(
          setSnackbar({
            isOpen: true,
            message: err?.response?.data?.message,
            state: "error",
          })
        );
      } finally {
        dispatch(changeLoader(false));
      }
    }
  };

  return { signIn, signInErrors };
};
