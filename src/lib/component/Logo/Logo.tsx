import Link from 'next/link'
import styled from 'styled-components'
import { Box } from 'lib/component/Toolkit'

interface LogoProps {
  isWhite?: boolean
}

const LogoContainer = styled(Box)`
  cursor: pointer;
`

const LogoImage = styled.img`
  height: 30px;
  ${({ theme }) => theme.mediaQueries.lg} {
    height: 40px;
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    height: 45px;
  }
`

export default function Logo({ isWhite = false }: LogoProps) {
  return (
    <LogoContainer>
      <Link href="/">
        {isWhite ? (
          <LogoImage alt="TrendDapp logo white" src="/logo-white.png" />
        ) : (
          <LogoImage alt="TrendDapp logo" src="/logo.png" />
        )}
      </Link>
    </LogoContainer>
  )
}
