const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        cyan: "#43E2A0",
        dark: "#00170C",
      },
      dropShadow: {
        shadow1: "10px 10px 20px rgba(0, 0, 0, 0.25)",
        phone: [
          "20px 20px 50px rgba(0, 0, 0, 0.35)",
          "80px 80px 150px rgba(0, 0, 0, 0.25)",
        ],
        started: "20px 20px 50px rgba(0, 0, 0, 0.96)",
      },
      screens: {
        mid: "1200px",
      },
      boxShadow: {
        shadow1: "10px 10px 20px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        aboutBg: 'url("/about-bg.webp")',
        heroBg: 'url("/hero_img.webp")',
        phoneShadow:
          "linear-gradient(135.09deg, rgba(0, 0, 0, 0.35) 2.14%, rgba(0, 0, 0, 0) 44.68%)",
        greenGr: "linear-gradient(233.15deg, #43E2A0 -26.56%, #24A46F 99.9%)",
      },
    },
  },
  plugins: [],
};
