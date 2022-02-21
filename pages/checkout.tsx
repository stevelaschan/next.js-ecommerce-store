import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { setParsedCookie } from '../util/cookies';

const userPersonalStyle = css`
  display: grid;
  grid-template-rows: 48px 48px 48px 48px 48px;
  /* justify-content: center; */
  margin: 48px;
  /* border: 2px solid black;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 12px;
  background-color: #424242;
  color: white; */

  label {
    margin: 18px;
  }
`;

const userCardStyle = css`
  display: grid;
  grid-template-rows: 48px 48px;
  /* justify-content: center; */
  margin: 48px;
  flex-direction: row;
  /* border: 2px solid black;
  border-radius: 12px;
  background-color: #424242;
  color: white;
  padding: 12px; */

  label {
    margin: 18px;
  }
`;

const inputStyle = css`
  input {
    border-radius: 6px;
    margin: 6px 3rem;
    padding: 4px 8px;
    width: 200px;
  }
`;

const confirmOrderButtonStyle = css`
  border-radius: 8px;
  cursor: pointer;
  background-color: #424242;
  color: white;
  padding: 12px;
  font-size: 18px;
`;

export default function Checkout() {
  // delete all items from cart when confirming order
  const deleteAllFromCart = () => {
    setParsedCookie('addedToCart', []);
  };

  return (
    <Layout>
      <Head>
        <title>Our Store</title>
        <meta name="description" content="Store" />
      </Head>
      <h1>Confirm Your Order</h1>
      <form>
        <h2>Shipping Information</h2>
        <div css={userPersonalStyle}>
          <label css={inputStyle}>
            First name{' '}
            <input data-test-id="checkout-first-name" placeholder="Max" />
          </label>
          <label css={inputStyle}>
            Last name{' '}
            <input data-test-id="checkout-last-name" placeholder="Mustermann" />
          </label>
          <label css={inputStyle}>
            E-mail{' '}
            <input
              data-test-id="checkout-email"
              placeholder="example@example.com"
            />
          </label>
          <label css={inputStyle}>
            Address{' '}
            <input
              data-test-id="checkout-address"
              placeholder="Peterstreet 100"
            />
          </label>
          <label css={inputStyle}>
            Postal Code{' '}
            <input
              data-test-id="checkout-postal-code"
              type="email"
              placeholder="100"
            />
          </label>
          <label css={inputStyle}>
            Country{' '}
            <input data-test-id="checkout-country" placeholder="Neverland" />
          </label>
        </div>
        <h2>Payment Information</h2>
        <div css={userCardStyle}>
          <label css={inputStyle}>
            Credit Card Number{' '}
            <input
              data-test-id="checkout-credit-card"
              placeholder="1234 5678 9123 4567"
            />
          </label>
          <label css={inputStyle}>
            Expiration Date{' '}
            <input
              data-test-id="checkout-expiration-date"
              placeholder="10/22"
            />
          </label>
          <label css={inputStyle}>
            Security Code{' '}
            <input data-test-id="checkout-security-code" placeholder="123" />
          </label>
        </div>
      </form>
      <Link href="/thankyou" passHref>
        <button
          data-test-id="checkout-confirm-order"
          css={confirmOrderButtonStyle}
          onClick={() => deleteAllFromCart()}
        >
          Confirm Order
        </button>
      </Link>
    </Layout>
  );
}
