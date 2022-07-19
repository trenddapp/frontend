import { ThemeProvider } from 'styled-components'

import { GlobalStyle, ResetCss } from '@/styles'
import { light } from '@/themes'
import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={light}>
      <ResetCss />
      <GlobalStyle />
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default App
