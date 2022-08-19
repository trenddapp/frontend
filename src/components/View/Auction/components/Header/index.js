import styled from 'styled-components'

import { Box, Flex } from '@/components/Core/Toolkit'
import { Profile } from '@/components/Common/Profile'
import { useWeb3Profile } from '@/hooks'
import { WalletConnectButton } from '@/components/Common/Wallet'

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

const Header = () => {
  const { isActive, isActivating } = useWeb3Profile()

  return (
    <HeaderSection>
      <HeaderContainer>
        <HeaderLogo>
          <Box margin="0 10px 0 0">
            <img height="35px;" src="/main/auction.png" />
          </Box>
          Auction
        </HeaderLogo>
        {isActive || isActivating ? <Profile /> : <WalletConnectButton />}
      </HeaderContainer>
    </HeaderSection>
  )
}

export default Header
