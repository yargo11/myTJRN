import { ChakraProvider } from '@chakra-ui/react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { theme } from '../styles/theme';


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp
