import styled from 'styled-components'
import { Box, Flex } from 'pkg/component/Toolkit'

const LineBreak = styled.br`
  display: none;
  ${({ theme }) => theme.mediaQueries.md} {
    display: inline;
  }
`

const ServiceCard = styled(Flex)`
  flex-direction: column;
  margin: 0 0 30px 0;
  padding: 0;
  width: 100%;
  ${({ theme }) => theme.mediaQueries.md} {
    align-items: center;
    justify-content: center;
    padding: 0 30px;
    width: calc(100% / 3);
  }
`

const ServiceCardBox = styled(Flex)`
  flex-direction: column;
  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
  }
`

const ServiceCardIcon = styled(Flex)``

const ServiceCardHeading = styled.h3`
  color: #3c3c57;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.2;
  padding: 15px 0 0 0;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 20px;
    padding: 30px 0 0 0;
  }
`

const ServiceCardDescription = styled.p`
  color: #282846;
  font-size: 14px;
  font-weight: 330;
  line-height: 1.6;
  padding: 15px 0;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 15px;
    padding: 30px 0;
  }
`

const ServiceCardFooter = styled.a`
  color: #614dce;
  cursor: pointer;
  display: flex;
  font-size: 11px;
  font-weight: 600;
  line-height: 1.6;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 12px;
  }
`

const ServiceContainer = styled(Box)`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.siteWidth + 30}px;
`

const ServiceHeading = styled.h2`
  color: #3c3c57;
  font-size: 30px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 auto 60px auto;
  max-width: 900px;
  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: 35px;
  }
`

const ServiceSection = styled.section`
  background-color: #f2f4f7;
  padding: 60px 35px;
  text-align: left;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 80px 95px;
    text-align: center;
  }
`

export default function Service() {
  return (
    <ServiceSection>
      <ServiceContainer>
        <ServiceHeading>
          Dedicated software developers for you to create <LineBreak /> world-class software from scratch, <LineBreak />{' '}
          or modernize your software.
        </ServiceHeading>
        <ServiceCardBox>
          <ServiceCard>
            <ServiceCardIcon>
              <img src="/lock.svg" />
            </ServiceCardIcon>
            <ServiceCardHeading>Smart Contract</ServiceCardHeading>
            <ServiceCardDescription>
              Smart contract development and auditing <LineBreak /> using best practices.
            </ServiceCardDescription>
            <ServiceCardFooter>
              LEARN MORE
              <Flex margin="-1.5px 0 0 8px">
                <img src="/right-arrow.svg" />
              </Flex>
            </ServiceCardFooter>
          </ServiceCard>
          <ServiceCard>
            <ServiceCardIcon>
              <img src="/modular.svg" />
            </ServiceCardIcon>
            <ServiceCardHeading>Backend</ServiceCardHeading>
            <ServiceCardDescription>
              Standard microservices with dozens of ready <LineBreak />
              to be used endpoints.
            </ServiceCardDescription>
            <ServiceCardFooter>
              LEARN MORE
              <Flex margin="-1.5px 0 0 8px">
                <img src="/right-arrow.svg" />
              </Flex>
            </ServiceCardFooter>
          </ServiceCard>
          <ServiceCard>
            <ServiceCardIcon>
              <img src="/opensource.svg" />
            </ServiceCardIcon>
            <ServiceCardHeading>Frontend</ServiceCardHeading>
            <ServiceCardDescription>
              Beautiful user interface development using cutting edge technologies.
            </ServiceCardDescription>
            <ServiceCardFooter>
              LEARN MORE
              <Flex margin="-1.5px 0 0 8px">
                <img src="/right-arrow.svg" />
              </Flex>
            </ServiceCardFooter>
          </ServiceCard>
        </ServiceCardBox>
      </ServiceContainer>
    </ServiceSection>
  )
}
