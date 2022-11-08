import styled from 'styled-components'
import { WordleCharStatus } from '../../api'

interface KeyProps {
  onClick: (text: string) => void
  status: WordleCharStatus
  text: string
}

interface KeyButtonProps {
  status: WordleCharStatus
}

const KeyButton = styled.button<KeyButtonProps>`
  background-color: ${({ status }) =>
    status === WordleCharStatus.Correct
      ? '#008000'
      : status === WordleCharStatus.Present
      ? '#eab208'
      : status === WordleCharStatus.NotPresent
      ? '#911010'
      : 'gray'};
  border-radius: 4px;
  border: none;
  color: #ffffff;
  font-size: 12px;
  font-weight: 600;
  margin: 0 2px 0 2px;
  min-height: 50px;
  min-width: 35px;
  &:hover {
    cursor: pointer;
  }
`

export default function Key({ onClick, status, text }: KeyProps) {
  return (
    <KeyButton onClick={() => onClick(text)} status={status}>
      {text.toUpperCase()}
    </KeyButton>
  )
}
