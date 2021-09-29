import { ChakraProvider } from '@chakra-ui/react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { theme } from '../styles/theme';
import {useRouter} from 'next/router';
import AboutContent from '../components/AboutContent';


function MyApp({ Component, pageProps }) {

  const router = useRouter();
  const { pathname } = router; //asPath,route, try with one of them, if the actual does not work

  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      {pathname === '/' ? <></> : <AboutContent />}
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp
