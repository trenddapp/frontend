import Link from 'next/link'

import styled from 'styled-components'

import { Box } from '@/components/Core/Toolkit'

const StyledLogo = styled(Box)`
  cursor: pointer;
`

const StyledImage = styled.img`
  height: 30px;

  ${({ theme }) => theme.mediaQueries.lg} {
    height: 40px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    height: 45px;
  }
`

const Logo = ({ isWhite = false }) => {
  return (
    <StyledLogo>
      <Link href="/">
        <a>
          {isWhite ? (
            <StyledImage alt="TrendDapp logo white" src="/main/logo-white.png" />
          ) : (
            <StyledImage alt="TrendDapp logo" src="/main/logo.png" />
          )}
        </a>
      </Link>
    </StyledLogo>
  )
}

export default Logo
