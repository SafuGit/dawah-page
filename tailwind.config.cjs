/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        "bd-green": "#006a4e",
        "bd-red": "#f42a41",
        "bd-green-dark": "#004d38",
        "bd-red-dark": "#c41e30",
        "background-dark": "#050805",
        "surface-dark": "#0f170f",
      },
      fontFamily: {
        display: ["Lexend", "sans-serif"],
        bengali: ["Noto Serif Bengali", "serif"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
