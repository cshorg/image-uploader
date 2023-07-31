/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      offWhite: "#F6F8FB",
      blue: "#2f80ed",
      lightBlue: "#97BEF4",
      grey: "#4f4f4f",
      mdGrey: "#BDBDBD",
      lightGrey: "#F6F8FB",
      white: "#ffffff",
      green: "#219653"
    },
    fontFamily: {
      display: ["Poppins"]
    }
  },
  plugins: []
}
