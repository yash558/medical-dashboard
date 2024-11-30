export const SettingIcon = ({ className = "", ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M22 6.5h-6M6 6.5H2M10 10a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM22 17.5h-4M8 17.5H2M14 21a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
      ></path>
    </svg>
  )
}
