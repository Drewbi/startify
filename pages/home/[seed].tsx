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
      'If you want to use a single-server server and you want to use it locally for the server, you can create a new server instance with a single-server server.',
  },
  {
    imageSrc: '/notes.svg',
    title: 'Collaborative Knowledge Base',
    bodyText:
      'In order to foster collaborative knowledge sharing, the University of Chicago will collaborate with other universities on a collaborative project to create a research-based educational resource.',
  },
  {
    imageSrc: '/stats.svg',
    title: 'Distributed Info-Mediaries',
    bodyText:
      'The new system will allow you to create a high-resolution, interactive virtual-reality experience for the virtual body. The new display is composed of three different colored lights that are controlled by the user.',
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
      <Header name="Graham & Graham" />
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
        title={'Visionary. Innovate. Convergence. '}
        bodyText={
          'With the help of our friends at the Center for Economic and Policy Research, we are bringing out the top-ranked scientists in the field of robotics in a series of posts that will focus on the new technologies that will be available to our community. In general, these new technologies will be the most advanced in the history of robotics. In short, the more advanced are the technologies that will enable us to make the most of our innovations.'
        }
        imageSrc="https://unsplash.com/photos/Ua-agENjmI4/download"
      />
      <Footer />
    </div>
  );
}
