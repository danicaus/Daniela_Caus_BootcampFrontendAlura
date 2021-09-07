import Head from 'next/head';
import { ThemeProvider } from 'styled-components'
import theme from '../src/theme'
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
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
