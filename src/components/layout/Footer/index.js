import { Flex } from '@/components/Toolkit'
import styled from 'styled-components'
// import Link from 'next/link'

const CustomFooter = styled.footer`
  background-color: #282846;
  color: white;
  padding: 75px 0 35px;
`

const FooterContainer = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1240px;
`
const LogoContainer = styled(Flex)`
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
`
const Logo = styled(Flex)`
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 2px;
`

const CopyRightContiner = styled(Flex)`
  align-items: center;
  opacity: 0.6;
`

const CopyRightText = styled.span`
  font-size: 0.8rem;
  margin: 5px;
  opacity: 0.6;
`

const LinksContainer = styled(Flex)`
  justify-content: space-between;
  margin-right: 4rem;
`

const LinksColumn = styled(Flex)`
  align-items: center;
  flex-direction: column;
  margin: 0 1rem;
  max-width: 100px;
  text-align: center;
`
const Title = styled.span`
  font-size: 0.8rem;
  font-weight: bold;
  margin: 10px 0;
`

const CustomLink = styled.a`
  font-size: 0.7rem;
  margin: 5px;
  opacity: 0.6;
  font-weight: 100 !important;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`

const Footer = () => {
  return (
    <CustomFooter>
      <FooterContainer>
        <LogoContainer>
          <Logo>TrendDapp</Logo>
          <CopyRightContiner>
            <CopyRightText>© TrendDapp 2022</CopyRightText> |<CustomLink>Privacy</CustomLink> |
            <CustomLink>Terms of Use</CustomLink>
          </CopyRightContiner>
        </LogoContainer>
        <LinksContainer>
          <LinksColumn>
            <Title>Products</Title>
            <CustomLink>Contracts</CustomLink>
            <CustomLink>Defender</CustomLink>
          </LinksColumn>

          <LinksColumn>
            <Title>Security</Title>

            <CustomLink>Audits</CustomLink>
            <CustomLink>Request a security audit</CustomLink>
          </LinksColumn>

          <LinksColumn>
            <Title> Learn</Title>

            <CustomLink>Docs</CustomLink>
            <CustomLink>Community Forum</CustomLink>
            <CustomLink>Ethernaut</CustomLink>
          </LinksColumn>

          <LinksColumn>
            <Title> Company</Title>
            <CustomLink>About Us</CustomLink>
            <CustomLink>Jobs</CustomLink>
            <CustomLink>Github</CustomLink>
            <CustomLink>Twitter</CustomLink>
            <CustomLink>Logo Kit</CustomLink>
            <CustomLink>News & Events</CustomLink>
          </LinksColumn>
        </LinksContainer>
      </FooterContainer>
    </CustomFooter>
  )
}

export default Footer
