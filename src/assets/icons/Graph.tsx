import * as React from "react";
// helper
import { ISvgIcons } from "./helper";

export const GraphIcon: React.FC<ISvgIcons> = ({ className = "", ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    stroke="currentColor"
    strokeWidth="1.5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...rest}
  >
    <path d="M3 22H21" />
    <path d="M5.59998 8.37988H4C3.45 8.37988 3 8.82988 3 9.37988V17.9999C3 18.5499 3.45 18.9999 4 18.9999H5.59998C6.14998 18.9999 6.59998 18.5499 6.59998 17.9999V9.37988C6.59998 8.82988 6.14998 8.37988 5.59998 8.37988Z" />
    <path d="M12.7999 5.19043H11.2C10.65 5.19043 10.2 5.64043 10.2 6.19043V18.0004C10.2 18.5504 10.65 19.0004 11.2 19.0004H12.7999C13.3499 19.0004 13.7999 18.5504 13.7999 18.0004V6.19043C13.7999 5.64043 13.3499 5.19043 12.7999 5.19043Z" />
    <path d="M19.9999 2H18.3999C17.8499 2 17.3999 2.45 17.3999 3V18C17.3999 18.55 17.8499 19 18.3999 19H19.9999C20.5499 19 20.9999 18.55 20.9999 18V3C20.9999 2.45 20.5499 2 19.9999 2Z" />
  </svg>
);
