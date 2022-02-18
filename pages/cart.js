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
import { getParsedCookie } from '../util/cookies';
import { getProducts } from '../util/database';

export default function Cart() {
  // const [productIsInCart, setProductIsInCart] = useState(props.addedToCart);
  const cartItems = getParsedCookie('addedToCart');
  console.log(cartItems);

  return (
    <Layout>
      <Head>
        <title>About</title>
        <meta name="description" content="About the Store" />
      </Head>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div>
          Cart is empty. <NextLink href="/">Go shopping</NextLink>
        </div>
      ) : (
        <Grid container spacing={1}>
          <Grid item md={9} xs={12}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Action</TableCell>
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
                              width={50}
                              height={50}
                            />
                          </Link>
                        </NextLink>
                      </TableCell>

                      <TableCell>
                        <NextLink href={`/product/${item.slug}`} passHref>
                          <Link>
                            <Typography>{item.name}</Typography>
                          </Link>
                        </NextLink>
                      </TableCell>
                      <TableCell align="right">
                        <Typography>{item.amount}</Typography>
                      </TableCell>
                      <TableCell align="right">${item.price}</TableCell>
                      <TableCell align="right">
                        <Button variant="contained" color="secondary">
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
                  <Typography variant="h2">
                    Subtotal ({cartItems.reduce((a, c) => a + c.amount, 0)}{' '}
                    items) : $
                    {cartItems.reduce((a, c) => a + c.amount * c.price, 0)}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Button variant="contained" color="primary" fullWidth>
                    Check Out
                  </Button>
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

// function deleteFromCart(id) {
//   // 1 get the value of the cookie
//   const cookieValue = getParsedCookie('addedToCart') || [];
//   const newCookie = cookieValue.filter((cookieObject) => {
//     return cookieObject.id !== id;
//   });
//   return setParsedCookie('addedToCart', newCookie);
// }

{
  /* <div>
<h1>Cart Checkout Page</h1>
<p>This is the checkout page</p>
</div>
<h2>Your products</h2>
{cartItems.map((item) => {
return (
  <div key={item.id}>
    <div>Name: {item.name}</div>
    <div>Amount: {item.amount}</div>
  </div>
);
})}
<button onclick={deleteFromCart(props.addedToCart.id)}>delete</button> */
}
