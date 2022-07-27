import styled from 'styled-components'

import { Box, Flex } from '@/components/Core/Toolkit'
import { Profile } from '@/components/Core/Profile'
import { useWeb3Profile } from '@/hooks'
import ConnectButton from '@/components/Core/Wallet/ConnectButton'

const HeaderContainer = styled(Flex)`
  align-items: center;
  height: 100%;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.siteWidth + 50}px;
  padding: 0 35px;

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
  z-index: ${({ theme }) => theme.zIndices.header};
`

const Header = () => {
  const { isActive, isActivating } = useWeb3Profile()

  return (
    <HeaderSection>
      <HeaderContainer>
        <HeaderLogo>
          <img height="45px;" src="/main/lottery.png" />
          Lottery
        </HeaderLogo>
        {isActive || isActivating ? <Profile /> : <ConnectButton />}
      </HeaderContainer>
    </HeaderSection>
  )
}

export default Header
