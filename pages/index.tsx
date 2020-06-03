import Head from 'next/head';
import { Formik, Form } from 'formik';
import FormField from '../components/FormField';
import FormSelect, { FormSelectItem } from '../components/FormSelect';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

interface FormValues {
  name: string;
  type: string;
  theme: string;
}

const initialValues: FormValues = {
  name: '',
  type: '',
  theme: '',
};

const positionItems: FormSelectItem[] = [
  {
    label: 'Corporate',
    value: 'corporate',
  },
  {
    label: 'AI',
    value: 'ai',
  },
  {
    label: 'Technology',
    value: 'technology',
  },
  {
    label: 'E-Commerce',
    value: 'e_commerce',
  },
];

const themeItems: FormSelectItem[] = [
  {
    label: 'Dark Theme',
    value: 'dark',
  },
  {
    label: 'Light Theme',
    value: 'light',
  },
];

const Home: React.FC = () => {
  const handleSubmit = (values: FormValues): void => {
    // Make API Call with JSON.stringify(values);
    console.log(JSON.stringify(values));
  };

  return (
    <div className="container">
      <Head>
        <title> Startify </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Welcome to Startify!</h1>
        <div className="form">
          <Typography variant="h6">
            Enter details of your startup to get started!
          </Typography>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ dirty, isValid }) => {
              return (
                <Form>
                  <FormField name="name" label="Company Name" />
                  <FormSelect
                    name="type"
                    items={positionItems}
                    label="Company Type"
                  />

                  <FormSelect
                    name="theme"
                    items={themeItems}
                    label="Website Theme?"
                  />

                  <Button
                    variant="contained"
                    color="primary"
                    disabled={!dirty || !isValid}
                    type="submit"
                  >
                    Generate my website!
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </main>

      <footer>
        <p> Made by Team 2 in Pod 0.3.2 </p>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #e2dadb;
        }

        .form {
          background: white;
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

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
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
          background: #fafafa;
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
