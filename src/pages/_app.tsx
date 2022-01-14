import { ChakraProvider } from '@chakra-ui/react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { theme } from '../styles/theme';
import {useRouter} from 'next/router';
import AboutContent from '../components/AboutContent';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  const router = useRouter();
  const { pathname } = router; //asPath,route, try with one of them, if the actual does not work

  return (
    <>
      <Head>
        <title>Portal TJRN</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <meta name="description" content="Portal TJRN"/>
      </Head>
      <ChakraProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        {pathname === '/' ? <></> : <AboutContent />}
        <Footer />
      </ChakraProvider>
    </>
  )
}

export default MyApp
