import styled from 'styled-components'

import { Box, Flex } from '@/components/Core/Toolkit'

const TechnologiesContainer = styled(Box)`
  padding: 80px 0;
`

const TechnologiesHeading = styled.h3`
  color: #000000;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  line-height: 120%;
  margin: 0 0 30px 0;
  text-align: center;
`

const TechnologyLogo = styled(Flex)`
  align-items: center;
  justify-content: center;
  margin: 0 0 30px 0;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.md} {
    margin: 0 0 15px 0;
    width: 25%;
  }
`

const TechnologyLogoBox = styled(Flex)`
  align-items: center;
  flex-direction: column;
  justify-content: center;

  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
    justify-content: space-between;
  }
`

const TechnologyLogoContainer = styled(Flex)`
  align-items: space-between;
  flex-direction: row;
  justify-content: space-evenly;
  max-width: 1000px;
  padding: 0 35px;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.md} {
    align-items: space-between;
    flex-direction: column;
    margin: 0 auto;
    padding: 0;
  }
`

const Technologies = () => {
  return (
    <section>
      <TechnologiesContainer>
        <TechnologiesHeading>TECHNOLOGIES WE USE FOR BUILDING DECENTRALIZED APPLICATIONS</TechnologiesHeading>
        <TechnologyLogoContainer>
          <TechnologyLogoBox>
            <TechnologyLogo>
              <img height="30px" title="Ethereum" src="/main/ethereum.png" />
            </TechnologyLogo>
            <TechnologyLogo>
              <img height="35px" title="IPFS" src="/main/ipfs.png" />
            </TechnologyLogo>
            <TechnologyLogo>
              <img height="25px" title="Polygon" src="/main/polygon.png" />
            </TechnologyLogo>
            <TechnologyLogo>
              <img width="80px" title="Solidity" src="/main/solidity.png" />
            </TechnologyLogo>
          </TechnologyLogoBox>
          <TechnologyLogoBox>
            <TechnologyLogo>
              <img height="40px" title="Metamask" src="/main/metamask.png" />
            </TechnologyLogo>
            <TechnologyLogo>
              <img height="40px" title="Golang" src="/main/golang.svg" />
            </TechnologyLogo>
            <TechnologyLogo>
              <img height="30px" title="Nextjs" src="/main/nextjs.png" />
            </TechnologyLogo>
            <TechnologyLogo>
              <img height="30px" title="Python" src="/main/python.png" />
            </TechnologyLogo>
          </TechnologyLogoBox>
        </TechnologyLogoContainer>
      </TechnologiesContainer>
    </section>
  )
}

export default Technologies
