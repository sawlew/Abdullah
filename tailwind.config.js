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
          '0%, 40%': {
            transform: 'translateY(0%)',
          },
          '50%, 90%': {
            transform: 'translateY(-50%)',
          },
          '100%': {
            transform: 'translateY(-100%)',
          },
        },
      },
    },
  },
  plugins: [],
}

