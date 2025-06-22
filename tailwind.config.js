// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // ✅ boolean false
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
};