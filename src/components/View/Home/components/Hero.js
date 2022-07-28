import styled from 'styled-components'

import { Box, Flex } from '@/components/Core/Toolkit'

import { Terminal } from '@/components/View/Home/components/Terminal'

const HeroBackground = styled(Box)`
  display: none;

  ${({ theme }) => theme.mediaQueries.md} {
    background-image: url('/main/bg_main_full.svg');
    background-position-x: center;
    background-position-y: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    bottom: 20%;
    display: block;
    height: 30%;
    left: 0px;
    padding: 0 0 30% 0;
    position: absolute;
    right: 0;
    width: 100%;
    z-index: -2;
  }
`

const HeroBackgroundLeft = styled(Box)`
  background-image: url('/main/bg_left.svg');
  background-position-x: 0;
  background-position-y: 0;
  background-repeat: no-repeat;
  background-size: contain;
  display: block;
  height: 100%;
  position: absolute;
  width: 50%;
  top: 0;
  left: 0;
  z-index: -2;

  ${({ theme }) => theme.mediaQueries.md} {
    display: none;
  }
`

const HeroBackgroundRight = styled(Box)`
  background-image: url('/main/bg_right.svg');
  background-position-x: 100%;
  background-position-y: 0;
  background-repeat: no-repeat;
  background-size: contain;
  display: block;
  height: 100%;
  position: absolute;
  width: 50%;
  top: 0;
  right: 0;
  z-index: -2;

  ${({ theme }) => theme.mediaQueries.md} {
    display: none;
  }
`

const HeroButton = styled.a`
  background-color: #4e5ee4;
  border-radius: 6px;
  box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);
  color: #fff;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 0 0 70px 0;
  padding: 11px 35px;
  text-align: center;
  transition: background-color 0.4s ease 0s, transform 0.4s ease 0s;

  &:hover {
    background-color: rgb(67, 81, 197);
    transform: matrix(1, 0, 0, 1, 0, -1);
  }
`

const HeroContainer = styled(Flex)`
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 730px;
  padding: 134px 5px 0 5px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 134px 35px 0 35px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 164px 35px 0 35px;
  }
`

const HeroDescription = styled.p`
  color: #282846;
  font-size: 16px;
  font-weight: 340;
  line-height: 1.6em;
  margin: 0 0 30px 0;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: 18px;
  }
`

const HeroFinal = styled(Box)`
  display: none;

  ${({ theme }) => theme.mediaQueries.md} {
    background-image: url('/main/final_tg.svg');
    background-position-x: center;
    background-position-y: bottom;
    background-repeat: no-repeat;
    background-size: 100%;
    bottom: 16%;
    display: block;
    height: 100%;
    left: 0px;
    position: absolute;
    right: 0px;
    width: 100%;
    z-index: -1;
  }
`

const HeroHeading = styled.h1`
  color: #3c3c57;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.2em;
  margin: 0 0 30px 0;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: 47px;
  }
`

const HeroSection = styled.section`
  position: relative;
  width: 100%;
`

const HeroSpacer = styled(Box)`
  background-clip: border-box;
  background-color: #fff;
  background-origin: padding-box;
  height: 200px;
  position: relative;
  z-index: -10;

  ${({ theme }) => theme.mediaQueries.md} {
    background-color: rgb(242, 244, 247);
  }
`

const Hero = () => {
  return (
    <HeroSection>
      <HeroContainer>
        <HeroHeading>
          Build Secure Decentralized <br /> Applications with <br /> TrendDapp
        </HeroHeading>
        <HeroDescription>
          TrendDapp helps you to turn your idea for a decentralized application, smart contract,
          <br /> crypto wallet, or non-fungible token into a real business. It includes backend,
          <br /> blockchain, and frontend.
        </HeroDescription>
        <HeroButton>CONTACT US</HeroButton>
      </HeroContainer>
      <Flex justifyContent="center" height="300px" padding="60px 35px">
        <Terminal title="vim cosmic_ray_detector.go" />
      </Flex>
      <HeroBackground />
      <HeroBackgroundLeft />
      <HeroBackgroundRight />
      <HeroFinal />
      <HeroSpacer />
    </HeroSection>
  )
}

export default Hero
