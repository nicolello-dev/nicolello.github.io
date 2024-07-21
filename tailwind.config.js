/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0e1217",
          light: "#1a2029",
        },
      },
    },
  },
  plugins: [],
};
