import styled from 'styled-components'
import { Flex } from 'lib/component/Toolkit'
import Cell from './Cell'
import { WordleCharStatus } from 'lib/api/wordle'

const EmptyRowContainer = styled(Flex)`
  align-items: center;
  justify-content: center;
  margin: 2px 0 2px 0;
`

export default function EmptyRow() {
  return (
    <EmptyRowContainer>
      <Cell status={WordleCharStatus.Unspecified} text="" />
      <Cell status={WordleCharStatus.Unspecified} text="" />
      <Cell status={WordleCharStatus.Unspecified} text="" />
      <Cell status={WordleCharStatus.Unspecified} text="" />
      <Cell status={WordleCharStatus.Unspecified} text="" />
    </EmptyRowContainer>
  )
}
