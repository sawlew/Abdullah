/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'text-slide-2': 'text-slide-2 5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
      },
      keyframes: {
        'text-slide-2': {
          '0%, 26.66%': {
            transform: 'translateY(0%)',
        },
        '33.33%, 60%': {
            transform: 'translateY(-33.33%)',
        },
        '66.66%, 93.33%': {
            transform: 'translateY(-66.66%)',
        },
        '100%': {
            transform: 'translateY(-99.99%)',
        },
        },
      },
    },
  },
  plugins: [],
}

