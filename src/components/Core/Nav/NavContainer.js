import styled from 'styled-components'

const StyledNavContainer = styled.ul`
  align-items: center;
  display: flex;
  justify-content: center;
`

const NavContainer = ({ children }) => {
  return (
    <nav>
      <StyledNavContainer>{children}</StyledNavContainer>
    </nav>
  )
}

export default NavContainer
