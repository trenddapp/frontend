import { GlobalStyle, ResetCss } from '../styles'
import { light } from '../themes'
import { ThemeProvider } from 'styled-components'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={light}>
      <ResetCss />
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
