import React from "react"
export const AddCircleIcon = ({ className = "", ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8 14.667c3.666 0 6.666-3 6.666-6.667s-3-6.667-6.666-6.667c-3.667 0-6.667 3-6.667 6.667s3 6.667 6.667 6.667zM5.333 8h5.333M8 10.667V5.334"
      ></path>
    </svg>
  )
}
