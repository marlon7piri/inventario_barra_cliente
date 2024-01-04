/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      "sm":"600",
      "md":"800",
      "lg":"1024"
    }
  },
  plugins: [],
}
