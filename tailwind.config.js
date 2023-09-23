/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        myRed: "hsl(0, 100%, 74%)",
        myGreen: "hsl(154, 59%, 51%)",
        myBlue: "hsl(248, 32%, 49%)",
        myDarkBlue: "hsl(249, 10%, 26%)",
        myGrayishBlue: "hsl(246, 25%, 77%)",
      },
      fontFamily: {
        poppins: ["Poppins", "lkjasf"],
      },
      backgroundImage: {
        "intro-desktop": "url(../images/bg-intro-desktop.png)",
        "intro-mobile": "url(../images/bg-intro-mobile.png)",
        "error-sign": "url(../images/icon-error.svg)",
      },
      height: {
        "100svh": "100svh",
      },
      minHeight: {
        "100svh": "100svh",
      },
      padding: {
        0.05: "5%",
      },
      boxShadow: {
        custom: "0 8px 0 0 rgb(0, 0, 0, .15)",
      },
    },
  },
  plugins: [],
};
