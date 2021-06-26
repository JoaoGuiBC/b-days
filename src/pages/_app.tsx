import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../style/globals';
import Theme from '../style/theme';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp
