import styled from 'styled-components'
import { Flex } from 'lib/component/Toolkit'
import { Wordle } from 'lib/api/wordle'
import CompleteRow from './CompleteRow'
import CurrentRow from './CurrentRow'
import EmptyRow from './EmptyRow'

interface BoardProps {
  currentGuess: string
  currentWordle: Wordle
}

const BoardContainer = styled(Flex)`
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export default function Board({ currentGuess, currentWordle }: BoardProps) {
  const empties = currentWordle.guesses.length + 1 < 6 ? Array.from(Array(6 - (currentWordle.guesses.length + 1))) : []
  return (
    <BoardContainer>
      {currentWordle.guesses.map((guess, i) => (
        <CompleteRow guess={guess} key={i} charStatus={currentWordle.char_status[i]} />
      ))}
      {currentWordle.guesses.length < 6 && <CurrentRow guess={currentGuess} />}
      {empties.map((_, i) => (
        <EmptyRow key={i} />
      ))}
    </BoardContainer>
  )
}
