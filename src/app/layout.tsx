import { GlobalCss, ResetCss } from 'style'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from 'theme'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Home</title>
        <meta name="description" content="Decentralized applications by TrendDapp" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <ThemeProvider theme={lightTheme}>
        <ResetCss />
        <GlobalCss />
        <body>{children}</body>
      </ThemeProvider>
    </html>
  )
}
