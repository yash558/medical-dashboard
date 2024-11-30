import * as React from "react";
// helper
import { ISvgIcons } from "./helper";

export const CalendarIcon: React.FC<ISvgIcons> = ({
  className = "",
  ...rest
}) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    stroke="currentColor"
    strokeWidth="1.5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeMiterlimit="10"
    {...rest}
  >
    <path d="M9.56006 18V13" />
    <path d="M12 15.5H7" />
    <path d="M8 2V5" />
    <path d="M16 2V5" />
    <path d="M15.8101 3.41992C19.1501 3.53992 20.8401 4.76992 20.9401 9.46992L21.0701 15.6399C21.1501 19.7599 20.2001 21.8299 15.2001 21.9399L9.20008 22.0599C4.20008 22.1599 3.16008 20.1199 3.08008 16.0099L2.94008 9.82992C2.84008 5.12992 4.49008 3.82992 7.81008 3.57992L15.8101 3.41992Z" />
  </svg>
);
