import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import grainIcon from '../util/cereal-icon.jpg';
import dairyIcon from '../util/dairy-product-icon.jpg';
import fruitsAndVegetablesIcon from '../util/fruit-icon.jpg';
import meatIcon from '../util/meat-icon.jpg';

const backgroundImage = css`
  background-image: url('https://images.pexels.com/photos/1443867/pexels-photo-1443867.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  background-position: 0 100%;
  background-size: cover;
`;

const mainHeaderStyle = css`
  display: flex;
  justify-content: center;
  padding: auto;

  h1 {
    display: flex;
    justify-content: center;
    font-size: 48px;
    padding: 16px;
    color: white;
    border: 1px solid #383838;
    background-color: #2b5a6d;
    opacity: 0.7;
    border-radius: 8px;
    /* box-shadow: 0 0 0 6px rgb(40 50 40 / 25%); */
  }
`;

const homePageStyle = css`
  h2 {
    display: flex;
    justify-content: center;
    margin-top: 0;
    font-size: 36px;
    font-weight: 8px;
    color: #383838;
  }

  p {
    display: flex;
    justify-content: center;
    color: white;
  }
`;

const iconsStyle = css`
  display: flex;
  justify-content: center;
  padding: auto;
  margin-top: 18px;
`;

const iconStyle = css`
  display: flex;
  border: 4px solid #383838;
  margin: 12px 24px;
  border-radius: 8px;
  box-shadow: 0 5px 12px 2px rgba(0, 0, 0, 0.15);
  /* transform: translate3d(0, -5px, 5px); */

  /* :hover {
    cursor: pointer;
    transform: translate3d(0, 0, 0);
  } */
`;

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <meta name="description" content="Welcome to my website" />
      </Head>
      <div css={homePageStyle}>
        <div css={backgroundImage}>
          <br />
          <br />
          <br />
          <br />
          <br />
          {/* <h2>Buy your products from local farmers around Austria</h2> */}
          <div css={mainHeaderStyle}>
            <h1>FarmHouse E-Commerce</h1>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <br />
        <br />
        <h2>Categories We Offer</h2>
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
      <br />
      <br />
      <p>
        © Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
        elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
        est Lorem ipsum dolor sit amet.
      </p>
    </Layout>
  );
}
