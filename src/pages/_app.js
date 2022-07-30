import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { GlobalStyle, ResetCss } from '@/styles'
import { light } from '@/themes'
import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'

const App = ({ Component, pageProps }) => {
  let isHeaderFixed = !['AuctionPage', 'LotteryPage', 'MarketplacePage'].includes(Component.customPropDisplayName)

  return (
    <ThemeProvider theme={light}>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ResetCss />
      <GlobalStyle />
      <Header isFixed={isHeaderFixed} />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default App
