/** @type {import('tailwindcss').Config} */
module.exports = {
  content: 
    ["./src/**/*.{html,js}"]
    ,
  
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

//"./src/**/*.{js,jsx,ts,tsx}/./node_modules/flowbite/**/*.js"