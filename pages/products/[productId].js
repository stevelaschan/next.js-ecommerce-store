import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/Layout';
import { getProductById } from '../../util/database';

export default function SingleProduct(props) {
  return (
    <Layout>
      <Head>
        <title>{props.product.name}</title>
        <meta description={props.product.name} />
      </Head>
      <h1>{props.product.name}</h1>
      <Image
        src={`/store-products/${props.product.name}.jpg`}
        width="400"
        height="200"
      />
      <div>id: {props.product.id}</div>
      <div>name: {props.product.name}</div>
      <div>product type: {props.product.type}</div>
      <div>price: {props.product.price}</div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const productId = context.query.productId;
  const product = await getProductById(productId);

  return {
    props: {
      product: product,
    },
  };
}
