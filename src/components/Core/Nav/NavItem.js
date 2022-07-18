import { forwardRef } from 'react'
import Link from 'next/link'

import styled from 'styled-components'

const StyledNavItem = styled.li`
  border-top: 1px solid rgb(216, 216, 216);
  color: #282846;
  font-size: 13px;
  font-weight: 500;
  list-style: none;
  padding: 32px 0;

  ${({ theme }) => theme.mediaQueries.md} {
    align-items: center;
    border: none;
    cursor: pointer;
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

const StyledNavLink = styled.a`
  cursor: pointer;
`

const NavItem = forwardRef(({ children, link, ...rest }, ref) => {
  return (
    <StyledNavItem ref={ref} {...rest}>
      <Link href={link}>
        <StyledNavLink>{children}</StyledNavLink>
      </Link>
    </StyledNavItem>
  )
})

export default NavItem
