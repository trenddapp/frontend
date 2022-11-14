'use client'

import { Header } from './component/Header'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Header />
      {props.children}
    </>
  )
}
