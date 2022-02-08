/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import { getProducts } from '../util/database';

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
            <Image
              src={`/store-products/${product.name}.jpg`}
              alt={product.name}
              width="400"
              height="200"
            />
            <Link href={`products/${product.id}`}>
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
