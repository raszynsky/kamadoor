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
  },
  plugins: [],
};
