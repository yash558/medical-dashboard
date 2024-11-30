import * as React from "react";
// helper
import { ISvgIcons } from "./helper";

export const CheckSquareIcon: React.FC<ISvgIcons> = ({
  className = "",
  ...rest
}) => (
  <svg
    viewBox="0 0 25 24"
    className={`${className}`}
    stroke="currentColor"
    strokeWidth={2}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke-linecap="round"
    stroke-linejoin="round"
    {...rest}
  >
    <path d="M9.3335 22H15.3335C20.3335 22 22.3335 20 22.3335 15V9C22.3335 4 20.3335 2 15.3335 2H9.3335C4.3335 2 2.3335 4 2.3335 9V15C2.3335 20 4.3335 22 9.3335 22Z" />
    <path d="M8.0835 11.9999L10.9135 14.8299L16.5835 9.16992" />
  </svg>
);
