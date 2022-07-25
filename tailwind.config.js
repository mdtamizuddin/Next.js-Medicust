/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#0088FF",

          "secondary": "#FF9000",

          "accent": "#34d399",

          "neutral": "#0A2E72",

          "base-100": "#FFFFFF",

          "info": "#2563eb",

          "success": "#16a34a",

          "warning": "#fbbf24",

          "error": "#dc2626",
        },
      },
    ],
  },
  plugins: [require("daisyui")],

}
