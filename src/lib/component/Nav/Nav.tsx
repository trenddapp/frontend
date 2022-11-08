import { useState } from 'react'
import styled from 'styled-components'
import { Box } from 'lib/component/Toolkit'
import { Hamburger } from 'lib/component/Hamburger'

interface NavProps {
  children: any
}

interface NavListProps {
  isOpen: boolean
}

const HamburgerWrapper = styled(Box)`
  display: inline-block;
  ${({ theme }) => theme.mediaQueries.lg} {
    display: none;
  }
`

const NavContainer = styled.nav`
  align-items: center;
  display: flex;
  justify-content: center;
`

const NavList = styled.ul<NavListProps>`
  background-color: #fff;
  bottom: 0;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  height: 100vh;
  left: 0;
  overflow-y: scroll;
  padding: 0 20px 120px 20px;
  position: fixed;
  right: 0;
  top: 54px;
  width: 100%;
  z-index: 110;
  ${({ theme }) => theme.mediaQueries.lg} {
    align-items: center;
    display: flex;
    height: auto;
    justify-content: center;
    padding: 0;
    position: static;
    overflow-y: auto;
    z-index: 0;
  }
`

export default function Nav({ children }: NavProps) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <NavContainer>
      <NavList isOpen={isOpen}>{children(setIsOpen)}</NavList>
      <HamburgerWrapper onClick={() => setIsOpen(!isOpen)}>
        <Hamburger isOpen={isOpen} />
      </HamburgerWrapper>
    </NavContainer>
  )
}
