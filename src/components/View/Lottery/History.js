import styled from 'styled-components'

import { Flex } from '@/components/Core/Toolkit'

const HistoryContainer = styled(Flex)`
  align-items: center;
  flex-direction: column;
  padding: 48px 0;
`

const HistoryHeading = styled.h2`
  font-size: 40px;
  font-weight: 600;
  color: #3c3c57;
`

const HistorySection = styled.section`
  height: 450px;
`

const History = () => {
  return (
    <HistorySection>
      <HistoryContainer>
        <HistoryHeading>Finished Rounds</HistoryHeading>
      </HistoryContainer>
    </HistorySection>
  )
}

export default History
