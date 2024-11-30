function MeetingInfoIcon({ stroke = "#475467" }) {
      return (
            <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  fill="none"
                  viewBox="0 0 25 24"
            >
                  <path
                        stroke={stroke}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        strokeWidth="1.5"
                        d="M8.333 2v3M16.333 2v3M3.833 9.09h17M21.333 8.5V17c0 3-1.5 5-5 5h-8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5z"
                  ></path>
                  <path
                        stroke={stroke}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12.329 13.7h.009M8.628 13.7h.009M8.628 16.7h.009"
                  ></path>
            </svg>
      );
}

export default MeetingInfoIcon;
