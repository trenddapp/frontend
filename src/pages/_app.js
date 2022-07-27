import { ThemeProvider } from 'styled-components'

import { GlobalStyle, ResetCss } from '@/styles'
import { light } from '@/themes'
import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'

const App = ({ Component, pageProps }) => {
  let isHeaderFixed = !['AuctionPage', 'LotteryPage', 'MarketplacePage'].includes(Component.customPropDisplayName)

  return (
    <ThemeProvider theme={light}>
      <ResetCss />
      <GlobalStyle />
      <Header isFixed={isHeaderFixed} />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default App
