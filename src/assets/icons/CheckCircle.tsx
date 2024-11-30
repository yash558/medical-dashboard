import * as React from "react";
// helper
import { ISvgIcons } from "./helper";

export const CheckCircleIcon: React.FC<ISvgIcons> = ({
  className = "",
  ...rest
}) => (
  <svg
    viewBox="0 0 146 145"
    className={`${className}`}
    stroke="currentColor"
    strokeWidth={2}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke-linecap="round"
    stroke-linejoin="round"
    {...rest}
  >
    <path d="M73.0007 132.917C106.23 132.917 133.417 105.729 133.417 72.4999C133.417 39.2708 106.23 12.0833 73.0007 12.0833C39.7715 12.0833 12.584 39.2708 12.584 72.4999C12.584 105.729 39.7715 132.917 73.0007 132.917Z" />
    <path d="M47.3223 72.5L64.4202 89.5979L98.6764 55.4021" />
  </svg>
);
