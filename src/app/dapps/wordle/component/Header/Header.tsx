'use client'

import { useContext } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { AuthContext } from 'lib/context/Auth'
import { Box, Flex } from 'lib/component/Toolkit'
import { ConnectKitButton } from 'connectkit'
import { Profile } from 'lib/component/Profile'

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
  const { userId } = useContext(AuthContext)
  return (
    <HeaderSection>
      <HeaderContainer>
        <HeaderLogo>
          <Box margin="0 0 0 0">
            <Image alt="wordle logo" height={70} src="/dapps/wordle/logo.png" width={70} />
          </Box>
          Wordle
        </HeaderLogo>
        {userId !== null ? <Profile /> : <ConnectKitButton />}
      </HeaderContainer>
    </HeaderSection>
  )
}
