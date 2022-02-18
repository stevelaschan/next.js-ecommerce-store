import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const userPersonalStyle = css`
  display: flex;
  justify-content: center;
  margin: 48px;

  label {
    margin-right: 18px;
  }
`;

const userAddressStyle = css`
  display: flex;
  justify-content: center;
  margin: 48px;

  label {
    margin-right: 18px;
  }
`;

const userCardStyle = css`
  display: flex;
  justify-content: center;
  margin: 48px;

  label {
    margin-right: 18px;
  }
`;

export default function Checkout() {
  return (
    <Layout>
      <Head>
        <title>Our Store</title>
        <meta name="description" content="Store" />
      </Head>
      <form>
        <div css={userPersonalStyle}>
          <label>
            First name <input data-test-id="checkout-first-name" />
          </label>
          <label>
            Last name <input data-test-id="checkout-last-name" />
          </label>
          <label>
            E-mail <input data-test-id="checkout-email" />
          </label>
        </div>
        <div css={userAddressStyle}>
          <label>
            Address <input data-test-id="checkout-address" />
          </label>
          <label>
            Postal Code <input data-test-id="checkout-postal-code" />
          </label>
          <label>
            Country <input data-test-id="checkout-country" />
          </label>
        </div>
        <div css={userCardStyle}>
          <label>
            Credit Card Number <input data-test-id="checkout-credit-card" />
          </label>
          <label>
            Expiration Date <input data-test-id="checkout-expiration-date" />
          </label>
          <label>
            Security Code <input data-test-id="checkout-security-code" />
          </label>
        </div>
      </form>
      <Link href="/thankyou" passHref>
        <button data-test-id="checkout-confirm-order">Confirm Order</button>
      </Link>
    </Layout>
  );
}
