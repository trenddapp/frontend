import { default as GraphemeSplitter } from 'grapheme-splitter'
import styled from 'styled-components'
import { Flex } from 'lib/component/Toolkit'
import Cell from './Cell'
import { WordleCharStatus } from 'lib/api/wordle'

interface CompleteRowProps {
  guess: string
  charStatus: WordleCharStatus[]
}

const CompleteRowContainer = styled(Flex)`
  align-items: center;
  justify-content: center;
  margin: 2px 0 2px 0;
`

const CompleteRow = ({ guess, charStatus }: CompleteRowProps) => {
  const splitGuess = new GraphemeSplitter().splitGraphemes(guess)
  return (
    <CompleteRowContainer>
      {splitGuess.map((character, i) => (
        <Cell key={i} status={charStatus[i]} text={character} />
      ))}
    </CompleteRowContainer>
  )
}

export default CompleteRow
