import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  future: {
    hoverOnlyWhenSupported: true,
  },
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
        secondary: {
          DEFAULT: colors.blue[200],
          light: colors.blue[400],
        },
        'mobile-menu': {
          DEFAULT: '#0f141d',
          light: colors.gray[100],
        },
        background: {
          DEFAULT: '#03080f',
          light: '#FFFFFF',
          secondary: {
            DEFAULT: '#112340',
            light: colors.gray[100],
          },
        },
        hovered: {
          DEFAULT: '#153040',
          light: '#ECECEC',
        },
        code: {
          DEFAULT: '#6e768166',
          light: '#e4e4e4',
        },
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
      animation: {
        'meteor-effect': 'meteor 5s linear infinite',
      },
      keyframes: {
        meteor: {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
          '70%': { opacity: '1' },
          '100%': {
            transform: 'rotate(215deg) translateX(-500px)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
  variants: {
    scrollbar: ['rounded'],
  },
} satisfies Config
