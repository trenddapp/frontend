import Link from 'next/link'

import styled from 'styled-components'

import { Flex } from '@/components/Core/Toolkit'
import { Logo } from '@/components/Common/Logo'

const FooterContainer = styled(Flex)`
  flex-direction: column;
  height: 100%;
  min-height: 282px;
  position: relative;

  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
    justify-content: space-between;
    height: 282px;
    margin: 0 auto;
    max-width: ${({ theme }) => theme.siteWidth}px;
  }
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
  padding: 0 28px 0 0;
  width: 50%;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 25%;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    padding: 0 28px;
  }
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
  flex-direction: row;
  flex-wrap: wrap;
  margin: 45px 0 35px 0;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin: 35px 0 35px 0;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    margin: 0 0 35px 0;
  }
`

const FooterSection = styled.footer`
  background-color: #282846;
  height: 550px;
  padding: 75px 35px 35px 35px;

  ${({ theme }) => theme.mediaQueries.sm} {
    height: 485px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    height: auto;
  }
`

const Footer = () => {
  const company = [
    { displayText: 'About', url: '/about' },
    { displayText: 'Careers', url: '/careers' },
    { displayText: 'GitHub', url: 'https://github.com/trenddapp' },
    { displayText: 'Logo Kit', url: '/logo' },
  ]

  const products = [
    { displayText: 'Auction', url: '/auction' },
    { displayText: 'Lottery', url: '/lottery' },
    { displayText: 'Marketplace', url: '/marketplace' },
    { displayText: 'NFT', url: '/nft' },
  ]

  const resources = [{ displayText: 'Docs', url: '/' }]

  const services = [{ displayText: 'Contact', url: '/' }]

  return (
    <FooterSection>
      <FooterContainer>
        <Logo height="37px" isWhite={true} />
        <FooterLinkContainer>
          <FooterLinkBox>
            <FooterLinkBoxHeading>Products</FooterLinkBoxHeading>
            <ul>
              {products.map((item, index) => (
                <FooterLink key={index}>
                  <Link href={item.url}>
                    <a>{item.displayText}</a>
                  </Link>
                </FooterLink>
              ))}
            </ul>
          </FooterLinkBox>
          <FooterLinkBox>
            <FooterLinkBoxHeading>Services</FooterLinkBoxHeading>
            <ul>
              {services.map((item, index) => (
                <FooterLink key={index}>
                  <Link href={item.url}>
                    <a>{item.displayText}</a>
                  </Link>
                </FooterLink>
              ))}
            </ul>
          </FooterLinkBox>
          <FooterLinkBox>
            <FooterLinkBoxHeading>Resources</FooterLinkBoxHeading>
            <ul>
              {resources.map((item, index) => (
                <FooterLink key={index}>
                  <Link href={item.url}>
                    <a>{item.displayText}</a>
                  </Link>
                </FooterLink>
              ))}
            </ul>
          </FooterLinkBox>
          <FooterLinkBox>
            <FooterLinkBoxHeading>Company</FooterLinkBoxHeading>
            <ul>
              {company.map((item, index) => (
                <FooterLink key={index}>
                  <Link href={item.url}>
                    <a>{item.displayText}</a>
                  </Link>
                </FooterLink>
              ))}
            </ul>
          </FooterLinkBox>
          <Flex bottom="0" left="0" position="absolute">
            <FooterCopyright>© TrendDapp 2022</FooterCopyright>
            <FooterEmail href="mailto:support@trenddapp.com" target="_blank">
              support@trenddapp.com
            </FooterEmail>
          </Flex>
        </FooterLinkContainer>
      </FooterContainer>
    </FooterSection>
  )
}

export default Footer
