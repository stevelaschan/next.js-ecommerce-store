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
      <Image src={`/store-products/${props.name}`} width="300" height="300" />
      <div>id: {props.products.id}</div>
      <div>name: {props.products.name}</div>
      <div>product type: {props.product.type}</div>
      <div>price: {props.products.price}</div>
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
