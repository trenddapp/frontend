import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};
    font-family: sans-serif;
  }
  main{
    min-height: 90vh;
  }

`

export default GlobalStyle
