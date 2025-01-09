import React, { useState } from "react";
// import { Outlet } from "react-router-dom";
import { Button, List, ListItem } from "@mui/material";
import { Img, Text } from "../../components";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "react-i18next";
import DiamondIcon from '@mui/icons-material/Diamond';
import StarsIcon from '@mui/icons-material/Stars';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HelpIcon from '@mui/icons-material/Help';
import { Image } from "@mui/icons-material";
import FeedbackIcon from '@mui/icons-material/Feedback';
import { Outlet, useNavigate } from "react-router";
import LogoutDialog from "../../modals/LogoutModal";
const Sidebar = () => {
  const { t } = useTranslation();
  const [isActive,setIsActive] = useState(false);
  const [isActiveLink,setActiveLink] = useState(false);
  const [openDialogBox,setOpenDialogBox] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (link)=>{
    setIsActive(!isActive);
    setActiveLink(link);
    navigate(link);
    }
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
          <ListItem
          className={isActiveLink === '/dashboard' ? "sidebar-a activeLink":"sidebar-a"}
          onClick={()=>handleNavigation('/dashboard')}
          >
            <DashboardIcon sx={{ color: '#fff' }}/>
            <span className="text-white-A700 text-[14px] font-normal">
              {t("sidebar.dashboard")}
            </span>
          </ListItem>
            <ListItem
            className={isActiveLink === '/silverPlan' ? "sidebar-a activeLink":"sidebar-a"}
            onClick={()=>handleNavigation('/silverPlan')}
            >
              <RadioButtonCheckedIcon sx={{ color: '#fff' }}/>
              <span className="text-white-A700 text-[14px] font-normal">
              {t("sidebar.silverPlan")}
              </span>
            </ListItem>
            <ListItem
             className={isActiveLink === '/goldenPlan' ? "sidebar-a activeLink":"sidebar-a"}
             onClick={()=>handleNavigation('/goldenPlan')}
            >
              <StarsIcon sx={{ color: '#fff' }}/>
              <span className="text-white-A700 text-[14px] font-normal">
              {t("sidebar.goldenPlan")}
              </span>
            </ListItem>
            <ListItem
            className={isActiveLink === '/diamondPlan' ? "sidebar-a activeLink":"sidebar-a"}
            onClick={()=>handleNavigation('/diamondPlan')}
            >
             <DiamondIcon sx={{ color: '#fff' }} />
              <span className="text-white-A700 text-[14px] font-normal">
              {t("sidebar.diamondPlan")}
              </span>
            </ListItem>
            <ListItem
            onClick={()=>handleNavigation('/feedback')}
            className={isActiveLink === '/feedback' ? "sidebar-a activeLink":"sidebar-a"}
            >
             <FeedbackIcon sx={{ color: '#fff' }} />
              <span className="text-white-A700 text-[14px] font-normal">
              {t("sidebar.feedback")}
              </span>
            </ListItem>
          <ListItem
          className={isActiveLink === '/help' ? "sidebar-a activeLink":"sidebar-a"}
          onClick={()=>handleNavigation('/help')}
          >
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
            <span className="flex items-center justify-center bg-[#111827] rounded-[12px] relative  w-full z-[1] h-[38px] w-[206px] px-6"
             onClick={() => setOpenDialogBox(true)}
            >
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
      <Outlet />
      {<LogoutDialog
      openDialogBox={openDialogBox} setOpenDialogBox={setOpenDialogBox}
      />}
    </>
  );
};
export default Sidebar;