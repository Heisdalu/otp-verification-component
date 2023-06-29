/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        bc1: "0px 10px 25px -15px #111628",
        bc2: "0px 7px 0px 0px #2E3650",
        bc3: "box-shadow: 0px 4px 0px 0px #2E3650;",
      },
      fontFamily: {
        inter: "Inter, sans-serif",
      },
      fontWeight: {
        lg: "700",
      },
    },
  },
  plugins: [],
};
