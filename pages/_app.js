/** @jsxImportSource @emotion/react */

import { css, Global } from '@emotion/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          html,
          body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
            background-color: #fafafa;
          }

          main {
            margin: 0 8px;
          }
        `}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
