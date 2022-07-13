import Link from 'next/link'

import styled from 'styled-components'

import { Box } from '@/components/Toolkit'

const StyledLogo = styled(Box)`
  cursor: pointer;
`

const Logo = ({ height = '45px', isWhite = false }) => {
  return (
    <StyledLogo>
      <Link href="/">
        <a>
          {isWhite ? (
            <img alt="TrendDapp logo white" height={height} src="/main/logo-white.png" />
          ) : (
            <img alt="TrendDapp logo" height={height} src="/main/logo.png" />
          )}
        </a>
      </Link>
    </StyledLogo>
  )
}

export default Logo
