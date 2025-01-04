import React, { useEffect, useState } from "react";
import {
  Button,
  Img,
  Input,
  InputLabels,
  InputPassword,
  Text,
} from "../../components";

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import CommonImage from "../../components/CommonImage";
import { useSignIn } from "../../hooks/userHooks/useSignIn";
// import ForgotPassword from "../ForgotPassword";

const LoginPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [disabledBtn, setDisabledBtn] = useState(false);
  const { signIn, signInErrors } = useSignIn();
  const [formData,setFormData] = useState({
    email:'',
    emailError:'',
    password:'',
    passwordError:''
  })
const handleLogin = ()=>{
  signIn(formData);
}

useEffect(()=>{
     if(signInErrors){
      setFormData(signInErrors);
     }
},[signInErrors])
useEffect(()=>{
  if(formData?.email && formData?.password){
    setDisabledBtn(false);
  }
  else{
    setDisabledBtn(true)
  }
},[formData?.email,formData?.password])
  return (
    <>
      <div className="flex md:flex-col justify-center items-center w-full">
        <div className="w-[50%] md:w-full md:min-h-[440px]">
          <div className="absolute top-3 left-4 md:relative md:left-0 md:mb-10 md:pl-4">
            <Img
              src="images/Spotify_Full_Logo_RGB_Green.png"
              alt="Logo"
              className="w-[100px] object-cover"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="w-full max-w-[427px] sm:px-4 flex flex-col justify-center items-start">
              <div className="">
                <Text className="text-[24px] font-semibold mb-[8px]">
                  {t("common.login")}
                </Text>
                <Text className="text-[14px] font-normal mb-[24px]">
                  {t("common.loginToExploreOurFeatures")}
                </Text>
              </div>
              <div className="w-full">
                <InputLabels
                  className="flex flex-col gap-1 items-start justify-start w-full"
                  labelText={t("common.emailAddress")}
                />
                <Input
                  className="fill"
                  size="small"
                  value={formData?.email}
                  error={formData?.emailError}
                  onChange={(email)=>{
                    setFormData({...formData,email,emailError:''})
                  }}
                />
              </div>
              <div className="w-full">
                <InputLabels
                  className="flex flex-col gap-1 items-start justify-start w-full"
                  labelText={t("common.password")}
                />
                <InputPassword
                  className="fill"
                  size="small"
                  error={formData?.passwordError ? true : false}
                  errorText={formData?.passwordError}
                  password={formData?.password}
                    setPassword={(value) => {
                      let password = value;
                      setFormData({ ...formData, password, passwordError: "" });
                    }}
                />
              </div>
              <Button
                className="cursor-pointer font-semibold text-center text-sm w-full"
                shape="round"
                color="black_900"
                size="xl"
                variant="fill"
                disabled={disabledBtn}
                onClick={handleLogin}
              >
                {t("common.login")}
              </Button>
              <div className="text-center mt-[16px] w-full">
                <Text
                  size="lg"
                  className="!text-light_blue-900 text-center underline font-semibold mb-[24px] cursor-pointer"
                  onClick={()=>{navigate("/forgot-password")}}
                >
                  {t("common.forgotPassword")}
                </Text>

                <Text>
                  {t("common.don'tHaveAnAccount")}{" "}
                  <span className="!text-light_blue-900 text-center underline font-semibold text-[14px] cursor-pointer"
                  onClick={()=>{navigate("/sign-up")}}
                  >
                    {t("common.signUp")}
                  </span>
                </Text>
              </div>
            </div>
          </div>
        </div>
        <CommonImage />
      </div>
    </>
  );
};
export default LoginPage;
