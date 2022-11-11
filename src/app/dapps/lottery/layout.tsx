'use client'

import { Header } from './component/Header'
import { LotteryProvider } from 'lib/context/Lottery'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  return (
    <LotteryProvider>
      <Header />
      {props.children}
    </LotteryProvider>
  )
}
