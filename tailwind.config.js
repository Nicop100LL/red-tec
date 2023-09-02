/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'aileron': ['Aileron'],

      'mont': ['Montserrat'],
    },

    extend: {
      colors: {
        primary: "#706FE5",
        marr: "#40403F",
        cel: "#06B0F9",
        cel2: "#59B8E2",


      },
    },
  },
  plugins: [],
}