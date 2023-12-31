/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage:{
        home: 'url("/background.png")'
      },
      fontFamily:{
        poppins: ['Poppins'],
        mulish: ['Mulish']
      }
    },
  },
  plugins: [],
}
