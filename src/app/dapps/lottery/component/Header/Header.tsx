'use client'

import Image from 'next/image'
import { ConnectKitButton } from 'connectkit'
import styled from 'styled-components'
import { Box, Flex } from 'lib/component/Toolkit'

const HeaderContainer = styled(Flex)`
  align-items: center;
  height: 100%;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.siteWidth + 50}px;
  padding: 0 35px;
  position: relative;
  z-index: ${({ theme }) => theme.zIndices.header};
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 0 96px;
  }
`

const HeaderLogo = styled(Flex)`
  align-items: center;
  cursor: pointer;
  flex-direction: row;
  font-size: 20px;
  font-weight: 500;
  justify-content: center;
`

const HeaderSection = styled(Box)`
  background-color: ${({ theme }) => theme.colors.background};
  height: 64px;
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.zIndices.header - 1};
`

export default function Header() {
  return (
    <HeaderSection>
      <HeaderContainer>
        <HeaderLogo>
          <Image alt="lottery logo" height={45} src="/dapps/lottery/logo.png" width={45} />
          Lottery
        </HeaderLogo>
        <ConnectKitButton />
      </HeaderContainer>
    </HeaderSection>
  )
}
