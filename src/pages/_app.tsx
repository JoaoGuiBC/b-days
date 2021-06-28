import { AnimateSharedLayout } from 'framer-motion';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../styles/globals';
import Theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <AnimateSharedLayout>
          <GlobalStyle />
          <Component {...pageProps} />
        </AnimateSharedLayout>
      </ThemeProvider>
    </>
  );
}

export default MyApp
