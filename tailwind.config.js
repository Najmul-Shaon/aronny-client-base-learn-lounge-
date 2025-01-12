/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "serif"],
        pacifico: ["Pacifico", "serif"],
        merienda: ["Merienda", "serif"],
      },
      colors: {
        primary_color: "#3AA34D",
        primary_color_hover: "#319139",
        primary_color_active: "#267C32",
        light_color: "#E1F5D7",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
