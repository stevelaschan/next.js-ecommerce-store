import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import grainIcon from '../util/cereal-icon.jpg';
import dairyIcon from '../util/dairy-product-icon.jpg';
import fruitsAndVegetablesIcon from '../util/fruit-icon.jpg';
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

const iconsStyle = css`
  display: flex;
  justify-content: center;
  padding: auto;
`;

const iconStyle = css`
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
          <p>Welcome to the Online Store of WE-Commerce</p>
          <br />
          <h1>Why Choose Us</h1>
          <p>We are distributing products from local farmers.</p>
          <p>We only sell organic products.</p>
          <p>We support local farmers in their digitalisation</p>
          <br />
          <h1>Our Store Products</h1>
        </div>
        <div css={iconsStyle}>
          <div css={iconStyle}>
            <Image
              src={fruitsAndVegetablesIcon}
              className="fruitsAndVegetablesIcon"
              alt="fruitsAndVegetablesIcon"
              width="200"
              height="200"
            />
          </div>
          <div css={iconStyle}>
            <Image
              src={dairyIcon}
              className="dairyIcon"
              alt="dairyIcon"
              width="200"
              height="200"
            />
          </div>
          <div css={iconStyle}>
            <Image
              src={grainIcon}
              className="grainIcon"
              alt="grainIcon"
              width="200"
              height="200"
            />
          </div>
          <div css={iconStyle}>
            <Image
              src={meatIcon}
              className="meatIcon"
              alt="meatIcon"
              width="200"
              height="200"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
