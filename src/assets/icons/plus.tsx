const PlusIcon = ({ stroke = "#005BB2", className = "", ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="white"
      viewBox="0 0 14 14"
      className={className}
      {...rest}
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.67"
        d="M7 1.167v11.666M1.167 7h11.666"
      ></path>
    </svg>
  )
}

export default PlusIcon
