import { Box } from "@mui/material";
import React from "react";
import { Img } from "../Img";

const CommonImage = () => {
  return (
    <div className="w-1/2 md:w-full md:mt-6">
      <div className="w-full h-screen md:h-auto">
        <Box className="max-w-full flex-grow">
          <Img
            src="images/joe-rogan-with-spotify-logo-wvt4iuabl622rxql.webp"
            // src="images/spotify-background.webp"
            alt="Logo"
            className="h-screen md:h-auto w-full object-cover"
          />
        </Box>
      </div>
    </div>
  );
};
// https://www.google.com/search?q=spotify+logo+image+for+full+screen+image&sca_esv=a6b879774937f4fb&rlz=1C5CHFA_enIN1102IN1102&sxsrf=ADLYWIIeD1pC88VozxYQHgslf8xcBJiwtA%3A1732617274376&ei=OqRFZ6bFFtbq1e8Px_iM4Qg&ved=0ahUKEwimyq6p5vmJAxVWdfUHHUc8I4wQ4dUDCA8&uact=5&oq=spotify+logo+image+for+full+screen+image&gs_lp=Egxnd3Mtd2l6LXNlcnAiKHNwb3RpZnkgbG9nbyBpbWFnZSBmb3IgZnVsbCBzY3JlZW4gaW1hZ2UyChAhGKABGMMEGAoyChAhGKABGMMEGApI6w9QtwVY5A5wAXgBkAEAmAGKA6ABlgqqAQUyLTIuMrgBA8gBAPgBAZgCA6ACugTCAgoQABiwAxjWBBhHwgIHECMYsAIYJ8ICCBAAGIAEGKIEmAMAiAYBkAYIkgcFMS4wLjKgB6gU&sclient=gws-wiz-serp#vhid=FP0XL_II-yUL_M&vssid=_RqRFZ6LlEeCPvr0Ps5n38Aw_33
export default CommonImage;
