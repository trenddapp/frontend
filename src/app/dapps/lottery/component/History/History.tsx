'use client'

import { useState } from 'react'
import styled from 'styled-components'
import useSWR from 'swr'
import { Box, Flex } from 'lib/component/Toolkit'
import { getLotteryId, getLottery } from 'lib/api/lottery'
import HistoryDate from './HistoryDate'
import HistoryInformation from './HistoryInformation'
import HistoryNavigation from './HistoryNavigation'
import { useContractLottery } from 'lib/hook'

const HistoryCard = styled(Box)`
  border-radius: ${({ theme }) => theme.radii.default};
  box-shadow: ${({ theme }) => theme.shadows.menu};
  min-width: 100%;
  overflow: hidden;
  padding: 18px;
  ${({ theme }) => theme.mediaQueries.md} {
    min-width: 600px;
  }
`

const HistoryContainer = styled(Flex)`
  align-items: center;
  flex-direction: column;
`

const HistoryHeader = styled(Box)``

const HistoryHeading = styled.h2`
  color: ${({ theme }) => theme.colors.headline};
  font-size: 40px;
  font-weight: 600;
  margin: 0 0 48px 0;
`

const HistorySection = styled.section`
  height: 450px;
  padding: 48px 0;
`

export default function History() {
  const [currentLotteryId, setCurrentLotteryId] = useState(-1)
  const [id, setId] = useState(-1)
  const { contract } = useContractLottery({})
  console.log(contract)
  const { error: lotteryError, data: lottery } = useSWR(
    contract !== undefined ? ['lotteries/:id', contract, id] : null,
    async (_, contract, id) => {
      const currentLotteryId = await getLotteryId(contract)
      setCurrentLotteryId(currentLotteryId)
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
    <HistorySection>
      <HistoryContainer>
        <HistoryHeading>Finished Rounds</HistoryHeading>
        <HistoryCard>
          <HistoryHeader>
            <HistoryNavigation
              currentLotteryId={currentLotteryId}
              id={id}
              isLoading={!lotteryError && lottery === undefined}
              setId={setId}
            />
            <HistoryDate id={id} isLoading={!lotteryError && lottery === undefined} lottery={lottery} />
          </HistoryHeader>
          <HistoryInformation isLoading={!lotteryError && lottery === undefined} lottery={lottery} />
        </HistoryCard>
      </HistoryContainer>
    </HistorySection>
  )
}
