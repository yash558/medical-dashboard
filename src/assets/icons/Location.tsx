export const LocationIcon = ({ className = "", ...rest }) => {
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
        strokeWidth="1.5"
        d="M12 13.43a3.12 3.12 0 100-6.24 3.12 3.12 0 000 6.24z"
      ></path>
      <path
        stroke="#005BB2"
        strokeWidth="1.5"
        d="M3.62 8.49c1.97-8.66 14.8-8.65 16.76.01 1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 01-7.21 0c-2.76-2.66-5.92-6.97-4.77-12.05z"
      ></path>
    </svg>
  )
}
