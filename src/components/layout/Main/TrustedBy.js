import styled from 'styled-components'

import { Flex } from '@/components/Toolkit'

const TrustedByHeading = styled.p`
  color: #000;
  font-family: 'Helvetica Neue';
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.05em;
  line-height: 120%;
  margin: 0 0 30px 0;
  text-align: center;
`

const TrustedByLogo = styled(Flex)`
  align-items: center;
  justify-content: center;
  margin: 0 0 15px 0;
  width: calc(100% / 4);
`

const TrustedByLogos = styled(Flex)`
  align-items: space-between;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1000px;
`

const TrustedBySection = styled.section`
  padding: 80px 0;
  width: 100%;
`

const TrustedBy = () => {
  return (
    <TrustedBySection>
      <TrustedByHeading>PROJECTS BUILDING WITH OPENZEPPELIN CONTRACTS</TrustedByHeading>
      <TrustedByLogos>
        <Flex>
          <TrustedByLogo>
            <img height="43px" src="/main/decentraland.svg" />
          </TrustedByLogo>
          <TrustedByLogo>
            <img height="43px" src="/main/sy-sx.svg" />
          </TrustedByLogo>
          <TrustedByLogo>
            <img height="43px" src="/main/gnoses.svg" />
          </TrustedByLogo>
          <TrustedByLogo>
            <img height="43px" src="/main/set.svg" />
          </TrustedByLogo>
        </Flex>
        <Flex>
          <TrustedByLogo>
            <img height="43px" src="/main/ocean.svg" />
          </TrustedByLogo>
          <TrustedByLogo>
            <img width="100px" src="/main/Aztec_logo.webp" />
          </TrustedByLogo>
          <TrustedByLogo>
            <img height="43px" src="/main/centre-logo.svg" />
          </TrustedByLogo>
          <TrustedByLogo>
            <img height="43px" src="/main/counterfactural.svg" />
          </TrustedByLogo>
        </Flex>
      </TrustedByLogos>
    </TrustedBySection>
  )
}

export default TrustedBy
