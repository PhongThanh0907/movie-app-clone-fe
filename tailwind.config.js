/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: { max: "412px" },
      lt: "992px",
    },
    colors: {
      mainColor: "#54ab35",
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
