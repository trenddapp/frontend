import styled from 'styled-components'

import { Box, Flex } from '@/components/Toolkit'
import Terminal from './Termianl'

const HeroBackground = styled(Box)`
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
`

const HeroButton = styled.a`
  background-color: #4e5ee4;
  border-radius: 6px;
  box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);
  color: #fff;
  cursor: pointer;
  font-family: 'Helvetica Neue';
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

const HeroDescription = styled.p`
  color: #282846;
  font-size: 18px;
  font-weight: 340;
  line-height: 1.6em;
  margin: 0 0 30px 0;
  text-align: center;
`

const HeroFinal = styled(Box)`
  background-image: url('/main/final_tg.svg');
  background-position-x: center;
  background-position-y: bottom;
  background-repeat: no-repeat;
  background-size: 100%;
  bottom: 16%;
  height: 100%;
  left: 0px;
  position: absolute;
  right: 0px;
  width: 100%;
  z-index: -1;
`

const HeroHeading = styled.h1`
  color: #3c3c57;
  font-family: 'Helvetica Neue';
  font-size: 47px;
  font-weight: 700;
  line-height: 1.2em;
  margin: 0 0 30px 0;
  text-align: center;
`

const HeroSection = styled.section`
  position: relative;
  width: 100%;
`

const HeroSpacer = styled(Box)`
  background-clip: border-box;
  background-color: rgb(242, 244, 247);
  background-origin: padding-box;
  height: 200px;
  position: relative;
  z-index: 2;
`

const Hero = () => {
  return (
    <HeroSection>
      <Flex alignItems="center" flexDirection="column" margin="0 auto" maxWidth="730px" padding="164px 35px 0 35px">
        <HeroHeading>Build Secure Smart Contracts in Solidity</HeroHeading>
        <HeroDescription>
          OpenZeppelin Contracts helps you minimize risk by using battle-tested libraries of smart contracts for
          Ethereum and other blockchains. It includes the most used implementations of ERC standards.
        </HeroDescription>
        <HeroButton>GET STARTED</HeroButton>
      </Flex>
      <Flex justifyContent="center" height="300px" padding="60px 35px">
        <Terminal />
      </Flex>
      <HeroBackground />
      <HeroFinal />
      <HeroSpacer />
    </HeroSection>
  )
}

export default Hero
