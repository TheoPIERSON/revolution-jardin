// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue,html}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000", // Noir
        secondary: "#FFFFFF", // Blanc
        accent: {
          red: "#D94F4F",
          green: "#4FAD64",
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
