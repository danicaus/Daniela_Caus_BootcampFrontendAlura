import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  ${normalize}

  body {
    margin: 0;
    padding: 0;
    font-family: ${( { theme }) => theme.fontFamilies.firaCondensed};
  }
`

export default GlobalStyle