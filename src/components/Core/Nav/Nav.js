import styled from 'styled-components'

const StyledNav = styled.ul`
  align-items: center;
  display: flex;
  justify-content: center;
`

const Nav = ({ children }) => {
  return (
    <nav>
      <StyledNav>{children}</StyledNav>
    </nav>
  )
}

export default Nav
