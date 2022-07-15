import styled from 'styled-components'

import { Box, Flex } from '@/components/Core/Toolkit'
import { Logo } from '@/components/Core/Logo'
import { NavContainer, NavItem } from '@/components/Core/Nav'

const Border = styled(Box)`
  background-color: rgba(0, 0, 0, 0.1);
  height: 1px;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.siteWidth + 50}px;
`

const HeaderContainer = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1240px;
  padding: 15px 69px;
`

const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <Logo />
        <NavContainer>
          <NavItem link="">Products</NavItem>
          <NavItem link="/company">Company</NavItem>
          <NavItem link="">Resources</NavItem>
          <NavItem link="">Services</NavItem>
          <NavItem link="/news-and-events">News & Events</NavItem>
        </NavContainer>
      </HeaderContainer>
      <Border />
    </header>
  )
}

export default Header
