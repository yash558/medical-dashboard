const ManageAppointmentIcon: React.FC<{ stroke: string }> = ({ stroke = "#005BB2" }) => {
      return (
            <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="42"
                  height="42"
                  fill="none"
                  viewBox="0 0 42 42"
            >
                  <path
                        stroke={stroke}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        strokeWidth="1.5"
                        d="M17 11v3M25 11v3M12.5 18.09h17M30 17.5V26c0 3-1.5 5-5 5h-8c-3.5 0-5-2-5-5v-8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5z"
                  ></path>
                  <path
                        stroke={stroke}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20.995 22.7h.01M17.294 22.7h.01M17.294 25.7h.01"
                  ></path>
            </svg>
      );
}

export default ManageAppointmentIcon;
