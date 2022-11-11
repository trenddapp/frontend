'use client'

import { CurrencyProvider } from 'lib/context/Currency'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  return <CurrencyProvider>{props.children}</CurrencyProvider>
}
