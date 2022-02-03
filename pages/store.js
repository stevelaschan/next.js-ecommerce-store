import Head from 'next/head';
import Layout from '../components/Layout';

export default function Store() {
  return (
    <Layout>
      <Head>
        <title>Our Store</title>
        <meta name="description" content="Store" />
      </Head>

      <h1>Welcome to the Store</h1>
      <p>This is the store section</p>
    </Layout>
  );
}
