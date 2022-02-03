/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import Link from 'next/link';

const headerStyle = css`
  display: flex;
  justify-content: flex-end;
  background-color: #2e2e2e;
  font-size: 24px;
  padding: 24px 16px;
  border-radius: 4px;

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

export default function Header() {
  return (
    <header css={headerStyle}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="store">
        <a>Our Store</a>
      </Link>
      <Link href="about">
        <a>About</a>
      </Link>
    </header>
  );
}
