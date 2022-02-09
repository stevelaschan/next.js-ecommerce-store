import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Layout from '../../components/Layout';
import { getParsedCookie, setParsedCookie } from '../../util/cookies';
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
  const [amount, setAmount] = useState(0);
  // const [addedToArray, setAddedToArray] = useState(props.addedToCart);

  function clickAddToCart(id) {
    // 1 get the value of the cookie
    const cookieValue = getParsedCookie('addedToCart') || [];

    // 2. update the cookie
    const idExistInArray = cookieValue.some((cookieObject) => {
      return cookieObject.id === id;
    });

    let newCookie;
    if (idExistInArray) {
      return (newCookie = [...cookieValue, { id: id, amount: amount }]);
    }

    // 3. set the new value of the cookie
    setParsedCookie('addedToCart', newCookie);
  }

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
        <form>
          Choose an amount:
          <select
            value={amount}
            onChange={(e) => setAmount(e.currentTarget.value)}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
          <button onClick={clickAddToCart(props.product.id)}>
            Add to Cart
          </button>
          {console.log(amount)}
        </form>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  // product list
  const productId = context.query.productId;
  const product = await getProductById(productId);
  // added to cart amount
  const addedToCartOnCookies = context.req.cookies.addedToCart || '[]';
  const addedToCart = JSON.parse(addedToCartOnCookies);

  return {
    props: {
      product: product,
      addedToCart: addedToCart,
    },
  };
}
