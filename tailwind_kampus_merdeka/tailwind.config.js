/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#EFF0F0",
        secondary: "#2F3031",
        accent: "#0B5FEF",
        kuning: "#FFDE16",
        latar: "#F8F8F8",
        abu: "#EFF0F0",
        hitam: "#000000",
      },
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      boxShadow: {
        kotak: "0px 4px 8px 0px #0000001E",
      },
    },
  },
  plugins: [],
};
