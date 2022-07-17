import Link from 'next/link'

import styled from 'styled-components'

import { SvgSolidChevronDown } from '@/components/Svg'
import { forwardRef } from 'react'

const StyledNavIcon = styled.i`
  margin: -4px 0 0 12px;
`

const StyledNavItem = styled.li`
  align-items: center;
  color: #282846;
  cursor: pointer;
  display: flex;
  font-size: 15px;
  font-weight: 500;
  line-height: 45px;
  list-style: none;
  margin: 0 40px 0 0;
  transition: color 0.4s ease;

  &:hover {
    color: #614dce;
  }

  &:last-child {
    margin: 0;
  }
`

const NavItem = forwardRef(({ children, link, ...rest }, ref) => {
  if (link != '') {
    return (
      <StyledNavItem ref={ref} {...rest}>
        <Link href={link}>
          <a>{children}</a>
        </Link>
      </StyledNavItem>
    )
  }

  return (
    <StyledNavItem ref={ref} {...rest}>
      {children}
      <StyledNavIcon>
        <SvgSolidChevronDown />
      </StyledNavIcon>
    </StyledNavItem>
  )
})

export default NavItem
