import React from "react";
import PropTypes from "prop-types";
const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-lg",
  square: "rounded-none",
};
const variants = {
  fill: {
    deep_orange_50: "bg-deep_orange-50 text-blue_gray-900_01",
    amber_500: "bg-amber-500",
    white_A700: "bg-white-A700 text-gray-900_02",
    red_700: "bg-red-700 text-white-A700",
    light_green_900: "bg-light_green-900",
    blue_100: "bg-blue-100 text-gray-900_02",
    blue_50: "bg-blue-50 text-gray-900_02",
    green_50: "bg-green-50 text-blue_gray-900_01",
    gray_100: "bg-gray-100 text-gray-900_02",
    black_900: "bg-black-900 text-white-A700",
  },
  outline: {
    gray_400: "border-gray-400 !border border-solid text-gray-700_90",
    light_blue_800_01_deep_purple_A100:
      "border border-solid light_blue_800_01_deep_purple_A100_border rounded-[12px]",
    black_900: "border-black-900 border border-solid text-gray-900_02",
  },
  text: {
    teal_400: "text-teal-400",
    gray_700: "text-gray-700 opacity-60",
    red_700: "text-red-700",
    gray_500_01: "text-gray-500_01",
  },
};
const disableds = {
  fill: "!bg-gray-100 text-gray-700",
  outline: "border-b border-gray-400 border-r border-solid text-gray-700",
  text: "!text-gray-700_90",
};
const sizes = {
  "4xl": "h-[52px] px-3",
  sm: "h-[28px] px-1",
  "6xl": "h-[64px] px-[11px]",
  "5xl": "h-[56px] px-[35px] text-sm",
  lg: "h-[40px] px-4 text-sm",
  xl: "h-[40px] px-2",
  "3xl": "h-[44px] px-5 text-sm",
  xs: "h-[24px] px-0.5",
  md: "h-[32px] px-[10px] text-sm",
  "2xl": "h-[40px] px-[35px] text-sm",
};
const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "2xl",
  color = "gray_100",
  disabled = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""} ${
        disabled ? disableds[variant] || "" : ""
      }`}
      {...restProps}
      disabled={disabled ? true : undefined}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};
Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "square", "round"]),
  size: PropTypes.oneOf([
    "4xl",
    "sm",
    "6xl",
    "5xl",
    "lg",
    "xl",
    "3xl",
    "xs",
    "md",
    "2xl",
  ]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "deep_orange_50",
    "amber_500",
    "white_A700",
    "red_700",
    "light_green_900",
    "blue_100",
    "blue_50",
    "green_50",
    "gray_100",
    "black_900",
    "gray_400",
    "gray-100",
    "light_blue_800_01_deep_purple_A100",
  ]),
};
export { Button };