/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        testGreen : '#55D6BD'
      },
      
      fontSize: {
        xs : ['0.875rem', '140%'],
        sm : ['1rem', '140%'],
        base : ['1.375rem', '140%'],
        md : ['1.75rem', '140%'],
        lg : ['2.375rem', '140%'],
        xl : ['3.188rem', '140%'],
        '2xl' : ['4.25rem', '120%'],
        '3xl' : ['5.625rem', '120%'],
      },

      screens: {
        'tablet' : '640px',
        'laptop' : '1024px',
        'desktop' : '1280px',
      },
    },
  },
  plugins: [],
}