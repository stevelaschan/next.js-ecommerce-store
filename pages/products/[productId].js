import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/Layout';

export default function SingleProduct(props) {
  return (
    <Layout>
      <Head>
        <title>{props.product.name}</title>
        <meta description={props.product.name} />
      </Head>
      <h1>{props.product.name}</h1>
      <Image src={`/store-products/${props.name}`} />
    </Layout>
  );
}
