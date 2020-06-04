import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Test from '../../components/Test';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div className="container">
      <Head>
        <title>Graham Group</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <CssBaseline />
      <Header />
      {/* <Hero /> */}
      <Test />
      <Footer />
    </div>
  );
}
