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
  const [amount, setAmount] = useState(1);
  // const [addedToArray, setAddedToArray] = useState(props.addedToCart);

  function clickAddToCart(id) {
    // 1 get the value of the cookie
    const cookieValue = getParsedCookie('addedToCart') || [];

    // 2. update the cookie
    // 2.1 does id exist in cookie?
    // const idExistInArray = cookieValue.some((cookieObject) => {
    //   return cookieObject.id === id;
    // });

    // let newCookie;
    // if (idExistInArray) {
    //   // 2.2 pass anything that is not an id in the cookie, delete if cookie id is already in cookie
    //   newCookie = cookieValue.filter((cookieObject) => {
    //     return cookieObject.amount === amount;
    //   });

    //   // 2.3 add new cookie
    // } else {
    const newCookie = [
      ...cookieValue,
      { id: id, amount: amount, name: props.product.name },
    ];
    // }

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
      <div css={productPictureStyle}>
        <Image
          src={`/store-products/${props.product.name}.jpg`}
          width="600"
          height="400"
          data-test-id="product-image"
        />
      </div>
      <div css={productDescriptionStyle}>
        <div>id: {props.product.id}</div>
        <div>{props.product.name}</div>
        <div>{props.product.type}</div>
        <div data-test-id="product-price">{props.product.price} Cent</div>
        <form css={clickAddToCartStyle}>
          Choose an amount:
          <select
            value={amount}
            onChange={(e) => setAmount(e.currentTarget.value)}
            data-test-id="product-quantity"
          >
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
          <button
            onClick={() => clickAddToCart(props.product.id)}
            data-test-id="product-add-to-cart"
          >
            Add to Cart
          </button>
          {console.log(amount)}
          {/* {productIsAddedToCart ? 'Add to Cart' : ''} */}
        </form>
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
