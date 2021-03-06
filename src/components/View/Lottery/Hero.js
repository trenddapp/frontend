import styled from 'styled-components'

import { Box, Flex } from '@/components/Core/Toolkit'

const HeroBackgroundLeft = styled(Box)`
  background-image: url('/main/bg_home_left.svg');
  background-position-x: 0;
  background-position-y: 0;
  background-repeat: no-repeat;
  background-size: contain;
  height: 100%;
  position: absolute;
  width: 50%;
  top: 0;
  left: 0;
  z-index: 0;
`

const HeroBackgroundRight = styled(Box)`
  background-image: url('/main/bg_home_right.svg');
  background-position-x: 100%;
  background-position-y: 0;
  background-repeat: no-repeat;
  background-size: contain;
  height: 100%;
  position: absolute;
  width: 50%;
  top: 0;
  right: 0;
  z-index: 0;
`

const HeroButton = styled.a`
  background-color: rgb(78, 94, 228);
  border-radius: 6px;
  box-shadow: rgb(50 50 93 / 11%) 0px 4px 6px, rgb(0 0 0 / 8%) 0px 1px 3px;
  color: rgb(255, 255, 255);
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 30px 0 0 0;
  padding: 11px 35px;
  text-align: center;
  transition: background-color 0.4s ease 0s, color 0.4s ease 0s, transform 0.4s ease 0s;
  width: 240px;
  z-index: 1;

  &:hover {
    background-color: rgb(67, 81, 197);
    box-shadow: rgb(50 50 93 / 10%) 0px 7px 14px, rgb(0 0 0 / 8%) 0px 3px 6px;
    color: rgb(255, 255, 255);
  }
`

const HeroContainer = styled(Flex)`
  align-items: center;
  color: #fff;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`

const HeroHeading = styled.h2`
  font-size: 18px;
  font-weight: 400;
  z-index: 1;
`

const HeroPrize = styled.span`
  font-size: 60px;
  font-weight: 600;
  z-index: 1;
`

const HeroSection = styled.section`
  background-color: #282846;
  height: 450px;
  position: relative;
`

const Hero = () => {
  return (
    <HeroSection>
      <HeroContainer>
        <HeroHeading>The TrendDapp Lottery</HeroHeading>
        <HeroPrize>$85,000</HeroPrize>
        <HeroHeading>in prizes!</HeroHeading>
        <HeroButton>Buy Ticket</HeroButton>
      </HeroContainer>
      <HeroBackgroundLeft />
      <HeroBackgroundRight />
    </HeroSection>
  )
}

export default Hero
