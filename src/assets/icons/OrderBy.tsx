import * as React from "react";
// helper
import { ISvgIcons } from "./helper";

export const OrderByIcon: React.FC<ISvgIcons> = ({
  className = "",
  ...rest
}) => (
  <svg
    viewBox="0 0 16 16"
    className={`${className}`}
    stroke="currentColor"
    stroke-width="1.5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-miterlimit="10"
    {...rest}
  >
    <path d="M9.99318 2.33383L13.3398 5.67383" />
    <path d="M9.99316 13.666L9.99316 2.33268" />
    <path d="M6.00684 13.666L2.66017 10.326" />
    <path d="M6.00684 2.33268L6.00684 13.666" />
  </svg>
);
