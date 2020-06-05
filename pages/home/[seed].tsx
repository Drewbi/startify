import { useRouter, NextRouter } from 'next/router';

import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  Header,
  Footer,
  Hero,
  FirstRow,
  SecondRow,
  ThirdRow,
} from '../../components';
import { getFakeData } from '../../core/faker';

const isRouterReady = (router: NextRouter) => {
  return router.asPath !== router.route;
};
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function Home() {
  const router = useRouter();
  console.log(isRouterReady(router));
  if (!isRouterReady(router)) {
    console.log(true);
    return <p> Loading </p>;
  }

  const { seed, t } = router.query;
  const fakeData = getFakeData(+seed, +t);

  if (!fakeData) {
    return <p> Loading </p>;
  }

  const getSecondRowData = () => {
    const { companyBs } = fakeData;
    if (!companyBs) return [];

    return companyBs.map((data) => ({
      imageSrc: '/bear.svg',
      title: data?.title,
      bodyText: data?.bodyText.substring(0, 200),
    }));
  };

  return (
    <div className="container">
      <Head>
        <title>{fakeData.companyName}</title>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <CssBaseline />
      <Header name={fakeData.companyName} />
      <Hero />
      <FirstRow
        titleText={fakeData.companyCatchPhrase[0].title}
        firstText={fakeData.companyCatchPhrase[0].bodyText?.substr(0, 100)}
        secondText={fakeData?.companyCatchPhrase[2].bodyText}
        imageSrc="/stats.svg"
      />
      <SecondRow data={getSecondRowData()} />
      <ThirdRow
        title={fakeData?.companyCatchPhrase[1].title}
        bodyText={fakeData?.companyCatchPhrase[1].bodyText}
        imageSrc="https://unsplash.com/photos/Ua-agENjmI4/download"
      />
      <Footer
        companyName={fakeData.companyName}
        quote={fakeData?.companyCatchPhrase[2].title}
        address={fakeData.address}
        phoneNumber={fakeData.phoneNumber}
        person={fakeData.person}
      />
    </div>
  );
}

export default Home;
