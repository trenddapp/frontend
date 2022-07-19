import { useRef, useState } from 'react'
import Link from 'next/link'

import styled from 'styled-components'

import { Box, Flex } from '@/components/Core/Toolkit'
import { Menu } from '@/components/Core/Menu'
import { SvgSolidChevronDown } from '@/components/Svg'

const StyledMenuItem = styled.div`
  border-top: 1px solid rgb(216, 216, 216, 0.4);
  cursor: pointer;
  font-size: 12px;
  padding: 7px 12px;
  transition: 0.2s ease;

  &:hover {
    /* TODO: use color palette in the next refactor */
    color: #614dce;
    background-color: rgb(242 244 247);
  }

  &:first-child {
    border: none;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    font-size: 15px;
  }
`

const StyledMenuWrapper = styled(Box)`
  display: none;
  cursor: pointer;

  ${({ theme }) => theme.mediaQueries.lg} {
    display: block;
  }
`

const StyledNavIcon = styled.i`
  display: none;

  ${({ theme }) => theme.mediaQueries.lg} {
    display: inline-block;
    margin: -2px 0 0 12px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
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

  ${({ theme }) => theme.mediaQueries.lg} {
    align-items: center;
    border: none;
    color: #282846;
    cursor: pointer;
    display: flex;
    font-size: 12px;
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

  ${({ theme }) => theme.mediaQueries.xl} {
    font-size: 15px;
  }
`

const StyledNavList = styled.ul`
  display: block;
  font-size: 0.9rem;
  width: 100%;
  transition: 0.5s ease;

  ${({ theme }) => theme.mediaQueries.lg} {
    display: none;
    cursor: pointer;
    background-color: rgb(242 244 247);
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
          <Flex flexDirection="column" width="100%">
            {menuItems.map((item, index) => {
              return (
                <Link href={item.link} key={index}>
                  <StyledMenuItem>
                    <a>{item.text}</a>
                  </StyledMenuItem>
                </Link>
              )
            })}
          </Flex>
        </Menu>
      </StyledMenuWrapper>
    </Box>
  )
}

export default NavItemWithMenu
