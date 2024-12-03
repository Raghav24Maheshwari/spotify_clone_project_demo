import React from "react";
import { Button,Img, Text } from "../../components";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
const SignUpSuccessfullyPendingMessage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      <div className="flex md:flex-col justify-center items-center w-full">
        <div className="w-[100%] md:w-full">
          <div className="absolute top-3 left-4 md:relative md:left-0 md:mb-10 md:pl-4">
            <Img
              src="images/Spotify_Full_Logo_RGB_Green.png"
              alt="Logo"
              className="w-[88px] object-cover"
            />
          </div>
          <div className="w-full h-[90vh] sm:px-4 flex flex-col justify-center items-center">
            <div className="max-w-[475px] text-center">
              {/* <Img src="images/Spotify_Full_Logo_RGB_Green.png" className="m-auto" /> */}
              <Img src="images/Pending-Success-Alert.svg" className="m-auto" />
              <Text className="text-[24px] font-semibold mb-[8px] mt-[16px]">
                {t("common.yourAccountHasBeenCreatedSuccessfully")}
              </Text>
              <Text className="text-[14px] font-normal mb-[36px]">
                {t(
                  "common.accountIsUnderReviewByAdministrativeTeamOnceApprovedYouWillBeNotifiedOverRegisteredEmailAddress"
                )}
              </Text>
              <Button
                className="cursor-pointer font-semibold text-center text-sm w-full"
                shape="round"
                color="black_900"
                size="xl"
                variant="fill"
                onClick={() => {
                  navigate("/");
                }}
              >
                {t("common.goToLogin")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUpSuccessfullyPendingMessage;


