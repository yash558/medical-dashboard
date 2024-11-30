export const DocumentDownloadIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="16"
      fill="none"
      viewBox="0 0 17 16"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.5 7.333v4L7.833 10M6.5 11.333L5.165 10"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.167 6.667V10c0 3.334-1.333 4.667-4.666 4.667h-4c-3.334 0-4.667-1.333-4.667-4.667V6c0-3.333 1.333-4.667 4.667-4.667h3.333"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.167 6.667h-2.666C10.5 6.667 9.834 6 9.834 4V1.333l5.333 5.334z"
      ></path>
    </svg>
  )
}
