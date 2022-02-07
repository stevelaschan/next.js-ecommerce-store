import Head from 'next/head';
import Header from './Header';
import SearchBar from './SeachBar';

export default function Layout(props) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SearchBar />
      <main>{props.children}</main>
    </>
  );
}
