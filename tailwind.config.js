/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#171918',
          dark: '#101211',
          light: '#222524',
          subtle: '#2A2E2C',
          card: '#1D211F',
        },
        ivory: {
          DEFAULT: '#F3F0E9',
          light: '#FAF8F4',
          dark: '#E7E2D5',
        },
        beige: {
          DEFAULT: '#D6CDBE',
          light: '#E2DBD0',
          dark: '#C4B9A7',
        },
        bronze: {
          DEFAULT: '#A68A64',
          light: '#BAA17D',
          dark: '#876D49',
          glow: 'rgba(166, 138, 100, 0.25)',
        },
        softwhite: {
          DEFAULT: '#FAF9F6',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', '"DM Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'super-wide': '0.35em',
      },
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.25, 1, 0.5, 1)',
        'cinematic': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
