import * as React from "react";
// helper
import { ISvgIcons } from "./helper";

export const SpecsIcon: React.FC<ISvgIcons> = ({ className = "", ...rest }) => (
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
    <path d="M10 17.5H14" />
    <path d="M2 17.5V7.5C2 3.5 3 2.5 7 2.5" />
    <path d="M22 17.5V7.5C22 3.5 21 2.5 17 2.5" />
    <path d="M10 15.9104V19.2004C10 21.2004 9.2 22.0004 7.2 22.0004H4.8C2.8 22.0004 2 21.2004 2 19.2004V15.9104C2 13.9104 2.8 13.1104 4.8 13.1104H7.2C9.2 13.1104 10 13.9104 10 15.9104Z" />
    <path d="M22 15.9104V19.2004C22 21.2004 21.2 22.0004 19.2 22.0004H16.8C14.8 22.0004 14 21.2004 14 19.2004V15.9104C14 13.9104 14.8 13.1104 16.8 13.1104H19.2C21.2 13.1104 22 13.9104 22 15.9104Z" />
  </svg>
);
