import React from "react";
export const EyeSVG = ({ strokeColor = "currentColor", className = "" }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={strokeColor}
      className={className}
    >
      <path
        d="M0.666504 8.00033C0.666504 8.00033 3.33317 2.66699 7.99984 2.66699C12.6665 2.66699 15.3332 8.00033 15.3332 8.00033C15.3332 8.00033 12.6665 13.3337 7.99984 13.3337C3.33317 13.3337 0.666504 8.00033 0.666504 8.00033Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};