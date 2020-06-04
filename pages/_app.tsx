import { FakeProvider } from '../components/FakeContext';
import { AppProps } from 'next/app';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <FakeProvider>
      <Component {...pageProps} />
    </FakeProvider>
  );
};

export default MyApp;
