import { useRef, useState } from 'react'
import Link from 'next/link'

import styled from 'styled-components'

import { Box, Flex } from '@/components/Core/Toolkit'
import { Menu } from '@/components/Core/Menu'
import { NavItem } from '@/components/Core/Nav'

const StyledNavItemWithMenu = styled(Box)`
  margin: 0 40px 0 0;
`

const StyledMenuItem = styled.div`
  margin: 10px 0;
  transition: color 0.2s ease;

  &:hover {
    color: #614dce;
    cursor: pointer;
  }
`

const NavItemWithMenu = ({ children, menuItems = [] }) => {
  const linkRef = useRef()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <StyledNavItemWithMenu onMouseLeave={() => setIsMenuOpen(false)}>
      <Box>
        <NavItem onMouseEnter={() => setIsMenuOpen(true)} ref={linkRef} link="">
          {children}
        </NavItem>
      </Box>

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
    </StyledNavItemWithMenu>
  )
}

export default NavItemWithMenu
