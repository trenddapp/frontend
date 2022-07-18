import styled from 'styled-components'

import { Box, Flex } from '@/components/Core/Toolkit'
import { Logo } from '@/components/Core/Logo'
import { Nav, NavItem, NavItemWithMenu } from '@/components/Core/Nav'

const Border = styled(Box)`
  background-color: rgba(0, 0, 0, 0.1);
  height: 1px;
  margin: 75px auto 0 auto;
  max-width: ${({ theme }) => theme.siteWidth + 50}px;
`

const HeaderContainer = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1240px;
  padding: 15px 69px;
`

const HeaderSection = styled.header`
  background-color: ${({ theme }) => theme.colors.background};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndices.header};
`

const Header = () => {
  const products = [
    { link: '/products/auction', text: 'Auction' },
    { link: '/products/lottery', text: 'Lottery' },
    { link: '/products/marketplace', text: 'Marketplace' },
  ]

  const resources = [{ link: '/', text: 'Docs' }]

  const services = [{ link: '/', text: 'Contact' }]

  return (
    <>
      <HeaderSection>
        <HeaderContainer>
          <Logo />
          <Nav>
            <NavItemWithMenu menuItems={products}>Products</NavItemWithMenu>
            <NavItem link="/company">Company</NavItem>
            <NavItemWithMenu menuItems={resources}>Resources</NavItemWithMenu>
            <NavItemWithMenu menuItems={services}>Services</NavItemWithMenu>
            <NavItem link="/news-and-events">News & Events</NavItem>
          </Nav>
        </HeaderContainer>
      </HeaderSection>
      <Border />
    </>
  )
}

export default Header
