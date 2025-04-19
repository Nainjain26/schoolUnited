module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        animation: {
          fadeIn: 'fadeIn 1s ease-out',
          bounce: 'bounce 1s ease-out',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: 0, transform: 'translateY(20px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
          bounce: {
            '0%': { opacity: 0, transform: 'scale(0.8)' },
            '50%': { opacity: 0.5, transform: 'scale(1.1)' },
            '100%': { opacity: 1, transform: 'scale(1)' },
          },
        },
        fontFamily: {
          montserrat: ['Montserrat', 'sans-serif'],
          'open-sans': ['Open Sans', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };