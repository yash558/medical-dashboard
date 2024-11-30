function OtherAppsIcon({ stroke = "#005BB2" }) {
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
                        strokeWidth="1.5"
                        d="M31 17.27v-4.04c0-1.59-.64-2.23-2.23-2.23h-4.04c-1.59 0-2.23.64-2.23 2.23v4.04c0 1.59.64 2.23 2.23 2.23h4.04c1.59 0 2.23-.64 2.23-2.23zM19.5 17.52v-4.54c0-1.41-.64-1.98-2.23-1.98h-4.04c-1.59 0-2.23.57-2.23 1.98v4.53c0 1.42.64 1.98 2.23 1.98h4.04c1.59.01 2.23-.56 2.23-1.97zM19.5 28.77v-4.04c0-1.59-.64-2.23-2.23-2.23h-4.04c-1.59 0-2.23.64-2.23 2.23v4.04c0 1.59.64 2.23 2.23 2.23h4.04c1.59 0 2.23-.64 2.23-2.23z"
                  ></path>
                  <path
                        stroke={stroke}
                        strokeLinecap="round"
                        strokeWidth="1.5"
                        d="M23.5 26.5h6M26.5 29.5v-6"
                  ></path>
            </svg>
      );
}

export default OtherAppsIcon;
