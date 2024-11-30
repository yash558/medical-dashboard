const ArrowLeftIcon = ({ stroke = "#475467", width = "20", height = "20" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M12.5 16.6l-5.434-5.433a1.655 1.655 0 010-2.334L12.5 3.4"
      ></path>
    </svg>
  )
}

export default ArrowLeftIcon
