'use client'

import { usePathname } from 'next/navigation'
import { ConnectKitProvider } from 'connectkit'
import { ThemeProvider } from 'styled-components'
import { WagmiConfig } from 'wagmi'
import { AuthProvider } from 'lib/context/Auth'
import { Footer } from 'lib/component/Footer'
import { GlobalCss, ResetCss } from 'lib/style'
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
        <link rel="icon" href="/favicon.png" />
      </head>
      <ThemeProvider theme={lightTheme}>
        <ResetCss />
        <GlobalCss />
        <WagmiConfig client={config.wagmi}>
          <ConnectKitProvider theme="soft">
            <AuthProvider>
              <body>
                <Header isFixed={pathname === null ? true : !pathname.includes('/dapps')} />
                <main>{props.children}</main>
                <Footer />
              </body>
            </AuthProvider>
          </ConnectKitProvider>
        </WagmiConfig>
      </ThemeProvider>
    </html>
  )
}
