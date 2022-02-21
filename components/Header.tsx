import { css } from '@emotion/react';
import Link from 'next/link';
import { getParsedCookie } from '../util/cookies';

const headerStyle = css`
  display: flex;
  justify-content: flex-end;
  background-color: #228b22;
  font-size: 24px;
  padding: 24px 16px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  /* box-shadow: 0 5px 12px 2px rgba(0, 0, 0, 0.15); */

  a {
    display: flex;
    cursor: pointer;
    margin: 0 24px;
    color: white;
    text-decoration: none;
  }

  a:hover {
    transition: all 0.3s ease-in-out;
    border-bottom: 1px solid;
  }
`;

type C = {
  amount: number;
};

export default function Header() {
  const cartItems = getParsedCookie('addedToCart') || [];

  return (
    <header css={headerStyle}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/store">
        <a>Our Store</a>
      </Link>
      <div>
        <Link href="/cart" data-test-id="cart-link">
          <a data-test-id="cart-count">
            Cart ({cartItems.reduce((a: number, c: C) => a + c.amount, 0)})
          </a>
        </Link>
      </div>
    </header>
  );
}