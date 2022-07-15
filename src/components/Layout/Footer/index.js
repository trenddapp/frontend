import Link from 'next/link'

import styled, { useTheme } from 'styled-components'

import { Box, Flex } from '@/components/Core/Toolkit'
import { Logo } from '@/components/Core/Logo'

const FooterContainer = styled(Box)`
  background-color: #282846;
  padding: 75px 35px 35px 35px;
`

const FooterCopyright = styled.span`
  color: #9a9cac;
  font-size: 12px;
  font-weight: 330;
  letter-spacing: 0.5px;
`

const FooterEmail = styled.a`
  border-left: 1px solid rgb(141, 141, 157);
  color: #9a9cac;
  cursor: pointer;
  font-size: 12px;
  font-weight: 330;
  letter-spacing: 0.5px;
  margin: 0 0 0 7px;
  padding: 0 0 0 7px;

  &:hover {
    color: #c7c8d1;
  }
`

const FooterLink = styled.li`
  color: #fff;
  cursor: pointer;
  font-size: 12px;
  font-weight: 330;
  line-height: 1.7;
  list-style: none;
  opacity: 0.6;
  letter-spacing: 0.5px;
  padding: 0 0 11px 0;

  &:hover {
    opacity: 1;
  }
`

const FooterLinkBox = styled(Flex)`
  flex-direction: column;
  margin: 0 0 20px 0;
  padding: 0 28px;
  width: 25%;
`

const FooterLinkBoxHeading = styled.h3`
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 10px 0;
  text-align: left;
`

const FooterLinkContainer = styled(Flex)`
  margin: 0 0 35px 0;
`

const Footer = () => {
  const theme = useTheme()

  return (
    <footer>
      <FooterContainer>
        <Flex justifyContent="space-between" height="282px" margin="0 auto" maxWidth={`${theme.siteWidth}px`}>
          <Flex flexDirection="column" justifyContent="space-between">
            <Logo height="37px" isWhite={true} />
            <Flex>
              <FooterCopyright>© TrendDapp 2022</FooterCopyright>
              <FooterEmail href="mailto:support@trenddapp.com" target="_blank">
                support@trenddapp.com
              </FooterEmail>
            </Flex>
          </Flex>
          <FooterLinkContainer>
            <FooterLinkBox>
              <FooterLinkBoxHeading>Products</FooterLinkBoxHeading>
              <ul>
                <FooterLink>
                  <Link href="/products/auction">
                    <a>Auction</a>
                  </Link>
                </FooterLink>
                <FooterLink>
                  <Link href="/products/lottery">
                    <a>Lottery</a>
                  </Link>
                </FooterLink>
                <FooterLink>
                  <Link href="/products/marketplace">
                    <a>Marketplace</a>
                  </Link>
                </FooterLink>
              </ul>
            </FooterLinkBox>
            <FooterLinkBox>
              <FooterLinkBoxHeading>Services</FooterLinkBoxHeading>
              <ul>
                <FooterLink>
                  <Link href="/services/contact">
                    <a>Contact</a>
                  </Link>
                </FooterLink>
              </ul>
            </FooterLinkBox>
            <FooterLinkBox>
              <FooterLinkBoxHeading>Resources</FooterLinkBoxHeading>
              <ul>
                <FooterLink>
                  <Link href="/resources/docs">
                    <a>Docs</a>
                  </Link>
                </FooterLink>
              </ul>
            </FooterLinkBox>
            <FooterLinkBox>
              <FooterLinkBoxHeading>Company</FooterLinkBoxHeading>
              <ul>
                <FooterLink>
                  <Link href="/company/about">
                    <a>About</a>
                  </Link>
                </FooterLink>
                <FooterLink>
                  <Link href="/company/careers">
                    <a>Careers</a>
                  </Link>
                </FooterLink>
                <FooterLink>
                  <Link href="https://github.com/trenddapp">
                    <a target="_blank">GitHub</a>
                  </Link>
                </FooterLink>
                <FooterLink>
                  <Link href="/company/logo">
                    <a>Logo Kit</a>
                  </Link>
                </FooterLink>
              </ul>
            </FooterLinkBox>
          </FooterLinkContainer>
        </Flex>
      </FooterContainer>
    </footer>
  )
}

export default Footer
