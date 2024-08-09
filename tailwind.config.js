/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["outfit", "sans-serif"],
        youngserif: ["young-serif", "sans"],
      },
      colors: {
        eggshell: "#f3e5d8",
        brown: {
          800: "hsl(14, 45%, 36%)",
        },
      },
    },
  },
  plugins: [],
};
