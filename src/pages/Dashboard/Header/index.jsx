import React, { useState } from "react";
import { Img, Text } from "../../../components";
import PropTypes from "prop-types";
import ChatIcon from "@mui/icons-material/Chat";
import { useTranslation } from "react-i18next";
import { Menu, MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Outlet } from "react-router";
export default function Header() {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <header className="fixed left-0 right-0 top-0 py-3 pl-[272px] pr-8 md:pl-12 md:pr-4 border-gray-200 border-b border-solid bg-white-A700 z-[9]">
        <div className="flex justify-between items-center gap-5">
          <h6 className="text-2xl font-bold text-blue-600">{t("header.spotify")}</h6>
          <div className="flex justify-center items-center gap-5">
            <div
              className="flex gap-2 items-center  min-w-[170px] md:min-w-fit"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Img
                src='images/profile-default.svg'
                alt="circleimage"
                className="h-[32px] w-[32px] ml-2 rounded-[50%]"
              />
              <div className="relative md:hidden">
                <h6 className="!text-blue_gray-900_01">Raghav Maheshwari</h6>
              </div>
            </div>

            <div
              className="relative md:hidden cursor-pointer"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              {" "}
              <ArrowDropDownIcon />
            </div>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              className="mt-3"
            >
              <MenuItem>{t("header.myProfile")}</MenuItem>
              <MenuItem>{t("header.likedMusic")}</MenuItem>
            </Menu>
            <div className="h-[24px] w-[24px] cursor-pointer">
              <ChatIcon />
            </div>
          </div>
        </div>
      </header>
      <Outlet/>
    </>
  );
}
Header.propTypes = {
  title: PropTypes.any,
};
