
import { useState } from "react";
import { validateEmail,validatePassword,validateName } from "../../utils/helper/validation";
import { isValidPhoneNumber } from "react-phone-number-input";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
export const useSignUp = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [signUpeErrors, setSignUpError] = useState(null);
  const handleErrors = (data) => {
    let error = false;
    let errObj = { ...data };
    if (!data?.firstName) {
      errObj.firstNameError = t("errorMessages.firstNameIsRequired");
      error = true;
    }
    if (!data?.lastName) {
      errObj.lastNameError = t("errorMessages.lastNameIsRequired");
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
    if (!data?.email) {
      errObj.emailError = t("errorMessages.emailIsRequired");
      error = true;
    }
    if (!isValidPhoneNumber(`+${data?.mobileNumber}`)) {
      errObj.mobileNumberError = t("errorMessages.invalidMobileNumber");
      error = true;
    }
    if (!data?.mobileNumber) {
      errObj.mobileNumberError = t("errorMessages.mobileNumberIsRequired");
      error = true;
    }
    if (!validateEmail(data?.email)) {
      errObj.emailError = t("errorMessages.invalidEmailAddress");
      error = true;
    }
    // Validate password
    if (!data.password) {
      errObj.passwordError = t("errorMessages.passwordIsRequired");
      error = true;
    } else if (!validatePassword(data?.password)) {
      errObj.passwordError = t("errorMessages.inValidPasswordFormat");
      error = true;
    }
    // Validate confirm password
    if (!data.confirmPassword) {
      errObj.confirmPasswordError = t(
        "errorMessages.confirmPasswordIsRequired"
      );
      error = true;
    } else if (data.password !== data.confirmPassword) {
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
      navigate("/sign-up-successfully-pending-message")
    }
  };
  return {  signUp, signUpeErrors };
};