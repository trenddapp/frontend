'use client'

import { useContext } from 'react'
import { BigNumber, ethers } from 'ethers'
import styled from 'styled-components'
import { Box, Flex, Text } from 'lib/component/Toolkit'
import { CurrencyContext } from 'lib/context/Currency'
import { shortenAddress } from 'lib/util/address'

const HistoryInformationContainer = styled(Box)`
  margin-top: 24px;
`

const HistoryInformationHeading = styled.h4`
  color: ${({ theme }) => theme.colors.headline};
  font-weight: 600;
`

export default function HistoryInformation({ isLoading, lottery }: any) {
  const currency = useContext(CurrencyContext)
  const rate = currency?.['eth-usd']?.rate
  const error = currency?.['eth-usd']?.error
  if (isLoading || (rate === undefined && error === undefined)) {
    return (
      <HistoryInformationContainer>
        <Flex justifyContent="space-between">
          <HistoryInformationHeading>Prize Pot:</HistoryInformationHeading>
          <Text>Loading...</Text>
        </Flex>
        <Flex justifyContent="space-between" marginTop="10px">
          <HistoryInformationHeading>Winning Number:</HistoryInformationHeading>
          <Text>Loading...</Text>
        </Flex>
        <Flex justifyContent="space-between" marginTop="10px">
          <HistoryInformationHeading>Winning Address:</HistoryInformationHeading>
          <Text>Loading...</Text>
        </Flex>
      </HistoryInformationContainer>
    )
  }
  if (rate === undefined) {
    return (
      <HistoryInformationContainer>
        <Flex justifyContent="space-between">
          <HistoryInformationHeading>Prize Pot:</HistoryInformationHeading>
          <Text>Something went wrong!</Text>
        </Flex>
        <Flex justifyContent="space-between" marginTop="10px">
          <HistoryInformationHeading>Winning Number:</HistoryInformationHeading>
          <Text>Something went wrong!</Text>
        </Flex>
        <Flex justifyContent="space-between" marginTop="10px">
          <HistoryInformationHeading>Winning Address:</HistoryInformationHeading>
          <Text>Something went wrong!</Text>
        </Flex>
      </HistoryInformationContainer>
    )
  }
  return (
    <HistoryInformationContainer>
      <Flex justifyContent="space-between">
        <HistoryInformationHeading>Prize Pot:</HistoryInformationHeading>
        <Text>${ethers.utils.formatEther(BigNumber.from(Math.floor(rate.value)).mul(lottery.prizePool))}</Text>
      </Flex>
      <Flex justifyContent="space-between" marginTop="10px">
        <HistoryInformationHeading>Winning Number:</HistoryInformationHeading>
        <Text>{lottery.winningNumber.slice(0, 3) + '...' + lottery.winningNumber.slice(74, 77)}</Text>
      </Flex>
      <Flex justifyContent="space-between" marginTop="10px">
        <HistoryInformationHeading>Winning Address:</HistoryInformationHeading>
        <Text>{shortenAddress(lottery.winningAddress)}</Text>
      </Flex>
    </HistoryInformationContainer>
  )
}
