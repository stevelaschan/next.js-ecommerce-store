/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import cerealIcon from '../util/cereal-icon.jpg';
import dairyProductsIcon from '../util/dairy-product-icon.jpg';
import fruitsIcon from '../util/fruit-icon.jpg';
import itemDatabase from '../util/itemDatabase';
import meatIcon from '../util/meat-icon.jpg';

const iconStyle = css`
  display: flex;
  justify-content: center;
  border: 3px solid black;
  padding: auto;

  .fruitsIcon {
    border: 3px solid black;
  }
`;

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
        <h2>Why Choose Us</h2>
        <p>Content why choose us</p>
        <h2>Our Store Products</h2>
        {/* {itemDatabase.map((item) => {
          return (
            <div key={item.id}>
              <Link href="../util/itemDatabase">
                <a>{item.name}</a>
              </Link> */}
        <div css={iconStyle}>
          <Image
            src={fruitsIcon}
            className="fruitsIcon"
            alt="fruit"
            width="200"
            height="200"
          />
          <Image
            src={dairyProductsIcon}
            className="dairyProducts"
            alt="fruit"
            width="200"
            height="200"
          />
          <Image
            src={cerealIcon}
            className="cerealIcon "
            alt="fruit"
            width="200"
            height="200"
          />
          <Image
            src={meatIcon}
            className="meatIcon "
            alt="fruit"
            width="200"
            height="200"
          />
        </div>
        {/* </div> */}
        {/* );
        })} */}
      </div>
    </Layout>
  );
}
