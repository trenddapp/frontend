import styled from 'styled-components'

import { Box, Flex } from '@/components/Toolkit'

const AdvantagesCard = styled(Flex)`
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 0 0 30px 0;
  padding: 0 30px;
  text-align: center;
  width: calc(100% / 3);
`

const AdvantagesCardIcon = styled(Flex)``

const AdvantagesCardHeading = styled.h3`
  color: #3c3c57;
  font-family: 'Helvetica Neue';
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  padding: 30px 0 0 0;
`

const AdvantagesCardDescription = styled.p`
  color: #282846;
  font-family: 'Helvetica Neue';
  font-size: 15px;
  font-weight: 330;
  line-height: 1.6;
  padding: 30px 0;
`

const AdvantagesCardFooter = styled.a`
  color: #614dce;
  cursor: pointer;
  display: flex;
  font-family: 'Helvetica Neue';
  font-size: 12px;
  font-weight: 600;
  line-height: 1.6;
`

const AdvantagesCards = styled(Flex)``

const AdvantagesHeading = styled.h2`
  color: #3c3c57;
  font-family: 'Helvetica Neue';
  font-size: 35px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 auto 60px auto;
  max-width: 900px;
  text-align: center;
`

const AdvantagesSection = styled.section`
  background-color: #f2f4f7;
  padding: 80px 95px;
  width: 100%;
`

const Advantages = () => {
  return (
    <AdvantagesSection>
      <Box margin="0 auto" maxWidth="1270px">
        <AdvantagesHeading>
          Reduce the risk of vulnerabilities in your <br /> applications by using standard, tested, <br />{' '}
          community-reviewed code.
        </AdvantagesHeading>
        <AdvantagesCards>
          <AdvantagesCard>
            <AdvantagesCardIcon>
              <img src="/main/lock.svg" />
            </AdvantagesCardIcon>
            <AdvantagesCardHeading>Focused on security</AdvantagesCardHeading>
            <AdvantagesCardDescription>
              Using top level standard contracts security <br /> patterns and bets practices.
            </AdvantagesCardDescription>
            <AdvantagesCardFooter>
              LEARN MORE
              <Flex margin="-1.5px 0 0 8px">
                <img src="/main/right-arrow.svg" />
              </Flex>
            </AdvantagesCardFooter>
          </AdvantagesCard>
          <AdvantagesCard>
            <AdvantagesCardIcon>
              <img src="/main/modular.svg" />
            </AdvantagesCardIcon>
            <AdvantagesCardHeading>Modular approach</AdvantagesCardHeading>
            <AdvantagesCardDescription>
              Simple, robust code. Easy collaboration and <br /> auditing.
            </AdvantagesCardDescription>
            <AdvantagesCardFooter>
              LEARN MORE
              <Flex margin="-1.5px 0 0 8px">
                <img src="/main/right-arrow.svg" />
              </Flex>
            </AdvantagesCardFooter>
          </AdvantagesCard>
          <AdvantagesCard>
            <AdvantagesCardIcon>
              <img src="/main/opensource.svg" />
            </AdvantagesCardIcon>
            <AdvantagesCardHeading>Open source</AdvantagesCardHeading>
            <AdvantagesCardDescription>
              Community-driven. Used by the biggest <br /> players in the industry.
            </AdvantagesCardDescription>
            <AdvantagesCardFooter>
              LEARN MORE
              <Flex margin="-1.5px 0 0 8px">
                <img src="/main/right-arrow.svg" />
              </Flex>
            </AdvantagesCardFooter>
          </AdvantagesCard>
        </AdvantagesCards>
      </Box>
    </AdvantagesSection>
  )
}

export default Advantages
