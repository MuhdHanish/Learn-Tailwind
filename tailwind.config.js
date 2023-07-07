/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#E1BEE7",
          200: "#CE93D8",
          300: "#BA68C8",
          400: "#7E57C2",
          500: "#9C27B0",
          600: "#8E24AA",
          700: "#7B1FA2",
          800: "#6A1B9A",
          900: "#4A148C"
        },
      },
    },
  },
  plugins: [],
}

