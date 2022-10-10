/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      mainColor: "#54ab35",
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
