import styled from 'styled-components'

import Menu from '@/components/Core/Menu'
import { useRef, useState } from 'react'
import { NavItem } from '@/components/Core/Nav'
import Link from 'next/link'

const CustomNavItem = styled.div`
  margin: 0 40px 0 0;
`
const MenuListContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const MenuItem = styled.div`
  margin: 10px 0;

  &:hover {
    color: #614dce;
    cursor: pointer;
    transition: color 0.2s ease;
  }
`

const NavItemWithMenu = ({ children, menuItems = [] }) => {
  const linkRef = useRef()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const onPointerEnter = () => {
    setIsMenuOpen(true)
  }

  const onPointerLeave = () => {
    setIsMenuOpen(false)
  }

  const handleClickOnItem = () => {}

  return (
    <CustomNavItem onMouseLeave={onPointerLeave}>
      <div>
        <NavItem onMouseEnter={onPointerEnter} ref={linkRef} link="">
          {children}
        </NavItem>
      </div>

      <Menu open={isMenuOpen} element={linkRef.current}>
        <MenuListContainer>
          {menuItems.map((item, index) => {
            return (
              <MenuItem onClick={handleClickOnItem} key={index}>
                <Link href={item.link} >
                  {item.text}
                </Link>
              </MenuItem>
            )
          })}
        </MenuListContainer>
      </Menu>
    </CustomNavItem>
  )
}

export default NavItemWithMenu
