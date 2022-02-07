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

const homePageStyle = css`
  h1 {
    display: flex;
    justify-content: center;
  }

  h2 {
    display: flex;
    justify-content: center;
  }

  p {
    display: flex;
    justify-content: center;
  }
`;

const iconStyle = css`
  display: flex;
  justify-content: center;
  padding: auto;
`;

const fruitsIconStyle = css`
  display: flex;
  border: 3px solid black;
  margin-left: 24px;
  margin-right: 24px;
`;

const dairyProductsIconStyle = css`
  display: flex;
  border: 3px solid black;
  margin-left: 24px;
  margin-right: 24px;
`;

const cerealIconStyle = css`
  display: flex;
  border: 3px solid black;
  margin-left: 24px;
  margin-right: 24px;
`;
const meatIconStyle = css`
  display: flex;
  border: 3px solid black;
  margin-left: 24px;
  margin-right: 24px;
`;

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <meta name="description" content="Welcome to my website" />
      </Head>
      <div css={homePageStyle}>
        <div>
          <h1>Home page</h1>
          <p>Home page content</p>
          <h2>Why Choose Us</h2>
          <p>WE are distributing organic products from local farmers</p>
          <h2>Our Store Products</h2>
        </div>
        {/* {itemDatabase.map((item) => {
          return (
            <div key={item.id}>
              <Link href="../util/itemDatabase">
                <a>{item.name}</a>
              </Link> */}
        <div css={iconStyle}>
          <div css={fruitsIconStyle}>
            <Image
              src={fruitsIcon}
              className="fruitsIcon"
              alt="fruit"
              width="200"
              height="200"
            />
          </div>
          <div css={dairyProductsIconStyle}>
            <Image
              src={dairyProductsIcon}
              className="dairyProductsIcon"
              alt="dairyProducts"
              width="200"
              height="200"
            />
          </div>
          <div css={cerealIconStyle}>
            <Image
              src={cerealIcon}
              className="cerealIcon "
              alt="cereal"
              width="200"
              height="200"
            />
          </div>
          <div css={meatIconStyle}>
            <Image
              src={meatIcon}
              className="meatIcon "
              alt="meat"
              width="200"
              height="200"
            />
          </div>
        </div>
        {/* </div> */}
        {/* );
        })} */}
      </div>
    </Layout>
  );
}
