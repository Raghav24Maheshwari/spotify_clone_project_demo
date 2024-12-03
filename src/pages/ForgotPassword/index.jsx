import React, { useEffect, useState } from "react";
import { Button,Img, Input, InputLabels, Text } from "../../components";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import CommonImage from "../../components/CommonImage";
const ForgotPassword = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  //states
  const [disabledBtn, setDisabledBtn] = useState(false);

  return (
    <>
      <div className="flex md:flex-col justify-center items-center w-full">
        <div className="w-[50%] md:w-full md:min-h-[330px]">
          <div className="absolute top-3 left-4 md:relative md:left-0 md:mb-10 md:pl-4">
            <Img
              src="images/Spotify_Full_Logo_RGB_Green.png"
              alt="Logo"
              className="w-[88px] object-cover"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="w-full max-w-[427px] sm:px-4 flex flex-col justify-center items-start">
              <div className="flex">
                <Img
                  src="images/backArrow.svg"
                  alt="arrow"
                  className="w-[24px] h-[24px] ml-[-8px] cursor-pointer"
                  onClick={() => {
                    navigate("/");
                  }}
                />
                <Text className="text-[24px] font-semibold mb-[8px]">
                  {t("common.forgotPassword")}
                </Text>
              </div>
              <Text className="text-[14px] font-normal mb-[24px]">
                {t(
                  "common.allGoodEnterYourAccountEmailAddressAndWeSendYouALinkToResetYourPassword"
                )}
              </Text>
              <div className="w-full">
                <InputLabels
                  className="flex flex-col gap-1 items-start justify-start w-full"
                  labelText={t("common.emailAddress")}
                />
                <Input
                  className="fill"
                  size="small"
                  value='value'
                  error='error'
                />
              </div>
              <Button
                className="cursor-pointer font-semibold text-center text-sm w-full"
                shape="round"
                color="black_900"
                size="xl"
                variant="fill"
                disabled={disabledBtn}
              >
                {t("common.submit")}
              </Button>
            </div>
          </div>
        </div>
        <CommonImage/>
      </div>
    </>
  );
};
export default ForgotPassword;
