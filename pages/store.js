/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

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
            <Link href={product.id} />
            <a>{product.name}</a>
          </div>
        );
      })}
    </Layout>
  );
}
