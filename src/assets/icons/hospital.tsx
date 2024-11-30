function HospitalIcon({ className = "", strokeWidth = "", ...rest }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 40 40"
      stroke="currentColor"
      className={className}
      strokeWidth={strokeWidth}
      {...rest}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M3.333 36.667h33.334M28.333 3.333H11.667C6.667 3.333 5 6.316 5 10v26.666h30V10c0-3.684-1.667-6.667-6.667-6.667z"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M23.433 25H16.55c-.85 0-1.567.7-1.567 1.567v10.1h10v-10.1A1.54 1.54 0 0023.433 25zM20 10v8.333M15.833 14.167h8.334"
      ></path>
    </svg>
  )
}

export default HospitalIcon
