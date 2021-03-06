import { css } from '@emotion/react';
import {
  Button,
  Card,
  Grid,
  Link,
  List,
  ListItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import NextLink from 'next/link';
import { useState } from 'react';
import Layout from '../components/Layout';
import { getParsedCookie, setParsedCookie } from '../util/cookies';
import { getProducts } from '../util/database';

const shoppingCartHeaderStyle = css`
  display: flex;
  justify-content: center;
  margin-top: 96px;
`;

type Product = {
  id: number;
  type: string;
  price: number;
};

type AddedToCart = {
  id: number;
  amount: number;
  name: string;
};

type Props = {
  products: Product[];
};

export default function Cart(props: Props) {
  const cartItems = getParsedCookie('addedToCart') || [];
  const [cart, setCart] = useState(cartItems);

  // calculate total price
  const productPrice = props.products.map((product) => product.price / 100);

  // delete item from cart
  const deleteFromCart = (id: number) => {
    const newCookie = cart.filter((cookieObject: AddedToCart) => {
      return cookieObject.id !== id;
    });
    setCart(newCookie);
    setParsedCookie('addedToCart', newCookie);
  };

  return (
    <Layout>
      <Head>
        <title>Cart</title>
        <meta name="description" content="Cart" />
      </Head>
      <h1 css={shoppingCartHeaderStyle}>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div>
          Your Cart is empty. <NextLink href="/store">Go shopping</NextLink>
        </div>
      ) : (
        <Grid container spacing={1}>
          <Grid item md={9} xs={12}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell />
                    <TableCell>Product</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Delete Item</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartItems.map((item: AddedToCart) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <NextLink href={`products/${item.id}`} passHref>
                          <Link>
                            <Image
                              src={`/store-products/${item.name}.jpg`}
                              alt={item.name}
                              width={100}
                              height={70}
                            />
                          </Link>
                        </NextLink>
                      </TableCell>

                      <TableCell>
                        <NextLink
                          href={`/products/${item.id}`}
                          passHref
                          data-test-id={`cart-product-${item.id}`}
                        >
                          <Link>
                            <Typography>{item.name.toUpperCase()}</Typography>
                          </Link>
                        </NextLink>
                      </TableCell>
                      <TableCell align="right">
                        <Typography>{item.amount}</Typography>
                      </TableCell>
                      <TableCell align="right">
                        ???{item.amount * productPrice[item.id - 1]}
                      </TableCell>
                      <TableCell align="right">
                        <Button
                          variant="contained"
                          color="secondary"
                          data-test-id={`cart-product-remove-${item.id}`}
                          onClick={() => deleteFromCart(item.id)}
                        >
                          x
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item md={3} xs={12}>
            <Card>
              <List>
                <ListItem>
                  <Typography variant="h5" data-test-id="cart-total">
                    Total (
                    {cartItems.reduce(
                      (a: number, c: AddedToCart) => a + c.amount,
                      0,
                    )}{' '}
                    items) : ???
                    {cartItems.reduce(
                      (a: number, c: AddedToCart) =>
                        a + c.amount * productPrice[c.id - 1],
                      0,
                    )}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Link href="/checkout">
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      data-test-id="cart-checkout"
                    >
                      Check Out
                    </Button>
                  </Link>
                </ListItem>
              </List>
            </Card>
          </Grid>
        </Grid>
      )}
    </Layout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const products = await getProducts();
  const addedToCartOnCookies = context.req.cookies.addedToCart || '[]';
  const addedToCart = JSON.parse(addedToCartOnCookies);
  console.log('products', products);
  console.log('addedToCart', addedToCart);

  return {
    props: {
      products: products,
      addedToCart: addedToCart,
    },
  };
}
