import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { GlobalStyles, theme } from "styles";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>zero quinze</title>

        <link rel="shortcut icon" href="/favicon.jpg" />

        <meta
          name="description"
          content="Interligando itapê e região através de código."
        />
      </Head>

      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
