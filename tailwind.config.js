// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        okuwa_blue: {
          DEFAULT: "#06C755",
        },
        catalina: {
          base: "#06C755",
          dark: "#2bd06e",
          light: "#23fd7c",
        },
        pink: {
          light: "#ff7ce5",
          DEFAULT: "#ff49db",
          dark: "#ff16d1",
        },
        gray: {
          darkest: "#1f2d3d",
          dark: "#3c4858",
          DEFAULT: "#c0ccda",
          light: "#e0e6ed",
          lightest: "#f9fafc",
        },
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
