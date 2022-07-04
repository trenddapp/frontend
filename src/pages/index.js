import Head from 'next/head'

import styled, { useTheme } from 'styled-components'

import { Box, Flex, Text } from '../components/Toolkit'
import { Nav } from '../components/Nav'

const Button = styled.button`
  background-color: rgba(14, 19, 24, 0.7);
  border-radius: ${({ theme }) => theme.radii.small};
  border: none;
  color: ${({ theme }) => theme.colors.background};
  font-family: Avenir;
  margin-top: 65px;
  padding: 12px;

  &:hover {
    cursor: pointer;
  }
`

const Container = styled(Flex)`
  flex-direction: column;
  height: 100vh;
  margin: 0 auto;
  max-width: ${({ theme }) => `${theme.siteWidth}px`};
  position: relative;
`

const Background = styled(Box)`
  background-color: rgb(20, 92, 146);
  background-image: url('/main/wave.webp');
  background-position-x: center;
  background-position-y: bottom;
  background-repeat: no-repeat;
  bottom: 0;
  display: block;
  height: 880px;
  left: 0;
  position: absolute;
  right: 0;
  top: 70px;
`

const Image = styled.img`
  box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.2);
`

const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0 16px;
`

const HomePage = () => {
  const theme = useTheme()

  return (
    <>
      <Head>
        <title>TrendDapp</title>
        <meta name="description" content="Decentralized applications by TrendDapp." />
        <link rel="icon" href="/main/favicon.ico" />
      </Head>

      <Nav />
      <Section>
        <Background />
        <Container>
          <Flex justifyContent="space-between" padding="120px 0 0 0" width="100%">
            <Flex flexDirection="column">
              <Flex flexDirection="column">
                <Text
                  color={theme.colors.background}
                  fontFamily="Avenir"
                  fontSize="65px"
                  fontWeight="700"
                  lineHeight="65px"
                >
                  We Know
                </Text>
                <Text
                  color={theme.colors.background}
                  fontFamily="Avenir"
                  fontSize="65px"
                  fontWeight="700"
                  lineHeight="65px"
                >
                  Blockchain.
                </Text>
              </Flex>
              <Flex flexDirection="column" margin="25px 0 0 0">
                <Text color={theme.colors.background} fontFamily="Avenir" fontSize="20px">
                  Turn your idea for a decentralized application, smart contract,
                </Text>
                <Text color={theme.colors.background} fontFamily="Avenir" fontSize="20px">
                  crypto wallet, or non-fungible token into a real business.
                </Text>
              </Flex>
              <Button>Let's discuss your project</Button>
            </Flex>
            <Flex height="326px">
              <Image src="/main/cosmic-ray-detector.png" />
            </Flex>
          </Flex>
          <Flex justifyContent="space-around" padding="300px 0 0 0">
            <img height="50px" title="Bitcoin" src="/main/bitcoin.png" />
            <img height="50px" title="Ethereum" src="/main/ethereum.png" />
            <img height="50px" title="Polygon" src="/main/polygon.png" />
            <img height="50px" title="Solidity" src="/main/solidity.png" />
            <img height="50px" title="Metamask" src="/main/metamask.png" />
            <img height="50px" title="Filecoin" src="/main/filecoin.png" />
            <img height="50px" title="Golang" src="/main/golang.png" />
            <img height="50px" title="Nextjs" src="/main/nextjs.png" />
          </Flex>
        </Container>
      </Section>
    </>
  )
}

export default HomePage
