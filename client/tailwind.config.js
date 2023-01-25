/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'lightest': '#C0D2CE',
        'light': '#95ABA3',
        'dark': '#4A4759',
        'darkest': '#2E2A34',
        'rocketRed': '#EC4962'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}
