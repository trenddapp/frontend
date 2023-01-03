'use client'

import { usePathname } from 'next/navigation'
import 'react-toastify/dist/ReactToastify.css'
import { ConnectKitProvider } from 'connectkit'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import { WagmiConfig } from 'wagmi'
import { AuthProvider } from 'lib/context/Auth'
import { Footer } from 'lib/component/Footer'
import { GlobalCss, ResetCss, StyledComponentsRegistry } from 'lib/style'
import { Header } from 'lib/component/Header'
import { lightTheme } from 'lib/theme'
import config from 'config'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  const pathname = usePathname()
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Decentralized applications by TrendDapp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </head>
      <StyledComponentsRegistry>
        <ThemeProvider theme={lightTheme}>
          <ResetCss />
          <GlobalCss />
          <WagmiConfig client={config.wagmi}>
            <ConnectKitProvider theme="soft">
              <AuthProvider>
                <body>
                  <ToastContainer
                    position="bottom-left"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                  />
                  <Header isFixed={pathname === null ? true : !pathname.includes('/dapps')} />
                  <main>{props.children}</main>
                  <Footer />
                </body>
              </AuthProvider>
            </ConnectKitProvider>
          </WagmiConfig>
        </ThemeProvider>
      </StyledComponentsRegistry>
    </html>
  )
}
