import { useState,useEffect } from "react";
import {
  validateEmail,
  validatePassword,
  validateName,
} from "../../utils/helper/validation";
import { isValidPhoneNumber } from "react-phone-number-input";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { API_ROUTES } from "../../common/Enum";
import globalRequest from "../../prototype/globalRequest";
import { changeLoader } from "../../redux/reducers/loader";
import { setSnackbar } from "../../redux/reducers/snackbar";
export const useSignUp = (musicCategories) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signUpeErrors, setSignUpError] = useState(null);
  const [musicCategoryName,setMusicCategoryName] = useState([]);
  useEffect(() => {
    const categoryNames = musicCategories?.map((item) => item.id);
    setMusicCategoryName(categoryNames);
  }, [musicCategories]);
  const handleErrors = (data) => {
    let error = false;
    let errObj = { ...data };
   console.log(data?.musicCategory,"music")
   if(musicCategoryName.includes(data?.musicCategory)){
    console.log("musicCategoryName music included")
   }
  //  console.log(musicCategoryName, "musicCategoryName");
  if (data?.musicCategory && !musicCategoryName.includes(data.musicCategory)) {
    errObj.musicCategoryError = t("errorMessages.invalidMusicCategory");
    error = true;
  }
  
    if (!validateName(data?.firstName)) {
      errObj.firstNameError = t("errorMessages.invalidFirstName");
      error = true;
    }
    if (!validateName(data?.lastName)) {
      errObj.lastNameError = t("errorMessages.invalidLastName");
      error = true;
    }
    if (!isValidPhoneNumber(`+${data?.mobileNumber}`)) {
      errObj.mobileNumberError = t("errorMessages.invalidMobileNumber");
      error = true;
    }
    if (!validateEmail(data?.email)) {
      errObj.emailError = t("errorMessages.invalidEmailAddress");
      error = true;
    }
    // Validate password
   if (!validatePassword(data?.password)) {
      errObj.passwordError = t("errorMessages.inValidPasswordFormat");
      error = true;
    }
    // Validate confirm password
    if (data.password !== data.confirmPassword) {
      errObj.confirmPasswordError = t("errorMessages.passwordsDoNotMatch");
      error = true;
    }
    return { error, errObj };
  };
  const signUp = async (formData) => {
    let { error, errObj } = handleErrors(formData);
    if (error) {
      setSignUpError(errObj);
      return;
    } else {
      setSignUpError(null);
      let data = {
        music_category: formData?.musicCategory,
        first_name: formData?.firstName,
        last_name: formData?.lastName,
        email: formData?.email,
        mob_no: formData?.mobileNumber,
        password: formData?.password,
        profileImageUrl:formData.profileImage
      };
      dispatch(changeLoader(true));
      try {
        const res = await globalRequest(
          API_ROUTES?.SIGN_UP,
          "post",
          data,
          {},
          false
        );
        if (res?.message === "Success") {
          dispatch(
            setSnackbar({
              isOpen: true,
              message: t("common.registeredSuccessfully"),
              state: "success",
            })
          );
          navigate("/sign-up-successfully-pending-message");
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

  return { signUp, signUpeErrors };
};
