import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};
    font-family: 'Helvetica Neue', sans-serif;
  }
`

export default GlobalStyle
