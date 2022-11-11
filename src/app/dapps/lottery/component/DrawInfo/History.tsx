import styled from 'styled-components'
import { Flex } from 'lib/component/Toolkit'
import { Content, Detail, Heading, InfoBox } from '.'

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

export default function History() {
  return (
    <HistorySection>
      <HistoryContainer>
        <HistoryHeading>Finished Rounds</HistoryHeading>
        <InfoBox
          renderHeading={<Heading drawNumber={608} drawDate={'Jul 28, 2022, 4:30 PM'} hasPagination />}
          renderContent={<Content />}
          renderDetail={<Detail />}
        />
      </HistoryContainer>
    </HistorySection>
  )
}
