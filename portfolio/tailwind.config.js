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
        'hero-pattern': "url('https://discord.com/channels/@me/1107524618450911375/1357031192914038875')",
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
