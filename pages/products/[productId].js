import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Layout from '../../components/Layout';
import { getParsedCookie, setParsedCookie } from '../../util/cookies';
import { getProductById } from '../../util/database';

const productStyle = css`
  display: flex;
  justify-content: center;
`;

const productHeadingStyle = css`
  display: flex;
  justify-content: center;
`;
const productPictureStyle = css`
  display: flex;
  justify-content: center;
`;

const productDescriptionStyle = css`
  div {
    display: flex;
    justify-content: center;
    margin: 4px;
    font-size: 24px;
  }
`;

const clickAddToCartStyle = css`
  display: flex;
  justify-content: center;
  margin: 18px;
`;

export default function SingleProduct(props) {
  const i = 0;
  const [amount, setAmount] = useState(1);
  // const [addedToArray, setAddedToArray] = useState(props.addedToCart);

  function clickAddToCart(id) {
    // 1 get the value of the cookie
    const cookieValue = getParsedCookie('addedToCart') || [];

    // 2. update the cookie
    // 2.1 does id exist in cookie?
    const idExistInArray = cookieValue.some((cookieObject) => {
      return cookieObject.id === id;
    });

    let newCookie;
    if (idExistInArray) {
      // 2.2 if cookie id already exists, update amount and price
      newCookie = cookieValue.map((cookieObject) => {
        return {
          id: cookieObject.id,
          amount: cookieObject.amount + amount,
          name: props.product.name,
          price: props.product.price * amount,
        };
      });

      // 2.3 add new cookie
    } else {
      newCookie = [
        ...cookieValue,
        {
          id: id,
          amount: amount,
          name: props.product.name,
          price: props.product.price,
        },
      ];
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
      <br />
      <br />
      <h1 css={productHeadingStyle}>{props.product.name.toUpperCase()}</h1>
      <br />
      <br />
      <br />
      <div css={productStyle}>
        <div css={productPictureStyle}>
          <Image
            src={`/store-products/${props.product.name}.jpg`}
            width="600"
            height="400"
            data-test-id="product-image"
          />
        </div>
        <div css={productDescriptionStyle}>
          <div>{props.product.name.toUpperCase()}</div>
          <div data-test-id="product-price">
            {props.product.price / 100} € per Portion
          </div>
          <form css={clickAddToCartStyle}>
            <select
              value={amount}
              onChange={(e) => setAmount(e.currentTarget.value)}
              data-test-id="product-quantity"
            >
              <option value={i + 1}>1</option>
              <option value={i + 2}>2</option>
              <option value={i + 3}>3</option>
              <option value={i + 4}>4</option>
              <option value={i + 5}>5</option>
              <option value={i + 6}>6</option>
              <option value={i + 7}>7</option>
              <option value={i + 8}>8</option>
              <option value={i + 9}>9</option>
            </select>
            {console.log(typeof amount)}
            <button
              onClick={() => clickAddToCart(props.product.id)}
              data-test-id="product-add-to-cart"
            >
              Add to Cart
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  // product list
  const productId = context.query.productId;
  const product = await getProductById(productId);
  // 1. get the cookies from the browser
  // 2. pass the cookies to the frontend
  const addedToCartOnCookies = context.req.cookies.addedToCart || '[]';
  // if there is no addedToCart cookie on the browser we store to an [] otherwise we get the cooke value and parse it
  const addedToCart = JSON.parse(addedToCartOnCookies);

  return {
    props: {
      product: product,
      addedToCart: addedToCart,
    },
  };
}
