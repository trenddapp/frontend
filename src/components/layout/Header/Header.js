import Link from 'next/link'

import styled from 'styled-components'

import { Box, Flex } from '@/components/Toolkit'
import { SvgSolidChevronDown } from '@/components/Svg'

const Border = styled(Box)`
  background-color: rgba(0, 0, 0, 0.1);
  height: 1px;
  margin: 0 auto;
  max-width: 1290px;
`

const HeaderContainer = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1240px;
  padding: 15px 69px;
`

const Logo = styled(Box)`
  cursor: pointer;
`

const NavContainer = styled.ul`
  align-items: center;
  display: flex;
  justify-content: center;
`

const NavIcon = styled.i`
  margin: -4px 0 0 12px;
`

const NavItem = styled.li`
  align-items: center;
  color: #282846;
  cursor: pointer;
  display: flex;
  font-family: 'Helvetica Neue';
  font-size: 15px;
  font-weight: 500;
  justify-content: center;
  line-height: 45px;
  list-style: none;
  margin: 0 40px 0 0;
  transition: color 0.4s ease;

  &:hover {
    color: #614dce;
  }
`

const NavItemLast = styled.li`
  color: #282846;
  cursor: pointer;
  font-family: 'Helvetica Neue';
  font-size: 15px;
  font-weight: 500;
  line-height: 45px;

  &:hover {
    color: #614dce;
  }
`

const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <Logo>
          <Link href="/">
            <a>
              <img alt="Logo" height="45px" src="/main/logo.png" />
            </a>
          </Link>
        </Logo>
        <nav>
          <NavContainer>
            <NavItem>
              <a>Products</a>
              <NavIcon>
                <SvgSolidChevronDown />
              </NavIcon>
            </NavItem>
            <NavItem>
              <a>Company</a>
            </NavItem>
            <NavItem>
              <a>Resources</a>
              <NavIcon>
                <SvgSolidChevronDown />
              </NavIcon>
            </NavItem>
            <NavItem>
              <a>Services</a>
              <NavIcon>
                <SvgSolidChevronDown />
              </NavIcon>
            </NavItem>
            <NavItemLast>
              <a>News & Events</a>
            </NavItemLast>
          </NavContainer>
        </nav>
      </HeaderContainer>
      <Border />
    </header>
  )
}

export default Header
