import styled from 'styled-components'
import { Flex } from 'lib/component/Toolkit'
import { WordleCharStatus } from 'lib/api/wordle'

interface CellProps {
  status: WordleCharStatus
  text: string
}

interface CellContainerProps {
  status: WordleCharStatus
}

const CellContainer = styled(Flex)<CellContainerProps>`
  align-items: center;
  border-radius: ${({ theme }) => theme.radii.small};
  justify-content: center;

  /* TODO: Improve the styles below */
  background-color: ${({ status: status }) =>
    status === WordleCharStatus.Correct ? 'green' : status === WordleCharStatus.Present ? '#eab208' : '#334155'};
  color: #ffffff;
  height: 45px;
  margin: 0 2px 0 2px;
  width: 45px;
  font-size: 24px;
`

export default function Cell({ status, text }: CellProps) {
  return <CellContainer status={status}>{text.toUpperCase()}</CellContainer>
}
