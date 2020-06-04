import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useRouter } from 'next/router';
import {
  Header,
  Footer,
  Hero,
  FirstRow,
  SecondRow,
  ThirdRow,
} from '../../components';

const secondRowData = [
  {
    imageSrc: '/bear.svg',
    title: 'Distributed Info-Mediaries',
    bodyText:
      'If you want to use a local server and you want to use it locally for your server, you can create an instance for your server asf server server server serve',
  },
  {
    imageSrc: '/notes.svg',
    title: 'Distributed Info-Mediaries',
    bodyText:
      'If you want to use a local server and you want to use it locally for your server, you can create an instance for your server asf server server server serve',
  },
  {
    imageSrc: '/stats.svg',
    title: 'Distributed Info-Mediaries',
    bodyText:
      'If you want to use a local server and you want to use it locally for your server, you can create an instance for your server asf server server server serve',
  },
];

export default function Home() {
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
      <Hero />
      <FirstRow
        titleText={'Business-focused contextually based architecture'}
        firstText={
          "We've been able to get the idea of creating an extremely simple and accessible architecture that is both flexible and fun to use"
        }
        secondText={
          'So if you want to do something really unique to your company, you have to be able to design it ot a certain level of functionality that you can implement in a way that you can feel comfortable using.'
        }
        imageSrc="/stats.svg"
      />
      <SecondRow data={secondRowData} />
      <ThirdRow
        title={'Visionary, Innovate, Convergence'}
        bodyText={
          'If you want to use a local server and you want to use it locally for your server, you can create an instance for your server asf server server server serve If you want to use a local server and you want to use it locally for your server, you can create an instance for your server asf server server server serve If you want to use a local server and you want to use it locally for your server, you can create an instance for your server asf server server server serve'
        }
        imageSrc="/stats.svg"
      />
      <Footer />
    </div>
  );
}
