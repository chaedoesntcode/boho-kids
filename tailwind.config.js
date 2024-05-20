/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-poppins)'],
        secondary: ['var(--font-lato'],
      },
      colors: {
        lightGray: '#F2F2F2',
        brown: '#735340',
        lightBrown: '#BFA89B',
        tan: '#D9CCC5',
        yellow: '#DB9C4D',
      },
    },
  },
  plugins: [],
};
