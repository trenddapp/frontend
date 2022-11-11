import { useEffect } from 'react'
import styled from 'styled-components'
import { Flex } from 'lib/component/Toolkit'
import { Wordle, WordleCharStatus } from 'lib/api/wordle'
import Key from './Key'

interface KeyboardProps {
  currentWordle: Wordle
  onChar: (text: string) => void
  onDelete: () => void
  onEnter: () => void
}

const KeyboardContainer = styled(Flex)`
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

const KeyboardRow = styled(Flex)`
  margin: 2px 0 2px 0;
`

export default function Keyboard({ onChar, onDelete, onEnter, currentWordle }: KeyboardProps) {
  const keyStatus: any = {}
  currentWordle.char_status.map((value, i) => {
    value.map((charStatus, j) => {
      keyStatus[currentWordle.guesses[i][j]] = charStatus
    })
  })
  // Add listeners to the physical keyboard.
  useEffect(() => {
    const listener = (event: any) => {
      if (event.code === 'Enter') {
        onEnter()
      } else if (event.code === 'Backspace') {
        onDelete()
      } else {
        if (event.key.length === 1 && event.key >= 'a' && event.key <= 'z') {
          onChar(event.key)
        }
      }
    }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [onEnter, onDelete, onChar])
  return (
    <KeyboardContainer>
      <KeyboardRow>
        {['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'].map((key) => (
          <Key key={key} onClick={() => onChar(key)} status={keyStatus[key]} text={key} />
        ))}
      </KeyboardRow>
      <KeyboardRow>
        {['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'].map((key) => (
          <Key key={key} onClick={() => onChar(key)} status={keyStatus[key]} text={key} />
        ))}
      </KeyboardRow>
      <KeyboardRow>
        <Key key="ENTER" onClick={onEnter} status={WordleCharStatus.Unspecified} text="ENTER" />
        {['z', 'x', 'c', 'v', 'b', 'n', 'm'].map((key) => (
          <Key key={key} onClick={() => onChar(key)} status={keyStatus[key]} text={key} />
        ))}
        <Key key="DELETE" onClick={onDelete} status={WordleCharStatus.Unspecified} text="DELETE" />
      </KeyboardRow>
    </KeyboardContainer>
  )
}
