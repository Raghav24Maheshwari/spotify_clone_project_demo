import { useState } from "react";
import { validateEmail } from "../../utils/helper/validation";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { API_ROUTES } from "../../common/Enum";
import globalRequest from "../../prototype/globalRequest";
import { changeLoader } from "../../redux/reducers/loader";
import { setSnackbar } from "../../redux/reducers/snackbar";
export const useForgotPassword = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [forgotPasswordErrors, setForgotPasswordError] = useState(null);
  const handleErrors = (data) => {
    let error = false;
    let errObj = { ...data };
    if (!validateEmail(data?.email)) {
      errObj.emailError = t("errorMessages.invalidEmailAddress");
      error = true;
    }
    return { error, errObj };
  };
 const forgotPassword = async (formData) => {
    let { error, errObj } = handleErrors(formData);
    if (error) {
        setForgotPasswordError(errObj);
      return;
    } else {
        setForgotPasswordError(null);
      let data = {
        email: formData.email,
      };
      dispatch(changeLoader(true));
      try {
        const res = await globalRequest(
          API_ROUTES?.forgotPassword,
          "post",
          data,
          {},
          false
        );
        if (res?.message === "Success") {
          dispatch(
            setSnackbar({
              isOpen: true,
              message: t("common.mee"),
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

  return { forgotPassword, forgotPasswordErrors };
};
