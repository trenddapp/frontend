import styled from 'styled-components'

import { Flex } from '@components/Toolkit'

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
  margin: 0 0 0 70px;
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

const HeroHeading = styled.h1`
  color: #3c3c57;
  font-family: 'Helvetica Neue';
  font-size: 47px;
  font-weight: 700;
  line-height: 1.2em;
  margin: 0 0 30px 0;
  text-align: center;
`

const Main = () => {
  return (
    <main>
      <section>
        <Flex alignItems="center" flexDirection="column" margin="0 auto" maxWidth="730px" padding="164px 35px 0 35px">
          <HeroHeading>Build Secure Smart Contracts in Solidity</HeroHeading>
          <HeroDescription>
            OpenZeppelin Contracts helps you minimize risk by using battle-tested libraries of smart contracts for
            Ethereum and other blockchains. It includes the most used implementations of ERC standards.
          </HeroDescription>
          <HeroButton>GET STARTED</HeroButton>
        </Flex>
      </section>
    </main>
  )
}

export default Main
