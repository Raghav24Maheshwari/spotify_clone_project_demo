import React from "react";
const sizes = {
  xs: "text-[10px] leading-3",
  lg: "text-base",
  s: "text-xs",
  md: "text-sm",
};
const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";
  return (
    <Component
      className={`text-gray-900_02 font-qanelas ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};
export { Text };