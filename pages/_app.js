import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../src/theme';
import GlobalStyle from '../src/theme/GlobalStyle';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portfólio Daniela Caus</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans&family=Fira+Sans+Condensed:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

App.propTypes = PropTypes.node;
