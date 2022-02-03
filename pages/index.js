/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <meta name="description" content="Welcome to my website" />
      </Head>
      <div>
        <h1>Home page</h1>
        <p>Home page content</p>
      </div>
      <div>
        <h2>What We Offer</h2>
        <p>Content what we offer</p>
        <div>
          <h2>Why Choose Us</h2>
          <p>Content why choose us</p>
        </div>
      </div>
    </Layout>
  );
}
