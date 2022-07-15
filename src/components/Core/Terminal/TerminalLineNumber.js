import styled from 'styled-components'

import { Text } from '@/components/Core/Toolkit'

const StyledTerminalLineNumber = styled(Text)`
  color: rgb(205, 205, 205);
  user-select: none;
`

const TerminalLineNumber = ({ lineNumber, maxLineNumber }) => {
  const lineNumberLength = lineNumber.toString().length
  const maxLineNumberLength = maxLineNumber.toString().length
  const margin = `0 15px 0 ${(maxLineNumberLength - lineNumberLength) * 9}px`

  return (
    <StyledTerminalLineNumber as="span" margin={margin}>
      {lineNumber}
    </StyledTerminalLineNumber>
  )
}

export default TerminalLineNumber
