
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      md: { min: "551px", max: "1050px" },
      sm: { min: "200px", max: "550px" },
    },
    extend: {
      colors: {
        login: "#484c64",
        mauve: "#6C5DD3",
        input: "#a0a8ac",
        continue: "#a34cf8",
        facebook: "#1877F2",
        placeholder: "#a9a9a9",
        white: {
          A700_7f: "#ffffff7f",
          A700_33: "#ffffff33",
          A700_cc: "#ffffffcc",
          A700_99: "#ffffff99",
          A700_19: "#ffffff19",
          A700_4c: "#ffffff4c",
          A700_66: "#ffffff66",
          A700: "#ffffff",
        },
        blue: { A400: "#1877f2" },
        deep_purple: {
          400: "#6c5dd3",
          A100: "#b75cff",
          A700: "#6619e4",
          A700_01: "#5100ff",
        },
        black: {
          900: "#000000",
          "900_3f": "#0000003f",
          "900_26": "#00000026",
          "900_59": "#00000059",
        },
        green: { 400: "#63da50", 500: "#47bf34", A700: "#0acf41" },
        blue_gray: {
          200: "#b5b7c2",
          400: "#888888",
          800: "#313554",
          900: "#181e41",
          "800_66": "#2f345466",
        },
        red: { A400: "#ff2121" },
        gray: {
          500: "#95929f",
          600: "#747474",
          700: "#6c5965",
          800: "#493e52",
          900: "#1c1c1c",
        },
        lime: { 900: "#984c38" },
        indigo: { A700: "#0047ff" },
      },
      backgroundImage: {
        gradient: "linear-gradient(213deg ,#b75cff,#6619e4)",
        gradient1: "linear-gradient(134deg ,#984c38,#181e41)",
      },
      fontFamily: { sfprodisplay: "SF Pro Display", poppins: "Poppins" },
    },
  },

  plugins: [],
};