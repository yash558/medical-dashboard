import React from "react"

export const CheckBoxUncheckedIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <rect width="19" height="19" x="0.5" y="0.5" fill="#fff" rx="5.5"></rect>
      <rect width="19" height="19" x="0.5" y="0.5" rx="5.5"></rect>
    </svg>
  )
}
