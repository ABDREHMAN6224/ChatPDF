/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary: {
        500: "#00A1E0",
      },
      gray:{
        50:"#D0D5DD",
        100:"#F9FAFB",
        200:"#98A2B3",
        300: "#667085",
        400:"#344054",
        500:"#475467",
        700:"#101828",
        900:"#0C111D"
      },
      "light-border":"#28282838",
      light:"#EAECF0",
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#1C2434",
      "black-2": "#010101",
      body: "#64748B",
      bodydark: "#0C111D",
      graydark: "#282828",
      "gray-3": "#F9F9FF38",
      whiten: "#F9F9FF",
      success: "#219653",
      danger: "#D34053",
      warning: "#FFA70B",
    },
  },
  fontFamily: {
    body: [
      "Inter",
      "ui-sans-serif",
      "system-ui",
      "-apple-system",
      "system-ui",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "Noto Sans",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      "Noto Color Emoji",
      "Plus Jakarta Sans",
    ],
    sans: [
      "Inter",
      "ui-sans-serif",
      "system-ui",
      "-apple-system",
      "system-ui",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "Noto Sans",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      "Noto Color Emoji",
      "Plus Jakarta Sans",
    ],

  },
  plugins: [
    require("tailwindcss"),
  ],
};
