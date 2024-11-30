import * as React from "react";
// helper
import { ISvgIcons } from "./helper";

export const ShapesIcon: React.FC<ISvgIcons> = ({
  className = "",
  ...rest
}) => (
  <svg
    viewBox="0 0 60 60"
    className={`${className}`}
    stroke="currentColor"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...rest}
  >
    <path d="M33.5749 37.4996H10.9999C6.44987 37.4996 3.54986 32.6247 5.74986 28.6247L11.5749 18.0246L17.0249 8.09961C19.2999 3.97461 25.2499 3.97461 27.5249 8.09961L32.9999 18.0246L35.6249 22.7996L38.8249 28.6247C41.0249 32.6247 38.1249 37.4996 33.5749 37.4996Z" />
    <path d="M55 38.75C55 47.725 47.725 55 38.75 55C29.775 55 22.5 47.725 22.5 38.75C22.5 38.325 22.525 37.925 22.55 37.5H33.575C38.125 37.5 41.025 32.625 38.825 28.625L35.625 22.8C36.625 22.6 37.675 22.5 38.75 22.5C47.725 22.5 55 29.775 55 38.75Z" />
  </svg>
);
