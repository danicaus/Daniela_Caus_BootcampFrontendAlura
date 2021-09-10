import typographyVariants from './typographyVariants'

const breakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200,
};

const colors = {
  background: {
    light: {
      color: '#C8E7F0',
    },
    middle: {
      color: '#3C9BB9'
    },
    main: {
      color: '#002D4A',
    },
  },
  borders: {
    main: {
      color: '#C8E7F0',
    },
    secondary: {
      color: '#3C9BB9',
    },
    tertiary: {
      color: '#002D4A',
    },
  },
  primary: {
    main: {
      color: '#002D4A',
    },
  },
  secondary: {
    main: {
      color: '#3C9BB9',
    },
  },
  tertiary: {
    main: {
      color: '#C8E7F0',
    },
  },
};

const fontFamilies = {
  firaCondensed: '\'Fira Sans Condensed\', sans-serif',
  firaRegular: '\'Fira Sans\', sans-serif',
}

const theme = {
  colors,
  breakpoints,
  fontFamilies,
  typographyVariants,
};

export default theme;
