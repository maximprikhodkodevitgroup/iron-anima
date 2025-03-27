/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "var(--main)",
        white: "#FFFFFF",
        black: "#000000",
        grayscalegrayscale10: "var(--grayscale-grayscale-10)",
        grayscalegrayscale70: "var(--grayscale-grayscale-70)",
      },
      fontFamily: {
        "b-1": "var(--b-1-font-family)",
        "b-3": "var(--b-3-font-family)",
        button: "var(--button-font-family)",
        poppins: "'Poppins', sans-serif",
      },
    },
  },
  plugins: [],
};
