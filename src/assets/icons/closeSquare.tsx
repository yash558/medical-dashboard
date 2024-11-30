function CloseSquareIcon({ className = "", ...rest }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      fill="none"
      viewBox="0 0 21 21"
      className={`${className}`}
      stroke="currentColor"
      {...rest}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8.392 12.608l4.716-4.716M13.108 12.608L8.392 7.892M8.25 18.583h5c4.166 0 5.833-1.666 5.833-5.833v-5c0-4.167-1.666-5.833-5.833-5.833h-5c-4.167 0-5.833 1.666-5.833 5.833v5c0 4.166 1.666 5.833 5.833 5.833z"
      ></path>
    </svg>
  )
}

export default CloseSquareIcon
