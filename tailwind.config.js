/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        "custom-gray":"#C4C4C4",
        "custom-tomato":"#ED553B",
        "custom-purple":"#393280",
        "custom-light-gray":"#E0E0E0",
        "custom-light-tomato":"#FCEBEA",
        "custom-bg-light-tomato":"#FCECEC",
        "custom-pink": "#FBEEEE",
        "custom-teal": "#F7FFFE",
        "custom-white": "#F7FFFE", 
      },
    },
  },
  plugins: [],
}

