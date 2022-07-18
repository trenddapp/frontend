import { useRef, useState } from 'react'
import Link from 'next/link'

import styled from 'styled-components'

import { Box, Flex } from '@/components/Core/Toolkit'
import { Menu } from '@/components/Core/Menu'
import { SvgSolidChevronDown } from '@/components/Svg'

const StyledMenuItem = styled.div`
  cursor: pointer;
  margin: 10px 0;
  transition: color 0.2s ease;

  &:hover {
    color: #614dce;
  }
`

const StyledMenuWrapper = styled(Box)`
  display: none;

  ${({ theme }) => theme.mediaQueries.md} {
    display: block;
  }
`

const StyledNavIcon = styled.i`
  display: none;

  ${({ theme }) => theme.mediaQueries.md} {
    display: inline-block;
    margin: -4px 0 0 12px;
  }
`

const StyledNavItem = styled.li`
  color: #282846;
  font-size: 13px;
  font-weight: 500;
  margin: 24px 0 0 0;
  list-style: none;
`

const StyledNavItemWithMenu = styled.li`
  border-top: 1px solid rgb(216, 216, 216);
  color: #cad2e0;
  font-size: 15px;
  font-weight: 500;
  list-style: none;
  padding: 32px 0;

  ${({ theme }) => theme.mediaQueries.md} {
    align-items: center;
    border: none;
    color: #282846;
    display: flex;
    font-size: 15px;
    line-height: 45px;
    margin: 0 40px 0 0;
    padding: 0;
    transition: color 0.4s ease;

    &:hover {
      color: #614dce;
    }

    &:last-child {
      margin: 0;
    }
  }
`

const StyledNavList = styled.ul`
  display: block;

  ${({ theme }) => theme.mediaQueries.md} {
    display: none;
  }
`

const NavItemWithMenu = ({ children, menuItems = [] }) => {
  const linkRef = useRef()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Box onMouseLeave={() => setIsMenuOpen(false)}>
      <StyledNavItemWithMenu onMouseEnter={() => setIsMenuOpen(true)} ref={linkRef}>
        {children}
        <StyledNavIcon>
          <SvgSolidChevronDown />
        </StyledNavIcon>
        <StyledNavList>
          {menuItems.map((item, index) => {
            return (
              <StyledNavItem key={index}>
                <Link href={item.link}>
                  <a>{item.text}</a>
                </Link>
              </StyledNavItem>
            )
          })}
        </StyledNavList>
      </StyledNavItemWithMenu>
      <StyledMenuWrapper>
        <Menu open={isMenuOpen} element={linkRef.current}>
          <Flex flexDirection="column">
            {menuItems.map((item, index) => {
              return (
                <StyledMenuItem key={index}>
                  <Link href={item.link}>
                    <a>{item.text}</a>
                  </Link>
                </StyledMenuItem>
              )
            })}
          </Flex>
        </Menu>
      </StyledMenuWrapper>
    </Box>
  )
}

export default NavItemWithMenu
