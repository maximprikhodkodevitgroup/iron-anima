/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "var(--black)",
        main: "var(--main)",
      },
      fontFamily: {
        "b-1": "var(--b-1-font-family)",
        "b-2": "var(--b-2-font-family)",
        "b-3": "var(--b-3-font-family)",
        button: "var(--button-font-family)",
        h3: "var(--h3-font-family)",
      },
    },
  },
  plugins: [],
};
