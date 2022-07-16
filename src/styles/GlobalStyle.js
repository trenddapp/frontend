import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};
    font-family: 'Helvetica Neue', sans-serif;
  }
  main{
    min-height: 90vh;
  }
  header{
    position: fixed;
    top: 0;
    width: 100%;
    z-index: ${({ theme }) => theme.zIndices.header};
    background-color: ${({ theme }) => theme.colors.background};
  }
`

export default GlobalStyle
