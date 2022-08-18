import styled from 'styled-components'

import { Flex, Text } from '@/components/Core/Toolkit'

const Container = styled(Flex)`
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

const HistoryDate = ({ id, isLoading, lottery }) => {
  if (id < 0) {
    return (
      <Container>
        <Text>Please enter a round number!</Text>
      </Container>
    )
  }

  if (isLoading) {
    return (
      <Container>
        <Text>Loading...</Text>
      </Container>
    )
  }

  let startedAt = new Date(lottery.startedAt)

  return (
    <Container>
      <Text>Started at: {startedAt.toUTCString()}</Text>
    </Container>
  )
}

export default HistoryDate
