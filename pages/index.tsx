import Head from 'next/head';
import { Formik, Form } from 'formik';
import FormSelect, { FormSelectItem } from '../components/FormSelect';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import { useRouter } from 'next/router';

interface FormValues {
  type: string;
}

const initialValues: FormValues = {
  type: '',
};

const positionItems: FormSelectItem[] = [
  {
    label: 'Corporate',
    value: '1',
  },
  {
    label: 'Technology',
    value: '2',
  },
  {
    label: 'AI',
    value: '3',
  },
];

const Home: React.FC = () => {
  const router = useRouter();

  const handleSubmit = (values: FormValues): void => {
    const generateRandomInteger = (max: number) =>
      Math.floor(1 + Math.random() * max);
    const typeId = values['type'];
    const redirectURL = `/home/${generateRandomInteger(1000000)}?t=${typeId}`;
    router.push(redirectURL);
  };

  return (
    <div className="container">
      <Head>
        <title> Startify </title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <img width="100px" src="/favicon.png" />
      <Typography className="logo" variant="h4">
        Startify
      </Typography>
      <div className="form">
        <Typography variant="h6" color="textPrimary">
          Choose your area
        </Typography>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ dirty, isValid }) => {
            return (
              <Form className="form">
                <FormSelect
                  name="type"
                  items={positionItems}
                  label="Company Type"
                />

                <Button
                  variant="contained"
                  color="secondary"
                  disabled={!dirty || !isValid}
                  type="submit"
                >
                  Generate
                </Button>
              </Form>
            );
          }}
        </Formik>
      </div>

      <footer className="footer">
        <Typography> Made by Team 1 in Pod 0.3.2 </Typography>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #fff;
        }

        .logo {
          fontFamily: Comfortaa
          color: #444
        }

        .form {
          background: #fff;
          border-radius: 10px;
          width: 500px;
          padding: 50px;
          margin-top: 20px;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .footer {
          width: 100%;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          bottom: 0;
          color: #444;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fff;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default Home;
