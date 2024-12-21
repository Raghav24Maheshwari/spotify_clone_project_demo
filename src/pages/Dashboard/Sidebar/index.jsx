import React from "react";
// import { Outlet } from "react-router-dom";
import { Button, List, ListItem } from "@mui/material";
import { Img, Text } from "../../../components";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "react-i18next";
import DiamondIcon from '@mui/icons-material/Diamond';
import StarsIcon from '@mui/icons-material/Stars';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HelpIcon from '@mui/icons-material/Help';
import { Image } from "@mui/icons-material";
const Sidebar = () => {
  const { t } = useTranslation();
  return (
    <>
      <div
        className={`sidebar fixed top-[0] left-0 w-[240px] h-screen bg-gray-900 z-[100] text-center flex justify-start items-center flex-col pt-[10px]  px-4`}
      >
        <MenuIcon
          className="collapse-icon absolute right-[-40px] top-[17px] cursor-pointer"
        />
        <div className="flex items-start w-full mb-7">
          <Img
            src='images/Spotify_Full_Logo_RGB_Green.png'
            alt="vector_one"
            className=" h-[32px] cursor-pointer"
          />
        </div>
        <List className="flex flex-col gap-2 pt-0 w-full max-h-[100vh_-_80px]">
          <ListItem>
            <DashboardIcon sx={{ color: '#fff' }}/>
            <span className="text-white-A700 text-[14px] font-normal">
              {t("sidebar.dashboard")}
            </span>
          </ListItem>
            <ListItem>
              <RadioButtonCheckedIcon sx={{ color: '#fff' }}/>
              <span className="text-white-A700 text-[14px] font-normal">
              {t("sidebar.silverPlan")}
              </span>
            </ListItem>
            <ListItem>
              <StarsIcon sx={{ color: '#fff' }}/>
              <span className="text-white-A700 text-[14px] font-normal">
              {t("sidebar.goldenPlan")}
              </span>
            </ListItem>
            <ListItem>
             <DiamondIcon sx={{ color: '#fff' }} />
              <span className="text-white-A700 text-[14px] font-normal">
              {t("sidebar.diamondPlan")}
              </span>
            </ListItem>
          <ListItem>
            <HelpIcon sx={{ color: '#fff' }}/>
            <span className="text-white-A700 text-[14px] font-normal">
              {t("sidebar.help")}
            </span>
          </ListItem>
        </List>
        <div className="mt-auto w-full pb-4">
        <Button
            variants={"outline"}
            className="!p-0 w-full rounded-[12px] relative bg-transparent light_blue_800_01_deep_purple_A100_border mt-2.5"
          >
            <span className="flex items-center justify-center bg-[#111827] rounded-[12px] relative  w-full z-[1] h-[38px] w-[206px] px-6">
              <Img
                src='images/logoutFill.svg'
                alt="navicons"
                className="w-[20px] object-cover"
              />
              <Text className="self-center !text-transparent text-center bg-gradient bg-clip-text my-0 mx-auto">
                {t("sidebar.logout")}
              </Text>
            </span>
          </Button>
        </div>
      </div>
      {/* <Outlet /> */}
    </>
  );
};
export default Sidebar;