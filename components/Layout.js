import { css } from '@emotion/react';
import Head from 'next/head';
import Header from './Header';

const mainStyle = css`
  margin: 0;
`;

export default function Layout(props) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main css={mainStyle}>{props.children}</main>
    </>
  );
}
