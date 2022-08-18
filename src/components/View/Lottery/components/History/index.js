import { useState } from 'react'

import styled from 'styled-components'
import useSWR from 'swr'

import { Box, Flex } from '@/components/Core/Toolkit'
import { getLotteryId, getLottery } from '@/api/lottery'
import { useContractLottery } from '@/hooks/lottery'
import HistoryDate from './HistoryDate'
import HistoryInformation from './HistoryInformation'
import HistoryNavigation from './HistoryNavigation'

const Card = styled(Box)`
  border-radius: ${({ theme }) => theme.radii.default};
  box-shadow: ${({ theme }) => theme.shadows.menu};
  min-width: 100%;
  overflow: hidden;
  padding: 18px;

  ${({ theme }) => theme.mediaQueries.md} {
    min-width: 600px;
  }
`

const Container = styled(Flex)`
  align-items: center;
  flex-direction: column;
`

const Header = styled(Box)``

const Heading = styled.h2`
  color: ${({ theme }) => theme.colors.headline};
  font-size: 40px;
  font-weight: 600;
  margin: 0 0 48px 0;
`

const Section = styled.section`
  height: 450px;
  padding: 48px 0;
`

const History = () => {
  const [currentLotteryId, setCurrentLotteryId] = useState(-1)
  const [id, setId] = useState(-1)

  const { contract: contractLottery, error: contractLotteryError } = useContractLottery()

  const { error: lotteryError, data: lottery } = useSWR(
    !contractLotteryError ? ['/lotteries/:id', contractLottery, id] : null,
    async (_, contract) => {
      const currentLotteryId = await getLotteryId(contract)
      setCurrentLotteryId(currentLotteryId.toNumber())

      // Value `-2` indicates empty id.
      if (id === -2) {
        return
      }

      // Value `-1` indicates initial id.
      if (id === -1) {
        setId(currentLotteryId - 1)
      }

      return await getLottery(contract, id)
    },
  )

  return (
    <Section>
      <Container>
        <Heading>Finished Rounds</Heading>
        <Card>
          <Header>
            <HistoryNavigation
              currentLotteryId={currentLotteryId}
              id={id}
              isLoading={!lotteryError && lottery === undefined}
              setId={setId}
            />
            <HistoryDate id={id} isLoading={!lotteryError && lottery === undefined} lottery={lottery} />
          </Header>
          <HistoryInformation isLoading={!lotteryError && lottery === undefined} lottery={lottery} />
        </Card>
      </Container>
    </Section>
  )
}

export default History
