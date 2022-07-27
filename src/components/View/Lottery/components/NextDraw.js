import styled from 'styled-components'

import { Flex } from '@/components/Core/Toolkit'
import { Content, Detail, Heading, InfoBox } from './DrawInfo'

const NextDrawContainer = styled(Flex)`
  align-items: center;
  flex-direction: column;
  padding: 40px 0 0 0;
`

const NextDrawHeading = styled.h2`
  color: #3c3c57;
  font-size: 40px;
`

const NextDrawSection = styled.section`
  height: 500px;
`

const NextDraw = () => {
  return (
    <NextDrawSection>
      <NextDrawContainer>
        <NextDrawHeading>Get your tickets now!</NextDrawHeading>
        <InfoBox
          renderHeading={<Heading drawNumber={608} drawDate={'Jul 28, 2022, 4:30 PM'} />}
          renderContent={<Content />}
          renderDetail={<Detail />}
        />
      </NextDrawContainer>
    </NextDrawSection>
  )
}

export default NextDraw
