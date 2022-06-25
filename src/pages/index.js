import Head from 'next/head'

import styled, { useTheme } from 'styled-components'

import { Flex, Text } from '../components/Toolkit'

const Container = styled(Flex)`
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0 auto;
  max-width: ${({ theme }) => `${theme.siteWidth}px`};
  padding: 8px;

  ${({ theme }) => theme.mediaQueries.sm} {
    border-left: 1px dashed ${({ theme }) => theme.colors.borderAlt};
    border-right: 1px dashed ${({ theme }) => theme.colors.borderAlt};
  }
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
        <title>Coming Soon!</title>
        <meta name="description" content="Decentralized applications by TrendDAPP." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section>
        <Container>
          <Text color={theme.colors.text} fontSize="52px" fontWeight="500">
            Coming Soon!
          </Text>
        </Container>
      </Section>
    </>
  )
}

export default HomePage
