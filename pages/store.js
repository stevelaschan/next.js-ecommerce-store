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
  border: 4px solid black;
  border-radius: 8px;
  margin: 20px 12px;

  cursor: pointer;
`;

const productNameStyle = css`
  display: flex;
  justify-content: center;
  cursor: pointer;
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
                    width="300"
                    height="150"
                  />
                </Link>
              </div>
              <Link href={`products/${product.id}`} passHref>
                <span css={productNameStyle}>{product.name.toUpperCase()}</span>
              </Link>
              <span css={productPriceStyle}>{product.price / 100} €</span>
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
