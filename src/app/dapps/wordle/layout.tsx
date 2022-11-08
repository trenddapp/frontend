'use client'

import styled from 'styled-components'
import { Flex } from 'lib/component/Toolkit'
import { Header } from './component/Header'

const Container = styled.main``

export default function WordleLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Header />
      <Flex flexDirection="column" margin="54px">
        {children}
      </Flex>
    </Container>
  )
}
