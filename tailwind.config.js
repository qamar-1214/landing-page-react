/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f5cd34",
        secondary: "#000000",
      },
      screens: {
        xmd: "800px",
      },
    },
  },
  plugins: [],
};
