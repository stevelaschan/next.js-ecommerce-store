/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import Head from 'next/head';
import Layout from '../components/Layout';

const productSearchBar = css`
  display: flex;
  justify-content: center;
  padding: 16px;

  input {
    width: 800;
    padding: 8px 16px;
    border-radius: 8px;
    margin: 0 10px;
  }

  button {
    border-radius: 8px;
    font-weight: 50;
    margin: 0 10px;
    background-color: #2e2e2e;
    color: white;
    cursor: pointer;
  }
`;

export default function Store() {
  return (
    <Layout>
      <Head>
        <title>Our Store</title>
        <meta name="description" content="Store" />
      </Head>
      <h1>Welcome to the Store</h1>
      <div css={productSearchBar}>
        <input for="searBar" placeholder="Search for your item..." />
        <button>Search</button>
      </div>
    </Layout>
  );
}
