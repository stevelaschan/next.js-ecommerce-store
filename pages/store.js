import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import { getProducts } from '../util/database';

const ourProductsStyle = css`
  display: flex;
  justify-content: center;
  margin-top: 48px;
`;

const productsListStyle = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const productsImagesStyle = css`
  display: flex;
  border: 2px solid black;
  border-radius: 4px;
  margin: 24px 8px 4px 8px;
  box-shadow: 0 5px 12px 2px rgba(0, 0, 0, 0.15);
  transform: translate3d(0, -5px, 5px);

  :hover {
    cursor: pointer;
    transform: translate3d(0, 0, 0);
  }
`;

const productNameStyle = css`
  display: flex;
  justify-content: center;
  margin-top: 0;
  text-decoration: none;
  border: 1px solid black;
  border-radius: 8px;
  margin: 4px 126px;

  :hover {
    cursor: pointer;
  }
`;

const productPriceStyle = css`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
`;

export default function Store(props) {
  return (
    <Layout>
      <Head>
        <title>Our Store</title>
        <meta name="description" content="Store" />
      </Head>
      <h1 css={ourProductsStyle}>Our Products</h1>
      <div css={productsListStyle}>
        {props.products.map((product) => {
          return (
            <div key={product.id}>
              <div css={productsImagesStyle}>
                <Link
                  href={`products/${product.id}`}
                  data-test-id={`product-${product.id}`}
                  passHref
                >
                  <Image
                    src={`/store-products/${product.name}.jpg`}
                    alt={product.name}
                    width="340"
                    height="190"
                  />
                </Link>
              </div>
              <Link href={`products/${product.id}`}>
                <a css={productNameStyle}>{product.name.toUpperCase()}</a>
              </Link>
              <span css={productPriceStyle}>
                {product.price / 100} € per Portion
              </span>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const products = await getProducts();

  return {
    props: {
      products: products,
    },
  };
}
