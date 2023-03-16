import styled from 'styled-components'
import { Box, Flex } from 'lib/component/Toolkit'
import { Logo } from 'lib/component/Logo'
import { Nav, NavItem, NavItemWithMenu } from 'lib/component/Nav'

const Border = styled(Box)<any>`
  background-color: rgba(0, 0, 0, 0.1);
  height: 1px;
  margin: ${({ isFixed }) => (isFixed ? '60px auto 0 auto' : '0 auto')};
  max-width: ${({ theme }) => theme.siteWidth + 50}px;
  ${({ theme }) => theme.mediaQueries.lg} {
    margin: ${({ isFixed }) => (isFixed ? '75px auto 0 auto' : '0 auto')};
  }
`

const HeaderContainer = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1240px;
  padding: 15px 35px;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 15px 96px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 15px 69px;
  }
`

const HeaderSection = styled.header<any>`
  background-color: ${({ theme }) => theme.colors.background};
  position: ${({ isFixed }) => (isFixed ? 'fixed' : 'relative')};
  top: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndices.header};
`

const Header = ({ isFixed = true }) => {
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
      head: 'Resources',
      body: [{ displayText: 'Docs', url: '/' }],
    },
    {
      head: 'Company',
      body: [
        { displayText: 'About', url: '/company/about' },
        { displayText: 'GitHub', url: 'https://github.com/trenddapp' },
      ],
    },
    {
      head: 'Services',
      body: '/',
    },
  ]
  return (
    <>
      <HeaderSection isFixed={isFixed}>
        <HeaderContainer>
          <Logo />
          <Nav>
            {(setIsOpen: any) => (
              <>
                {data.map((value, index) => {
                  return typeof value.body === 'string' ? (
                    <NavItem key={index} link={value.body} {...{ setIsOpen }}>
                      {value.head}
                    </NavItem>
                  ) : (
                    <NavItemWithMenu key={index} menuItems={value.body} {...{ setIsOpen }}>
                      {value.head}
                    </NavItemWithMenu>
                  )
                })}
              </>
            )}
          </Nav>
        </HeaderContainer>
      </HeaderSection>
      <Border isFixed={isFixed} />
    </>
  )
}

export default Header
