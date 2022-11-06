/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: {
          750: "#FF3811",
        },
        gray: {
          150: "#444444",
          250: "#737373",
          120: "#F5F5F8",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
