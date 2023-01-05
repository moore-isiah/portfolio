/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vampirio: ["Vampiro One", "cursive"],
        unbounded: ["Unbounded", "cursive"],
      },
    },
  },
  plugins: [],
};
