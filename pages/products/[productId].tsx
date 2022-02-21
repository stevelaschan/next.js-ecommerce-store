import { css } from '@emotion/react';
import { GetServerSidePropsContext } from 'next';
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
  margin-left: 18px;
  margin-right: 18px;
`;

const productDescriptionStyle = css`
  div {
    display: flex;
    justify-content: center;
    margin: 4px;
    font-size: 24px;
  }
`;

const buttonsStyle = css`
  display: flex;
  padding: 28px 12px;
`;

const decrementIncrementButtonStyle = css`
  border-radius: 50%;
  margin-right: 6px;
  margin-left: 6px;
  cursor: pointer;
  background-color: #424242;
  color: white;
  padding: 12px;
`;

const clickAddToCartStyle = css`
  border-radius: 8px;
  cursor: pointer;
  background-color: #424242;
  color: white;
  padding: 12px;
`;

type Props = {
  product: {
    id: number;
    name: string;
    amount: number;
    price: number;
  };
};

type CookieObject = {
  id: number;
  name: string;
  amount: number;
};

export default function SingleProduct(props: Props) {
  const [amount, setAmount] = useState(1);

  // decrement amount added to cart
  function handleDecrementAmount() {
    if (amount <= 1) {
      setAmount(1);
      return;
    }
    setAmount(amount - 1);
  }

  // increment amount added to cart
  function handleIncrementAmount() {
    return setAmount(amount + 1);
  }

  function clickAddToCart(id: number) {
    // 1 get the value of the cookie
    const cookieValue = getParsedCookie('addedToCart') || [];

    // 2. update the cookie
    // 2.1 does id exist in cookie?
    const idExistInArraySome = cookieValue.some(
      (cookieObject: CookieObject) => cookieObject.id === id,
    );
    const idExistInArrayFind = cookieValue.find(
      (cookieObject: CookieObject) => cookieObject.id === id,
    );
    const idNotExistInArrayFilter = cookieValue.filter(
      (cookieObject: CookieObject) => cookieObject.id !== id,
    );

    let newCookie;
    if (idExistInArraySome) {
      // 2.2 if cookie id already exists, update amount
      newCookie = [
        ...idNotExistInArrayFilter,
        {
          id: idExistInArrayFind.id,
          amount: idExistInArrayFind.amount + amount,
          name: idExistInArrayFind.name,
          price: idExistInArrayFind.price,
        },
      ];

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
    // eslint-disable-next-line no-restricted-syntax
    window.location.reload();
    // 3. set the new value of the cookie
    setParsedCookie('addedToCart', newCookie);
  }

  return (
    <Layout>
      <Head>
        <title>{props.product.name}</title>
        <meta name="description" content={props.product.name} />
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
          <div css={buttonsStyle}>
            <button
              onClick={() => handleDecrementAmount()}
              css={decrementIncrementButtonStyle}
            >
              -
            </button>
            <span>{amount}</span>
            <button
              onClick={() => handleIncrementAmount()}
              css={decrementIncrementButtonStyle}
            >
              +
            </button>
            <button
              data-test-id="product-add-to-cart"
              onClick={() => clickAddToCart(props.product.id)}
              css={clickAddToCartStyle}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
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
