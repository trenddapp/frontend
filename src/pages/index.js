import Head from 'next/head'

import styled from 'styled-components'

import { Flex, Text } from '../components/Toolkit'
import { Nav } from '../components/Nav'

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.action};
  border-radius: ${({ theme }) => theme.radii.small};
  border: none;
  color: ${({ theme }) => theme.colors.background};
  font-family: Avenir;
  margin-top: 40px;
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
  padding: 8px;

  ${({ theme }) => theme.mediaQueries.sm} {
    border-left: 1px dashed ${({ theme }) => theme.colors.borderAlt};
    border-right: 1px dashed ${({ theme }) => theme.colors.borderAlt};
  }
`

const Image = styled.img`
  box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.2);
`

const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0 16px;
`

const HomePage = () => {
  return (
    <>
      <Head>
        <title>TrendDapp</title>
        <meta name="description" content="Decentralized applications by TrendDapp." />
        <link rel="icon" href="/main/favicon.ico" />
      </Head>
      <Nav />
      <Section>
        <Container>
          {/* First section which includes two sides in a row. */}
          <Flex justifyContent="space-evenly" marginTop="100px" width="100%">
            {/* Left side which includes three sides in a column.  */}
            <Flex flexDirection="column">
              <Flex flexDirection="column">
                <Text fontFamily="Avenir" fontSize="65px" fontWeight="700" lineHeight="65px">
                  We Know
                </Text>
                <Text fontFamily="Avenir" fontSize="65px" fontWeight="700" lineHeight="65px">
                  Blockchain.
                </Text>
              </Flex>
              <Flex flexDirection="column" marginTop="40px">
                <Text fontFamily="Avenir" fontSize="20px">
                  Turn your idea for a decentralized application, smart contract,
                </Text>
                <Text fontFamily="Avenir" fontSize="20px">
                  crypto wallet, or non-fungible token into a real business.
                </Text>
              </Flex>
              <Button>Let's discuss your project</Button>
            </Flex>

            {/* Right side which includes one image. */}
            <Flex height="326px">
              <Image src="/main/cosmic-ray-detector.png" />
            </Flex>
          </Flex>

          {/* Second section which includes one rounding row. */}
          <Flex justifyContent="space-around" marginTop="100px">
            <img title="Bitcoin" src="/main/bitcoin.png" height="50px" />
            <img title="Ethereum" src="/main/ethereum.png" height="50px" />
            <img title="Polygon" src="/main/polygon.png" height="50px" />
            <img title="Solidity" src="/main/solidity.png" height="50px" />
            <img title="Metamask" src="/main/metamask.png" height="50px" />
            <img title="Filecoin" src="/main/filecoin.png" height="50px" />
            <img title="Golang" src="/main/golang.png" height="50px" />
            <img title="Nextjs" src="/main/nextjs.png" height="50px" />
          </Flex>
        </Container>
      </Section>
    </>
  )
}

export default HomePage
