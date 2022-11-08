'use client'

import { usePathname } from 'next/navigation'
import { ThemeProvider } from 'styled-components'
import { Footer } from 'lib/component/Footer'
import { GlobalCss, ResetCss } from 'lib/style'
import { Header } from 'lib/component/Header'
import { lightTheme } from 'lib/theme'

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
        <body>
          <Header isFixed={!pathname.includes('/dapps')} />
          {children}
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  )
}
