import Link from 'next/link'
import styled from 'styled-components'
import { Flex } from 'lib/component/Toolkit'
import { Logo } from 'lib/component/Logo'

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
  margin: auto 0 0 0;
  padding: 75px 35px 35px 35px;
  ${({ theme }) => theme.mediaQueries.sm} {
    height: 485px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    height: auto;
  }
`

export default function Footer() {
  const data = [
    {
      head: 'Products',
      body: [
        { displayText: 'Auction', url: '/dapps/auction' },
        { displayText: 'Lottery', url: '/dapps/lottery' },
        { displayText: 'Marketplace', url: '/dapps/marketplace' },
        { displayText: 'NFT', url: '/dapps/nft' },
        { displayText: 'Wordle', url: '/dapps/wordle' },
      ],
    },
    {
      head: 'Services',
      body: [{ displayText: 'Contact', url: '/' }],
    },
    {
      head: 'Company',
      body: [
        { displayText: 'About', url: '/company/about' },
        { displayText: 'GitHub', url: 'https://github.com/trenddapp' },
      ],
    },
  ]
  return (
    <FooterSection>
      <FooterContainer>
        <Logo isWhite={true} />
        <FooterLinkContainer>
          {data.map((value, index) => {
            return (
              <FooterLinkBox key={index}>
                <FooterLinkBoxHeading>{value.head}</FooterLinkBoxHeading>
                <ul>
                  {value.body.map((item, index) => (
                    <FooterLink key={index}>
                      <Link href={item.url}>{item.displayText}</Link>
                    </FooterLink>
                  ))}
                </ul>
              </FooterLinkBox>
            )
          })}
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
