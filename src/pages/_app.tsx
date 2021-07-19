import Head from 'next/head';
import { AnimateSharedLayout } from 'framer-motion';
import { ThemeProvider } from 'styled-components';

import { AuthContextProvider } from '../contexts/authContext';

import { GlobalStyle } from '../styles/globals';
import Theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthContextProvider>
        <ThemeProvider theme={Theme}>
          <AnimateSharedLayout>
            <Head>
              <title>B-Days</title>
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />
          </AnimateSharedLayout>
        </ThemeProvider>
      </AuthContextProvider>
    </>
  );
}

export default MyApp
