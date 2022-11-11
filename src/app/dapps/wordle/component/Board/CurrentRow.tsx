import { default as GraphemeSplitter } from 'grapheme-splitter'
import styled from 'styled-components'
import { Flex } from 'lib/component/Toolkit'
import Cell from './Cell'
import { WordleCharStatus } from 'lib/api/wordle'

interface CurrentRowProps {
  guess: string
}

const CurrentRowContainer = styled(Flex)`
  align-items: center;
  justify-content: center;
  margin: 2px 0 2px 0;
`

export default function CurrentRow({ guess }: CurrentRowProps) {
  const splitGuess = new GraphemeSplitter().splitGraphemes(guess)
  const emptyCells = Array.from(Array(5 - splitGuess.length))
  return (
    <CurrentRowContainer>
      {splitGuess.map((character, i) => (
        <Cell key={i + character} status={WordleCharStatus.Unspecified} text={character} />
      ))}
      {emptyCells.map((_, i) => (
        <Cell key={i} status={WordleCharStatus.Unspecified} text="" />
      ))}
    </CurrentRowContainer>
  )
}
