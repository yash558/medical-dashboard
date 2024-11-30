/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "report-row": "repeat(2, minmax(0, 324px))",
        "time-slot": "repeat(auto-fill,minmax(70px,1fr))",
        "patient-stats": "repeat(auto-fill,minmax(150px,1fr))",
      },
    },
    screens: {
      xs: "375px",
      // => @media (min-width: 376px) { ... }

      sm: "720px",
      // => @media (min-width: 720px) { ... }

      md: "824px",
      // => @media (min-width: 824px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1440px",
      // => @media (min-width: 1440px) { ... }

      "3xl": "1660px",
      // => @media (min-width: 1660px) { ... }

      "lg-tall": {
        raw: "(min-width: 1024px) and (min-height: 768px)",
      },
      "xl-tall": {
        raw: "(min-width: 1280px) and (min-height: 768px)",
      },
      "2xl-tall": {
        raw: "(min-width: 1440px) and (min-height: 1024px)",
      },
      "3xl-tall": {
        raw: "(min-width: 1660px) and (min-height: 768px)",
      },
    },
  },
  plugins: [],
}
