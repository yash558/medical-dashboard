import * as React from "react";
// helper
import { ISvgIcons } from "./helper";

export const MouseSquareIcon: React.FC<ISvgIcons> = ({
  className = "",
  ...rest
}) => (
  <svg
    viewBox="0 0 24 24"
    className={`${className}`}
    stroke="currentColor"
    stroke-width="1.5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke-linecap="round"
    stroke-linejoin="round"
    {...rest}
  >
    <path d="M22 12V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H12" />
    <path d="M20.9599 17.8405L19.3299 18.3905C18.8799 18.5405 18.5199 18.8905 18.3699 19.3505L17.8199 20.9805C17.3499 22.3905 15.3699 22.3605 14.9299 20.9505L13.0799 15.0005C12.7199 13.8205 13.8099 12.7205 14.9799 13.0905L20.9399 14.9405C22.3399 15.3805 22.3599 17.3705 20.9599 17.8405Z" />
  </svg>
);
