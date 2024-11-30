import * as React from "react";
// helper
import { ISvgIcons } from "./helper";

export const MailIcon: React.FC<ISvgIcons> = ({ className = "", ...rest }) => (
  <svg
    viewBox="0 0 17 16"
    className={`${className}`}
    stroke="currentColor"
    fill="none"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M11.8335 13.6666H5.16683C3.16683 13.6666 1.8335 12.6666 1.8335 10.3333V5.66659C1.8335 3.33325 3.16683 2.33325 5.16683 2.33325H11.8335C13.8335 2.33325 15.1668 3.33325 15.1668 5.66659V10.3333C15.1668 12.6666 13.8335 13.6666 11.8335 13.6666Z"
      strokeMiterlimit="10"
    />
    <path
      d="M11.8332 6L9.7465 7.66667C9.05983 8.21333 7.93317 8.21333 7.2465 7.66667L5.1665 6"
      strokeMiterlimit="10"
    />
  </svg>
);
