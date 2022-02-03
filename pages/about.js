import Head from 'next/head';
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
        <meta name="description" content="About the Store" />
      </Head>
      <div>
        <h1>About</h1>
        <p>This is the about page</p>
      </div>
      <div>
        <h2>Contact Us</h2>
        <p>Contact info</p>
      </div>
    </Layout>
  );
}
