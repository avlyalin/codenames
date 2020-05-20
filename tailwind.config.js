const {
  colors: { transparent, current, black, white },
} = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.jsx', './assets/index.html'],
  theme: {
    colors: {
      transparent,
      current,
      black,
      white,
      gray: {
        100: '#eeeeee',
        200: '#cccccc',
        300: '#999999',
        400: '#666666',
        500: '#333333',
      },
      blue: {
        100: '#0099cc',
        200: '#0e85ac',
      },
      red: {
        100: '#cb6060',
        200: '#af4848',
      },
    },
    extend: {
      minHeight: {
        '20': '5rem',
      },
      height: {
        '9': '1.75rem',
      },
      opacity: {
        '60': '0.6',
      },
      backgroundSize: {
        '3': '0.75rem',
      },
      boxShadow: {
        'outline-sm': '0 0 0 2px rgba(66, 153, 225, 0.5)',
        'outline-sm-gray': '0 0 0 2px rgba(102, 102, 102, 0.5)',
        'outline-sm-blue': '0 0 0 2px rgba(0, 153, 204, 0.5)',
        'outline-sm-red': '0 0 0 2px rgba(203, 96, 96, 0.5)',
        'b-r': '1px 2px 3px rgba(0, 0, 0, 0.25)',
      },
      padding: {
        '9': '2.25rem',
      },
      borderRadius: {
        xl: '0.75rem',
      },
      translate: {
        '1/4': '25%',
      },
    },
  },
  variants: {
    borderWidth: ['responsive', 'first', 'last'],
    borderRadius: ['responsive', 'first', 'last'],
  },
  plugins: [],
};
