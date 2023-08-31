/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },

      colors: {
        primary: { // 300 default, 200 hover, 400 clicked/active
          50: '#f1fcf9',
          100: '#d1f6ed',
          200: '#a3ecdb',
          300: '#55d6bd', // default
          400: '#3ec3ad',
          500: '#25a794',
          600: '#1b8679',
          700: '#1a6b62',
          800: '#195650',
          900: '#194843',
          950: '#082b29'
        },

        secondary: { // 50 default, 100 hover, 200 clicked/active
          50: '#fcfcfc', // default light
          100: '#efefef',
          200: '#dcdcdc',
          300: '#bdbdbd',
          400: '#989898',
          500: '#7c7c7c',
          600: '#656565',
          700: '#525252',
          800: '#464646',
          900: '#3d3d3d',
          950: '#292929'
        },

        accent: { // 500 default, 400 hover, 600 clicked/active
          50: '#f6f4fe',
          100: '#eeeafd',
          200: '#ded9fb',
          300: '#c6baf8',
          400: '#a992f3',
          500: '#8860eb', // default 
          600: '#7c46e1',
          700: '#6d34cd',
          800: '#5b2bac',
          900: '#4c258d',
          950: '#2f165f'
        },
        background: {
          light: '#FFFFFF',
          dark: '#100F13',
        }


      },

      fontSize: {
        xs: ['0.875rem', '130%'],
        sm: ['1rem', '130%'],
        base: ['1.375rem', '130%'],
        md: ['1.75rem', '130%'],
        lg: ['2.375rem', '100%'],
        xl: ['3.188rem', '100%'],
        '2xl': ['4.25rem', '110%'],
        '3xl': ['5.625rem', '110%'],
      },

      screens: {
        mobile: { 'max': '480px' },
        tablet: { 'max': '640px' },
        laptop: { 'max': '1024px' },
        desktop: { 'max': '1280px' },
      },

      animation: {
        'appear-from-left' : 'afl 500ms ease-in-out'
      },

      keyframes: {
        'afl': {
          '0%': { transform: 'translateX(-25%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        }
      }

    },
  },
  plugins: [],
}