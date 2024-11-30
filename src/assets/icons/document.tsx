function DocumentIcon({ width = "65", height = "64", stroke = "#292D32" }) {
      return (
            <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={width}
                  height={height}
                  fill="none"
                  viewBox="0 0 65 64"
            >
                  <path
                        stroke={stroke}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M59.166 26.667V40c0 13.333-5.333 18.667-18.666 18.667h-16C11.166 58.667 5.833 53.333 5.833 40V24c0-13.333 5.333-18.667 18.667-18.667h13.333"
                  ></path>
                  <path
                        stroke={stroke}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M59.166 26.667H48.5c-8 0-10.667-2.667-10.667-10.667V5.333l21.333 21.334z"
                  ></path>
            </svg>
      );
}

export default DocumentIcon;
