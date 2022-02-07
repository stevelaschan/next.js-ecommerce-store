/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import itemDatabase from '../util/itemDatabase';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <meta name="description" content="Welcome to my website" />
      </Head>
      <h1>Home page</h1>
      <p>Home page content</p>
      <h2>Why Choose Us</h2>
      <p>Content why choose us</p>
      <h2>Our Store Products</h2>
      {itemDatabase.map((item) => {
        return (
          <div key={item.id}>
            <Link href="../util/itemDatabase">
              <a>{item.name}</a>
            </Link>
          </div>
        );
      })}
    </Layout>
  );
}
