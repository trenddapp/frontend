import { createGlobalStyle } from 'styled-components'
import { zIndices } from '@/themes/base'
import { lightColors } from '@/themes/color'

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
    z-index: ${zIndices.header};
    background-color: ${lightColors.background};
  }
`

export default GlobalStyle
