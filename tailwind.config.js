/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          DEFAULT: "#0f9aff",
          light: "#D1FAE5",
        },
      },
      textShadow: {
        md: "2px 2px 4px rgb(0 0 0 / 45%);",
      },
      backgroundImage: {
        "gradient-to-b":
          "linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#232533 68%,#232533 100%);",
      },
    },
  },
  plugins: [
    require("tailwindcss-textshadow"),
    require("tailwind-scrollbar"),
    require("tailwind-scrollbar-hide"),
  ],
  variants: {
    scrollbar: ["rounded"],
  },
};
