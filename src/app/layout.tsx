'use client'

import { usePathname } from 'next/navigation'
import { ThemeProvider } from 'styled-components'
import { GlobalCss, ResetCss } from 'pkg/style'
import { lightTheme } from 'pkg/theme'
import { Footer } from 'pkg/component/Footer'
import { Header } from 'pkg/component/Header'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  return (
    <html lang="en">
      <head>
        <title>Trenddapp</title>
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
