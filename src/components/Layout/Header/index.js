import styled from 'styled-components'

import { Box, Flex } from '@/components/Core/Toolkit'
import { Logo } from '@/components/Common/Logo'
import { Nav, NavItem, NavItemWithMenu } from '@/components/Layout/Header/components/Nav'

const Border = styled(Box)`
  background-color: rgba(0, 0, 0, 0.1);
  height: 1px;
  margin: ${({ isFixed }) => (isFixed ? '60px auto 0 auto' : '0 auto')};
  max-width: ${({ theme }) => theme.siteWidth + 50}px;

  ${({ theme }) => theme.mediaQueries.lg} {
    margin: ${({ isFixed }) => (isFixed ? '75px auto 0 auto' : '0 auto')};
  }
`

const HeaderContainer = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1240px;
  padding: 15px 35px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding: 15px 96px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 15px 69px;
  }
`

const HeaderSection = styled.header`
  background-color: ${({ theme }) => theme.colors.background};
  position: ${({ isFixed }) => (isFixed ? 'fixed' : 'relative')};
  top: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndices.header};
`

const Header = ({ isFixed = true }) => {
  const company = [
    { displayText: 'About', url: '/about' },
    { displayText: 'Careers', url: '/careers' },
    { displayText: 'GitHub', url: 'https://github.com/trenddapp' },
    { displayText: 'Logo Kit', url: '/logo-kit' },
  ]

  const products = [
    { displayText: 'Auction', url: '/auction' },
    { displayText: 'Lottery', url: '/lottery' },
    { displayText: 'Marketplace', url: '/marketplace' },
    { displayText: 'NFT', url: '/nft' },
  ]

  const resources = [{ displayText: 'Docs', url: '/' }]

  return (
    <>
      <HeaderSection isFixed={isFixed}>
        <HeaderContainer>
          <Logo />
          <Nav>
            {(setIsOpen) => (
              <>
                <NavItemWithMenu menuItems={products} {...{ setIsOpen }}>
                  Products
                </NavItemWithMenu>
                <NavItemWithMenu menuItems={resources} {...{ setIsOpen }}>
                  Resources
                </NavItemWithMenu>
                <NavItemWithMenu menuItems={company} {...{ setIsOpen }}>
                  Company
                </NavItemWithMenu>
                <NavItem link="/services" {...{ setIsOpen }}>
                  Services
                </NavItem>
              </>
            )}
          </Nav>
        </HeaderContainer>
      </HeaderSection>
      <Border isFixed={isFixed} />
    </>
  )
}

export default Header
