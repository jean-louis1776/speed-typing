/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/**/*.{ts,js,tsx,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.yellow,
      }
    },
  },
  plugins: [],
}

