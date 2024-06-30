/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Ubuntu"],
      },
      colors: {
        "kamadoor-black": "#21201e",
        "kamadoor-orange": "#e35000",
        "kamadoor-dark-orange": "#963500",
        "kamadoor-light-gray": "#31302E",
        "kamadoor-gray": "#777",
      },
    },
    screens: {
      mobileLarge: "550px",
      tablet: "640px",
      desktopSmall: "825px",
      desktopMenuSmall: "880px",
      headerMenuBreak: "960px",
      desktop: "1050px",
      desktopMenuMedium: "1150px",
      desktopLarge: "1280px",
    },
  },
  plugins: [],
};
