export const CopyIcon = ({ className, ...rest }) => {
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
        stroke="#005BB2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.666 8.6v2.8c0 2.334-.933 3.267-3.266 3.267H4.6c-2.334 0-3.267-.933-3.267-3.266V8.6c0-2.334.933-3.267 3.267-3.267h2.8c2.333 0 3.266.933 3.266 3.267z"
      ></path>
      <path
        stroke="#005BB2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.666 4.6v2.8c0 2.334-.933 3.267-3.266 3.267h-.734V8.601c0-2.334-.933-3.267-3.266-3.267H5.333v-.733c0-2.334.933-3.267 3.267-3.267h2.8c2.333 0 3.266.933 3.266 3.267z"
      ></path>
    </svg>
  )
}
