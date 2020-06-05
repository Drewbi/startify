export default {
  palette: {
    primary: {
      main: '#154A71',
    },
    secondary: {
      main: '#6ecebb',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: 'Avenir, Arial',
    h1: {
      fontSize: '40px',
      color: '#154A71',
      fontWeight: 900,
    },
    h2: {
      fontSize: '32px',
      color: '#154A71',
      fontWeight: 900,
    },
    h3: {
      fontSize: '30px',
      color: '#154A71',
      fontWeight: 600,
    },
    body2: {
      fontSize: '20px',
      color: '#154A71',
      fontWeight: 900,
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
        },
      },
    },
  },
};
