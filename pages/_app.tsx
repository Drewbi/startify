import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { FakeProvider } from '../components/FakeContext';
import { AppProps } from 'next/app';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  let theme = createMuiTheme({
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
  });
  theme = responsiveFontSizes(theme, {
    factor: 1.1,
  });

  return (
    <ThemeProvider theme={theme}>
      <FakeProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </FakeProvider>
    </ThemeProvider>
  );
};

export default MyApp;
