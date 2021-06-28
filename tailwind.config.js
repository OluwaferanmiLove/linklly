module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        projectGrey: '#6C757D',
        mainColor: '#006167',
        mainBg: '#F2F7F7',
        'mainColor-100': '#5E9B9F',
      },
      fontFamily: {
        'gilroy-bold': 'Gilroy-Bold',
        'gilroy-medium': 'Gilroy-Medium',
        'gilroy-light': 'Gilroy-Light',
      },
      lineHeight: {
       'lg': '4rem',
      },
      width: {
        '108': '29.75rem',
        'baseWidth': '74.5rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
