import styled from 'styled-components'
import { Text } from 'lib/component/Toolkit'

interface TerminalLinNumberProps {
  lineNumber: number
  maxLineNumber: number
}

const TerminalLineNumberContainer = styled(Text)`
  color: rgb(205, 205, 205);
  user-select: none;
`

export default function TerminalLineNumber({ lineNumber, maxLineNumber }: TerminalLinNumberProps) {
  return (
    <TerminalLineNumberContainer
      as="span"
      margin={`0 15px 0 ${(maxLineNumber.toString().length - lineNumber.toString().length) * 9}px`}
    >
      {lineNumber}
    </TerminalLineNumberContainer>
  )
}
