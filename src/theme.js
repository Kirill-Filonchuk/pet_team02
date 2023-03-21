export const breakpoints = {
  mob: '320',
  tab: '768',
  desk: '1280',
};

export const theme = {
  colors: {
    accent: '#F59256',
    accentActive: '#FF6101',
    background: '#FDF7F2',
    black: '#111111',
    blueLinks: '#3091EB',
    borderActive: 'rgba(245, 146, 86, 0.5)',
    gradient:
      'linear-gradient(257.68deg, #EC4C76 12.88%, #FEBB40 81.31%, #FFFFFF 144.91%)',
    grey: 'rgba(17, 17, 17, 0.6)',
    text: '#000000',
    textNews: '#111321',
    white: '#FFFFFF',
    validInput: '#179625',
    greyHover: 'rgba(17, 17, 17, 0.7)',
  },

  fonts: {
    manrope: "'Manrope', sans-serif",
    inter: "'Inter', sans-serif",
    poppins: "'Poppins', sans-serif",
    montserrat: "'Montserrat', sans-serif",
  },

  fontSizes: [12, 14, 16, 18, 20, 24, 28, 32, 36, 48],

  fontWeights: {
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },

  lineHeights: [1.2, 1.25, 1.35, 1.36, 1.375, 1.389, 1.5, 1.625, 1.83],

  borders: {
    none: 'none',
    normal: '1px solid',
    medium: '2px solid',
  },

  radii: {
    none: '0',
    small: '20px',
    normal: '40px',
    round: '50%',
  },

  breakpoints: ['320px', '768px', '1280px'],

  //mediaQueries
  mq: {
    mobileOnly: `@media screen and (max-width: ${breakpoints.tab - 0.02}px)`,
    mobile: `@media screen and (min-width: ${breakpoints.mob}px)`,
    tabletOnly: `@media screen and (min-width: ${
      breakpoints.tab
    }px) and (max-width: ${breakpoints.desk - 0.02}px)`,
    tablet: `@media screen and (min-width: ${breakpoints.tab}px)`,
    notDesktop: `@media screen and (max-width: ${breakpoints.desk - 0.02}px)`,
    desktop: `@media screen and (min-width: ${breakpoints.desk}px)`,
  },

  transitions: {
    durations: {
      default: '250ms',
    },
    functions: {
      default: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
};
