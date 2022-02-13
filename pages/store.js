import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import { getProducts } from '../util/database';

const productsImagesStyle = css`
  display: flex;
  margin: 16px;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default function Store(props) {
  return (
    <Layout>
      <Head>
        <title>Our Store</title>
        <meta name="description" content="Store" />
      </Head>
      <h1>Our Products</h1>
      {props.products.map((product) => {
        return (
          <div key={product.id}>
            <div css={productsImagesStyle}>
              <Image
                src={`/store-products/${product.name}.jpg`}
                alt={product.name}
                width="400"
                height="200"
              />
            </div>
            <Link
              href={`products/${product.id}`}
              data-test-id="product-product-id"
            >
              <a>{product.name}</a>
            </Link>
          </div>
        );
      })}
    </Layout>
  );
}

export async function getServerSideProps() {
  const products = await getProducts();

  return {
    props: {
      products: products,
    },
  };
}
