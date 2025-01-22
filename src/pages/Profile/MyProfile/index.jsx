import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Box, Typography } from "@mui/material";
import { Img } from "../../../components";
import addDeleteGetLocalStorage from "../../../prototype/addDeleteGetLocalStorage";
import { decodedToken } from "../../../common/TokenDecode";
import { capitalizeFirstLetter, getMusicCategoryById } from "../../../common/HelperFunction";
import { STORAGE } from "../../../common/LocalVaribale";
function MyProfile() {
  const { t } = useTranslation();
  const userToken = addDeleteGetLocalStorage(STORAGE.USER_TOKEN, {}, "get");
  let decoded = decodedToken(userToken)


  

  return (
    <>
      <div className="flex md:flex-col justify-center itemms-start w-full gap-6 md:p-[18px]">
        <div className="w-[708px] md:w-full md:mt-6 mb-5">
          <div className="min-h-[100vh] md:h-auto md:py-8 border-gray-400 border rounded p-5">
            <div className="w-full flex flex-col lg:flex-row gap-6">
              <div className="w-full mb-8  justify-center aligns-center">
                  <label htmlFor="profileImage" className="cursor-pointer">
                    <Img
                      src={"images/profile-default.svg"}
                      alt="Profile"
                      className="w-[120px] h-[120px] object-cover rounded-[50%]"
                    />
                  </label>
              </div>
              <Box className="bg-white border border-[#E5E7EB] p-5 rounded-lg w-full lg:max-w-[50%] max-w-full">
                <Typography
                  component={"h6"}
                  variant="h6"
                  className="text-md font-semibold mb-6"
                >
                  Personal details
                </Typography>
                <Box className="flex justify-between items-center bg-backgroundLight rounded-sm p-[18px] mb-6">
                  <p className="text-sm text-gray">{t("common.firstName")}</p>
                  <p className="text-sm text-black font-semibold">{capitalizeFirstLetter(decoded.firstName)}</p>
                </Box>{" "}
                <Box className="flex justify-between items-center bg-backgroundLight rounded-sm p-[18px] mb-6">
                  <p className="text-sm text-gray">{t("common.lastName")}</p>
                  <p className="text-sm text-black font-semibold">{capitalizeFirstLetter(decoded.lastName)}</p>
                </Box>
                <Box className="flex justify-between items-center bg-backgroundLight rounded-sm p-[18px] mb-6">
                  <p className="text-sm text-gray">
                    {t("common.emailAddress")}
                  </p>
                  <p className="text-sm text-black font-semibold">
                    {decoded.email}
                  </p>
                </Box>
                <Box className="flex justify-between items-center bg-backgroundLight rounded-sm p-[18px] mb-6">
                  <p className="text-sm text-gray">
                    {t("common.mobileNumber")}
                  </p>
                  <p className="text-sm text-black font-semibold">
                   {decoded.phone}
                  </p>
                </Box>
                <Box className="flex justify-between items-center bg-backgroundLight rounded-sm p-[18px] mb-6">
                  <p className="text-sm text-gray">
                    {t("common.musicCategory")}
                  </p>
                  <p className="text-sm text-black font-semibold">{decoded.musicCategory}</p>
                </Box>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MyProfile;
