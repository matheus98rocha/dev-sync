/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#00a82d",
      primaryFocus: "#018625",
      error: "#FF8585",
      alert: "#FFD485",
      backgroud: "#fefefe",
      contrastBackgroud: "#eaecec",
    },
  },
  plugins: [require("tailwindcss-animated")],
};
