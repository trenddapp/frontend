import styled from 'styled-components'

import { Box, Flex } from '@/components/Core/Toolkit'
import ConnectButton from '@/components/Core/Wallet/ConnectButton'

const HeaderContainer = styled(Flex)`
  align-items: center;
  height: 100%;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.siteWidth + 50}px;
  padding: 0 96px;
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
`

const Header = () => {
  return (
    <HeaderSection>
      <HeaderContainer>
        <HeaderLogo>
          <img height="45px;" src="/main/lottery.png" />
          Lottery
        </HeaderLogo>
        <ConnectButton />
      </HeaderContainer>
    </HeaderSection>
  )
}

export default Header
