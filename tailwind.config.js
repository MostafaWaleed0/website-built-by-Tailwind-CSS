module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      width: {
        '3full': '300%',
        '4full': '400%',
        '5full': '500%',
        3500: 'calc(168px * 5)',
      },
      height: {
        37: '150px',
      },
      margin: {
        '51px': '51px',
      },
      gap: {
        17: '73px',
      },
    },
    colors: {
      black: 'black',
      white: 'white',
      cyan: {
        100: '#EAFBFF',
        300: '#72dbdf',
        400: '#00bbc2',
        500: '#00788A',
        600: '#00778a',
        900: '#083038',
      },
      neutral: {
        100: '#ffffff',
        700: '#4a5658',
        900: '#191c2f',
      },
      sky: {
        100: '#f7ffff',
      },
      emerald: {
        100: '#F0FFFA',
      },
      red: {
        100: '#FFF7F5',
      },
      yellow: {
        100: '#FFF6EB',
      },
      blue: {
        100: '#ECF4FF',
      },
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.375rem',
      '3xl': '1.875rem',
      '4xl': '2.75rem',
      '7xl': '6.25rem',
    },
    fontFamily: {
      josefin: 'Josefin Sans',
    },
    container: {
      center: true,
      padding: '1rem',
    },
    boxShadow: {
      '3xl': '0px 60px 80px -14px rgba(0, 0, 0, 0.08);',
      '2xl': ' 4px 8px 44px -10px rgba(66, 94, 122, 0.18);',
      lg: ' 0px 16px 30px -16px rgba(29, 139, 142, 0.25);',
      sm: ' 0px 2px 20px -8px rgba(0, 0, 0, 0.14);',
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.rotate-z-180': {
          transform: 'rotateZ(180deg)',
        },
        '.text-fill-transparent': {
          '-webkit-text-fill-color': 'transparent',
        },
      });
    },
  ],
};
