import * as React from "react";

export const LeftArrowWithBorderIcon = ({ className = "", ...rest }) => (
  <svg
    viewBox="0 0 25 25"
    className={`${className}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeMiterlimit="10"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" />
    <path d="M13.26 15.53L9.73999 12L13.26 8.46997" />
  </svg>
);
