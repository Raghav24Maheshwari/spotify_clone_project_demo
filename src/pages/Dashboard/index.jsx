import React, { useEffect, useState } from "react";
import { Text } from "../../components";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "../../layout/DashboardHeader"
import MusicCards from "./MusicCards";
const DashboardPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();



  return (
    <>
        <DashboardHeader/>
      {/* <div className="main-container pl-[240px] md:pl-0 pt-[60px]"> */}
        {/* <div className="py-6 px-8 md:px-4">
          <div className="grid grid-cols-2 md:grid-cols-1 gap-x-6">
            <div className="sm:mb-5">
              <div className="flex flex-cols justify-between mb-5">
                <Text className="text-[18px] font-semibold">
                  {" "}
                  {t("common.PostedJobs")}
                </Text>
                  <Text
                    className="underline text-light_blue-900 text-[14px] font-normal cursor-pointer"
                  >
                    {t("common.ShowAll")}
                  </Text>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-4">

              </div>
            </div>
            <div>
              <div className="flex flex-cols justify-between">
                <Text className="text-[18px] font-semibold mb-5 md:mt-[20px]">
                  {t("rolesAndPermission.affiliates")}
                </Text>

                  <Text
                    className="underline text-light_blue-900 text-[14px] font-normal cursor-pointer"
                  >
                    {t("common.ShowAll")}
                  </Text>

              </div>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-4">



              </div>
            </div>
          </div>
        </div> */}
     <MusicCards/>
      {/* </div> */}
    </>
  );
};
export default DashboardPage;