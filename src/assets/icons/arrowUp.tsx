function ArrowUpIcon({ className, ...rest }) {
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
        strokeWidth="1.5"
        d="M2.72 10.033l4.346-4.346a1.324 1.324 0 011.867 0l4.347 4.346"
      ></path>
    </svg>
  )
}

export default ArrowUpIcon
