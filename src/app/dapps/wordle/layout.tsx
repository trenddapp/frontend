'use client'

import { Flex } from 'lib/component/Toolkit'
import { Header } from './component/Header'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Header />
      <Flex flexDirection="column" margin="54px">
        {props.children}
      </Flex>
    </>
  )
}
