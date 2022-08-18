import { useContext } from 'react'

import { BigNumber, ethers } from 'ethers'
import styled from 'styled-components'

import { Box, Flex, Text } from '@/components/Core/Toolkit'
import { CurrencyContext } from '@/context/Currency'
import { shortenAddress } from '@/utils/address'

const Container = styled(Box)`
  margin-top: 24px;
`

const Heading = styled.h4`
  color: ${({ theme }) => theme.colors.headline};
  font-weight: 600;
`

const HistoryInformation = ({ isLoading, lottery }) => {
  const { ethToUsdRate, ethToUsdRateError, ethToUsdRateIsLoading } = useContext(CurrencyContext)

  if (isLoading || ethToUsdRateIsLoading) {
    return (
      <Container>
        <Flex justifyContent="space-between">
          <Heading>Prize Pot:</Heading>
          <Text>Loading...</Text>
        </Flex>
        <Flex justifyContent="space-between" marginTop="10px">
          <Heading>Winning Number:</Heading>
          <Text>Loading...</Text>
        </Flex>
        <Flex justifyContent="space-between" marginTop="10px">
          <Heading>Winning Address:</Heading>
          <Text>Loading...</Text>
        </Flex>
      </Container>
    )
  }

  if (ethToUsdRateError !== undefined) {
    return (
      <Container>
        <Flex justifyContent="space-between">
          <Heading>Prize Pot:</Heading>
          <Text>Something went wrong!</Text>
        </Flex>
        <Flex justifyContent="space-between" marginTop="10px">
          <Heading>Winning Number:</Heading>
          <Text>Something went wrong!</Text>
        </Flex>
        <Flex justifyContent="space-between" marginTop="10px">
          <Heading>Winning Address:</Heading>
          <Text>Something went wrong!</Text>
        </Flex>
      </Container>
    )
  }

  return (
    <Container>
      <Flex justifyContent="space-between">
        <Heading>Prize Pot:</Heading>
        <Text>
          ${ethers.utils.formatEther(BigNumber.from(Math.floor(ethToUsdRate.rate.value)).mul(lottery.prizePool))}
        </Text>
      </Flex>
      <Flex justifyContent="space-between" marginTop="10px">
        <Heading>Winning Number:</Heading>
        <Text>{lottery.winningNumber.slice(0, 3) + '...' + lottery.winningNumber.slice(74, 77)}</Text>
      </Flex>
      <Flex justifyContent="space-between" marginTop="10px">
        <Heading>Winning Address:</Heading>
        <Text>{shortenAddress(lottery.winningAddress)}</Text>
      </Flex>
    </Container>
  )
}

export default HistoryInformation
