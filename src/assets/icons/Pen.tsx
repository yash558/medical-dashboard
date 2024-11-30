import React from "react"

export const PenIcon = ({ className = "", ...rest }) => {
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
        strokeMiterlimit="10"
        d="M8.84 2.4L3.366 8.193c-.206.22-.406.653-.446.953l-.247 2.16c-.087.78.473 1.314 1.247 1.18l2.146-.366c.3-.053.72-.273.927-.5l5.473-5.794c.947-1 1.374-2.14-.1-3.533C10.9.913 9.786 1.4 8.84 2.4zM7.927 3.367A4.084 4.084 0 0011.56 6.8M2 14.666h12"
      ></path>
    </svg>
  )
}
