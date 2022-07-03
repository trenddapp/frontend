import styled from 'styled-components'

import { Flex, Text } from '../Toolkit'
import { SvgSolidChevronDown } from '../Svg'

const Button = styled.button`
  background: ${({ theme }) => theme.colors.action};
  border: none;
  border-radius: ${({ theme }) => theme.radii.small};
  color: ${({ theme }) => theme.colors.background};
  font-size: 15px;
  font-family: Avenir;
  margin: 12px 0px;
  padding: 0px 20px;

  &:hover {
    cursor: pointer;
  }
`

const Container = styled(Flex)`
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${({ theme }) => `${theme.siteWidth}px`};
`

const Item = styled(Flex)`
  align-items: center;
  color: rgb(115, 115, 150);
  justify-content: center;
  padding: 24px 16px;

  &:hover {
    color: ${({ theme }) => theme.colors.action};
    cursor: pointer;
  }
`

const ItemIcon = styled(Flex)`
  color: inherit;
  margin-left: 3px;
  padding-top: 1px;
`

const ItemText = styled(Text)`
  color: inherit;
  font-family: Avenir;
  font-size: 14px;
  font-stretch: 100%;
  font-weight: 700;
  line-height: 21px;
`

const Logo = styled(Flex)`
  align-items: center;
  cursor: pointer;
  justify-content: center;
`

const LogoText = styled(Text)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.text};
  border-top: 1px solid ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.text};
  font-family: Avenir;
  font-size: 26px;
  font-weight: 700;
`

const Section = styled.nav`
  border-bottom: 1px solid ${({ theme }) => theme.colors.backgroundAlt};
  height: 69px;
  padding: 0 16px;
`

const Nav = () => {
  return (
    <Section>
      <Container>
        {/* Logo */}
        <Logo>
          <LogoText>TrendDapp</LogoText>
        </Logo>

        {/* Items */}
        <Flex alignItems="center" justify-content="center">
          <Item>
            <ItemText>Products</ItemText>
            <ItemIcon>
              <SvgSolidChevronDown height="20px" width="20px" />
            </ItemIcon>
          </Item>
          <Item>
            <ItemText>Resources</ItemText>
          </Item>
          <Item>
            <ItemText>Services</ItemText>
          </Item>
          <Item>
            <ItemText>Company</ItemText>
          </Item>
        </Flex>

        {/* Button */}
        <Button>See Product Tour</Button>
      </Container>
    </Section>
  )
}

export default Nav
