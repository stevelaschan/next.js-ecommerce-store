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
  border: 4px solid black;
  margin: 12px 24px;
  border-radius: 8px;
  box-shadow: 0 5px 12px 2px rgba(0, 0, 0, 0.15);
  transform: translate3d(0, -5px, 5px);

  :hover {
    cursor: pointer;
    transform: translate3d(0, 0, 0);
  }
`;

const dairyProductsIconStyle = css`
  display: flex;
  border: 4px solid black;
  margin: 12px 24px;
  border-radius: 8px;
  box-shadow: 0 5px 12px 2px rgba(0, 0, 0, 0.15);
  transform: translate3d(0, -5px, 5px);

  :hover {
    cursor: pointer;
    transform: translate3d(0, 0, 0);
  }
`;

const cerealIconStyle = css`
  display: flex;
  border: 4px solid black;
  margin: 12px 24px;
  border-radius: 8px;
  box-shadow: 0 5px 12px 2px rgba(0, 0, 0, 0.15);
  transform: translate3d(0, -5px, 5px);

  :hover {
    cursor: pointer;
    transform: translate3d(0, 0, 0);
  }
`;

const meatIconStyle = css`
  display: flex;
  border: 4px solid black;
  margin: 12px 24px;
  border-radius: 8px;
  box-shadow: 0 5px 12px 2px rgba(0, 0, 0, 0.15);
  transform: translate3d(0, -5px, 5px);

  :hover {
    cursor: pointer;
    transform: translate3d(0, 0, 0);
  }
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
          <h1>Why Choose Us</h1>
          <p>WE are distributing organic products from local farmers</p>
          <h1>Our Store Products</h1>
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
