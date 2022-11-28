import styled from 'styled-components'
import { Box, Flex } from 'lib/component/Toolkit'
import { SvgExclamationTriangle } from 'lib/component/Svg'

const WipContainer = styled(Flex)`
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin: 50px 0;
`

const WipHeading = styled.h3`
  font-size: 25px;
`

const WipIcon = styled(Box)`
  margin: 10px 0 0 0;
  color: #f2b816;
`

export default function Wip() {
  return (
    <WipContainer>
      <WipHeading>Under Construction!</WipHeading>
      <WipIcon>
        <SvgExclamationTriangle width={40} />
      </WipIcon>
    </WipContainer>
  )
}
