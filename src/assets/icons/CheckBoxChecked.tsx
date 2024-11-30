import React from "react"

export const CheckBoxCheckedIcon = ({ className, fill, stroke, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
      className={className}
      {...rest}
    >
      <rect width="19" height="19" x="0.5" y="0.5" fill={fill} rx="5.5"></rect>
      <rect
        width="19"
        height="19"
        x="0.5"
        y="0.5"
        stroke={stroke}
        rx="5.5"
      ></rect>
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14.667 6.5l-6.416 6.417L5.334 10"
      ></path>
    </svg>
  )
}
