import { css } from '@emotion/react';
import Link from 'next/link';

const thankYouStyle = css`
  display: flex;
  justify-content: center;
`;

const goBackToStoreStyle = css`
  display: flex;
  justify-content: center;
`;

export default function ThankYou() {
  return (
    <div>
      <h1 css={thankYouStyle}>Thank you for your order</h1>
      <Link href="/">
        <a css={goBackToStoreStyle}>Go back to Our Store</a>
      </Link>
    </div>
  );
}
