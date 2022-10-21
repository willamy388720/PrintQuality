const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          "blue-print-100": "#0099DC",
          "blue-print-200": "#217BF4",
          "blue-print-300": "#0A093D",
          "blue-print-400": "#20202D",
          "blue-print-500": "#2B2B39",
          "gray-print-100": "#656464",
          "green-print-100": "#2AAB8C",
          "green-print-200": "#218C73",
        },
        neutral: {
          "very-light-gray": "#E7E7E7",
          "light-grayish-blue": "hsl(220, 16%, 96%)",
          "very-light-gray": "hsl(0, 0%, 98%)",
          white: "hsl(0, 0%, 100%)",
        },
      },
      backgroundImage: (theme) => ({
        "header-desktop": "url('../assets/images/Header.svg')",
        "header-mobile": "url('../assets/images/Header_mobile.svg')",
        "logo-desktop": "url('../assets/images/Logo Grande.svg')",
        "logo-mobile": "url('../assets/images/logo_mobile.svg')",
        "whoweare-desktop": "url('../assets/images/Quem Somos.svg')",
        "gradient-desktop": "url('../assets/images/bg_section.svg')",
        "gradient-mobile": "url('../assets/images/bg_section_mobile.svg')",
        "goal-desktop": "url('../assets/images/Objetivos.svg')",
        "form-desktop": "url('../assets/images/Form.svg')",
        "logo-xs-desktop": "url('../assets/images/Logo Pequena.svg')",
      }),
      container: {
        center: true,
        padding: {
          DEFAULT: "1.25rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
          "2xl": "5rem",
        },
      },
      inset: {
        "-42.6%": "-42.6%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("tw-elements/dist/plugin"),
  ],
};
