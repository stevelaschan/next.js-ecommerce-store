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
        <h1>Cart Checkout Page</h1>
        <p>This is the checkout page</p>
      </div>
      <div>
        <h2>Your products</h2>
        <p>Your products</p>
      </div>
    </Layout>
  );
}
