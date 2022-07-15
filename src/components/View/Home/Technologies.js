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
  margin: 0 0 15px 0;
  width: calc(100% / 4);
`

const TechnologyLogoBox = styled(Flex)`
  align-items: space-between;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1000px;
`

const Technologies = () => {
  return (
    <section>
      <TechnologiesContainer>
        <TechnologiesHeading>TECHNOLOGIES WE USE FOR BUILDING DECENTRALIZED APPLICATIONS</TechnologiesHeading>
        <TechnologyLogoBox>
          <Flex>
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
          </Flex>
          <Flex>
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
          </Flex>
        </TechnologyLogoBox>
      </TechnologiesContainer>
    </section>
  )
}

export default Technologies
