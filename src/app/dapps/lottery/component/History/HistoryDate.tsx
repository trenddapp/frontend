'use client'

import styled from 'styled-components'
import { Flex, Text } from 'lib/component/Toolkit'
import { Lottery } from 'lib/api/lottery'

interface HistoryDateProps {
  id: number
  lottery?: Lottery
  lotteryError?: any
}

const HistoryDateContainer = styled(Flex)`
  align-items: flex-start;
  flex-direction: column;
  font-size: 70%;
  justify-content: flex-start;
  margin-top: 10px;
  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
    justify-content: space-between;
  }
`

export default function HistoryDate({ id, lottery, lotteryError }: HistoryDateProps) {
  if (lottery === undefined && lotteryError === undefined) {
    return <HistoryDateContainer>Loading...</HistoryDateContainer>
  }
  if (lottery === undefined) {
    return <HistoryDateContainer>Something went wrong!</HistoryDateContainer>
  }
  return (
    <HistoryDateContainer>
      <Text as="span">{id < 0 ? 'Please enter a round number!' : new Date(lottery.startedAt).toUTCString()}</Text>
    </HistoryDateContainer>
  )
}
