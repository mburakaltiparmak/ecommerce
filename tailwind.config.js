/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },

    extend: {
      width: {
        1200: "1200px",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        blue1: "#23A6F0",
        blue2: "#8EC2F2",
        blue3: "#2A7CC7",
        red: "#E74040",
        darkblue1: "#252B42",
        gray: "#737373",
        lightgray: "#FAFAFA",
        green: "#2DC071",
        green2: "#23856D",
      },
    },
  },
  plugins: [
    /*require("flowbite/plugin")*/
  ],
};
