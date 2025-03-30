module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Pour Next.js 13 (structure app)
    './pages/**/*.{js,ts,jsx,tsx}', // Pour Next.js 12
    './components/**/*.{js,ts,jsx,tsx}', // Composants
  ],
  theme: {
    extend: {
      fontFamily: {
        retro: ['retro', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/images/dglksej-3ed5f398-b5c8-4d98-b908-43438b2964f2.gif')",
      },
      scrollBehavior: {
        smooth: 'smooth',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.scroll-smooth': {
          'scroll-behavior': 'smooth',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
