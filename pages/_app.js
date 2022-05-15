import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import PropTypes from "prop-types";
import * as React from "react";
import createEmotionCache from "../src/createEmotionCashe";
import lightTheme from "../src/theme";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  // const socketInstance = useSocket();
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />{" "}
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="title" content="LiveStreaming | Marketplace" />
        <meta
          name="description"
          content="AppName Live-streaming Marketplace lets you create a product, market a product, create a community, and sell a product in crypto; all without opening a bank or merchant account."
        />
        <meta
          name="keywords"
          content="livestream, shopping, payments, crypto, marketplace, privacy, freedom, security, uncensored"
        />
        <title>Game of thrones</title>
        <link href="/fonts/graphik/stylesheet.css" rel="stylesheet" />
        <link href="/fonts/mortend/stylesheet.css" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={lightTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
