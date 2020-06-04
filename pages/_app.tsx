import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import globalStyles from '../assets/style/globalStyle';
import { FakeProvider } from '../components/FakeContext';
import { AppProps } from 'next/app';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  let theme = createMuiTheme(globalStyles);
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
