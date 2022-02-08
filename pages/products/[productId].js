import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import BuyButton from '../../components/BuyButton';
import Layout from '../../components/Layout';
import { getProductById } from '../../util/database';

const productHeadingStyle = css`
  display: flex;
  justify-content: center;
`;
const productPictureStyle = css`
  display: flex;
  justify-content: center;
  border: 2px solid black;
`;

const productDescriptionStyle = css`
  div {
    display: flex;
    justify-content: center;
  }
`;

export default function SingleProduct(props) {
  return (
    <Layout>
      <Head>
        <title>{props.product.name}</title>
        <meta description={props.product.name} />
      </Head>

      <h1 css={productHeadingStyle}>{props.product.name.toUpperCase()}</h1>
      <Image
        css={productPictureStyle}
        src={`/store-products/${props.product.name}.jpg`}
        width="600"
        height="400"
      />
      <div css={productDescriptionStyle}>
        <div>id: {props.product.id}</div>
        <div>name: {props.product.name}</div>
        <div>product type: {props.product.type}</div>
        <div>price: {props.product.price}</div>
        <BuyButton />
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const productId = context.query.productId;
  const product = await getProductById(productId);

  return {
    props: {
      product: product,
    },
  };
}
