/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url(https://www.animalis.com/conseils/app/uploads/2023/05/banniere-chaton.jpg)"
      }
    },
  },
  plugins: [],
}

