import { css } from '@emotion/react';
import Link from 'next/link';
import { getParsedCookie } from '../util/cookies';

const headerStyle = css`
  position: fixed;
  z-index: 3;
  top: 0;
  width: 100%;
  height: 8vh;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(30px);
  box-shadow: 0 0 5px rgba(200, 200, 200, 0.3);
  display: flex;
  gap: 14px;
  align-items: center;
  padding: 0 8px;
  justify-content: flex-end;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  font-size: 24px;
  /* box-shadow: 0 5px 12px 2px rgba(0, 0, 0, 0.15); */

  a {
    display: flex;
    cursor: pointer;
    margin: 0 24px;
    color: #505050;
    text-decoration: none;
  }

  a:hover {
    transition: all 0.3s ease-in-out;
    border-bottom: 1px solid;
  }
`;

const shoppingCartStyle = css`
  display: flex;
`;

const cartItemsStyle = css`
  display: flex;
  font-size: 18px;
`;

type CartItems = {
  id: number;
  price: number;
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
            <div css={shoppingCartStyle}>
              <img src="/shopping-cart-icon.png" alt="" height="28px" />
            </div>
            <span css={cartItemsStyle}>
              {cartItems.reduce((a: number, c: CartItems) => a + c.amount, 0)}
            </span>
          </a>
        </Link>
      </div>
    </header>
  );
}
