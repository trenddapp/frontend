'use client'

import { useState } from 'react'
import styled from 'styled-components'
import useSWR from 'swr'
import { Box, Flex } from 'lib/component/Toolkit'
import { getLotteryId, getLottery } from 'lib/api/lottery'
import { useContractLottery } from 'lib/hook'
import HistoryDate from './HistoryDate'
import HistoryInformation from './HistoryInformation'
import HistoryNavigation from './HistoryNavigation'

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
  const [id, setId] = useState(-1)
  const { contract } = useContractLottery({})
  const { error: lotteryError, data: lottery } = useSWR(
    contract !== undefined ? ['lotteries/:id', contract, id] : null,
    async (_, contract, id) => {
      const currentLotteryId = await getLotteryId(contract)
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
          <Box>
            <HistoryNavigation id={id} lottery={lottery} lotteryError={lotteryError} setId={setId} />
            <HistoryDate id={id} lottery={lottery} lotteryError={lotteryError} />
          </Box>
          <HistoryInformation lottery={lottery} lotteryError={lotteryError} />
        </HistoryCard>
      </HistoryContainer>
    </HistorySection>
  )
}
