'use client'

import styled from 'styled-components'
import { Flex, Text } from 'lib/component/Toolkit'

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

export default function HistoryDate({ id, isLoading, lottery }: any) {
  return (
    <HistoryDateContainer>
      <Text as="span">
        {id < 0 ? 'Please enter a round number!' : isLoading ? 'Loading...' : new Date(lottery.startedAt).toUTCString()}
      </Text>
    </HistoryDateContainer>
  )
}
