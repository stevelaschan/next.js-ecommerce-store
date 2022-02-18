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
import Head from 'next/head';
import Image from 'next/image';
import NextLink from 'next/link';
import Layout from '../components/Layout';
import { getParsedCookie, setParsedCookie } from '../util/cookies';
import { getProducts } from '../util/database';

export default function Cart() {
  const cartItems = getParsedCookie('addedToCart') || [];
  console.log(cartItems);

  // function deleteFromCart(id) {
  //   // 1 get the value of the cookie
  //   const cookieValue = getParsedCookie('addedToCart');
  //   const newCookie = cookieValue.filter((cookieObject) => {
  //     return cookieObject.id !== id;
  //   });
  //   setParsedCookie('addedToCart', newCookie);
  // }

  return (
    <Layout>
      <Head>
        <title>Cart</title>
        <meta name="description" content="Cart" />
      </Head>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div>
          Cart is empty. <NextLink href="/store">Go shopping</NextLink>
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
                  {cartItems.map((item) => (
                    <TableRow key={item._id}>
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
                      <TableCell align="right">€{item.price / 100}</TableCell>
                      <TableCell align="right">
                        <Button
                          variant="contained"
                          color="secondary"
                          data-test-id={`cart-product-remove-${item.id}`}
                          // onClick={deleteFromCart(item.id)}
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
          <Grid md={3} xs={12}>
            <Card>
              <List>
                <ListItem>
                  <Typography variant="h5" data-test-id="cart-total">
                    Total ({cartItems.reduce((a, c) => a + c.amount, 0)} items)
                    : €
                    {cartItems.reduce(
                      (a, c) => a + (c.amount * c.price) / 100,
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

export async function getServerSideProps() {
  const products = await getProducts();

  return {
    props: {
      products: products,
    },
  };
}
