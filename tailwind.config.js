/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        openSans: "Open Sans",
        merriWeather: "Merriweather Sans",
      },
      spacing: {
        main: "1029px",
      },
      maxWidth: {
        main: "1029px",
      },
      screens: {
        lg: "1070px",
      },
    },
  },
  plugins: [],
};
