/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'Red': '#8b0000',
      'Matte':'#212529',
      'Gray':'#f8f9fa',
      'White':'#fff',
      'Gray-100':'#6c757d',
      'Blue-500':'#3b82f6',
      'Blue-400':'#60a5fa',
      'Blue-300':'#93c5fd',
      'Blue-200':'#bfdbfe',
      'Blue-100':'#dbeafe',
      'Blue-600':'#2563eb',


    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      Montserrat: ['Montserrat', 'sans-serif'],

    },

    // other theme configuration
  },
  plugins: [],
}
