'use client'

import { ThemeProvider } from 'styled-components'
import { GlobalCss, ResetCss } from 'pkg/style'
import { lightTheme } from 'pkg/theme'
import { Footer } from 'pkg/component/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
          {children}
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  )
}
