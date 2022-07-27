import { useState } from 'react'

import styled from 'styled-components'

import { Box } from '@/components/Core/Toolkit'
import { Hamburger } from '@/components/Core/Hamburger'

const StyledHamburgerWrapper = styled(Box)`
  display: inline-block;

  ${({ theme }) => theme.mediaQueries.lg} {
    display: none;
  }
`

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: center;
`

const StyledNavContainer = styled.ul`
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

const Nav = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <StyledNav>
      <StyledNavContainer isOpen={isOpen}>{children(setIsOpen)}</StyledNavContainer>
      <StyledHamburgerWrapper onClick={() => setIsOpen(!isOpen)}>
        <Hamburger isOpen={isOpen} />
      </StyledHamburgerWrapper>
    </StyledNav>
  )
}

export default Nav
