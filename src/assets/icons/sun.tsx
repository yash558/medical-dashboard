const SunIcon = ({ className = "", strokeWidth = "2", ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      fill="none"
      viewBox="0 0 64 64"
      stroke="currentColor"
      className={className}
      {...rest}
      strokeWidth={strokeWidth}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M32 49.333c9.573 0 17.334-7.76 17.334-17.333 0-9.573-7.76-17.333-17.334-17.333-9.573 0-17.333 7.76-17.333 17.333 0 9.573 7.76 17.333 17.333 17.333z"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M51.04 51.04l-.347-.347m0-37.386l.347-.347-.347.347zM12.96 51.04l.346-.347-.346.347zM32 5.547v-.214.214zm0 53.12v-.214.214zM5.546 32h-.213.213zm53.12 0h-.213.213zm-45.36-18.693l-.346-.347.346.347z"
      ></path>
    </svg>
  )
}

export default SunIcon
