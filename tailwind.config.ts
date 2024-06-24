import type { Config } from 'tailwindcss'
import colors from "tailwindcss/colors"

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    rotate: {
      '-180': '-180deg',
      '-90': '-90deg',
      '-45': '-45deg',
      0: '0',
      45: '45deg',
      90: '90deg',
      135: '135deg',
      180: '180deg',
      270: '270deg',
    },
    extend: {
      fontFamily: {
        header: ['Lato', 'sans-serif'],
        content: ['Lato', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: colors.blue[500],
          100: '#382bf0',
          200: '#5e43f3',
          300: '#7a5af5',
          400: '#9171f8',
          500: '#a688fa',
          600: '#ba9ffb',
        },
        secondary: colors.blue[200],
        'mobile-menu': '#0f141d',
        background: '#03080f',
        "backgound-secondary": '#112340',
        hovered: '#153040',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
        '4xl': '2560px',
        '5xl': '3840px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar'), require('tailwind-scrollbar-hide')],
  variants: {
    scrollbar: ['rounded'],
  },
} satisfies Config;

