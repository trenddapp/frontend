'use client'

import { useContext, useEffect, useState } from 'react'
import { default as GraphmeSplitter } from 'grapheme-splitter'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { AuthContext } from 'lib/context/Auth'
import { Board } from './component/Board'
import { createWordle, listWordles, updateWordle, Wordle, WordleStatus } from 'lib/api/wordle'
import { Flex, Text } from 'lib/component/Toolkit'
import { Keyboard } from './component/Keyboard'
import { Modal, ModalBody, ModalHeader, ModalTitle } from 'lib/component/Modal'
import { unicodeLength } from 'lib/util/unicode'

const WordlePlayButton = styled.a`
  background-color: rgb(78, 94, 228);
  border-radius: 6px;
  box-shadow: rgb(50 50 93 / 11%) 0px 4px 6px, rgb(0 0 0 / 8%) 0px 1px 3px;
  color: rgb(255, 255, 255);
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 24px 0 0 0;
  padding: 11px 35px;
  transition: background-color 0.4s ease 0s, color 0.4s ease 0s, transform 0.4s ease 0s;
  &:hover {
    background-color: rgb(67, 81, 197);
    box-shadow: rgb(50 50 93 / 10%) 0px 7px 14px, rgb(0 0 0 / 8%) 0px 3px 6px;
    color: rgb(255, 255, 255);
  }
`

export default function Page() {
  const { userId } = useContext(AuthContext)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [isWinner, setIsWinner] = useState<boolean>(false)
  const [currentGuess, setCurrentGuess] = useState<string>('')
  const [currentWordle, setCurrentWordle] = useState<Wordle>({
    id: '',
    status: WordleStatus.Unspecified,
    guesses: [],
    char_status: [],
  })
  const onChar = (text: string) => {
    if (unicodeLength(`${currentGuess}${text}`) <= 5 && currentWordle.guesses.length < 6) {
      setCurrentGuess(`${currentGuess}${text}`)
    }
  }
  const onDelete = () => {
    setCurrentGuess(new GraphmeSplitter().splitGraphemes(currentGuess).slice(0, -1).join(''))
  }
  const onEnter = async () => {
    if (unicodeLength(currentGuess) !== 5 || currentWordle.status === WordleStatus.Complete) {
      return
    }
    try {
      const wordle = await updateWordle({ ...currentWordle, guesses: [...currentWordle.guesses, currentGuess] })
      if (wordle.char_status === null) {
        // TODO: Remove me!
        wordle.char_status = []
      }
      if (wordle.guesses === null) {
        // TODO: Remove me!
        wordle.guesses = []
      }
      setCurrentWordle(wordle)
      setCurrentGuess('')
    } catch (error) {
      setCurrentGuess('')
      toast.error('Invalid word!')
      return
    }
  }
  const initialize = async () => {
    if (userId === undefined) {
      return
    }
    setIsModalOpen(false)
    setIsWinner(false)
    setCurrentGuess('')
    try {
      const wordles = await listWordles(undefined, 1, WordleStatus.Open)
      if (wordles.length !== 0) {
        setCurrentWordle(wordles[0])
      }
    } catch (error: any) {
      if (error?.response?.data?.error?.code !== 404) {
        console.log(error)
        toast.error('Failed to fetch wordle data!')
        return
      }
      try {
        setCurrentWordle(await createWordle({ id: '', status: WordleStatus.Open, guesses: [], char_status: [] }))
      } catch (error: any) {
        console.log(error)
        toast.error('Failed to create a new wordle!')
        return
      }
    }
  }
  // Set the `currentWordle` to the latest open wordle otherwise, create a new one and set it as the `currentWordle`.
  useEffect(() => {
    initialize()
  }, [userId])
  useEffect(() => {
    if (currentWordle.status !== WordleStatus.Complete) {
      return
    }
    let isWinner = true
    currentWordle.char_status[currentWordle.char_status.length - 1].forEach((value) => {
      if (value !== 3) {
        isWinner = false
      }
    })
    setIsWinner(isWinner)
    setIsModalOpen(true)
  }, [currentWordle])
  return (
    <>
      <Board currentGuess={currentGuess} currentWordle={currentWordle} />
      <Flex justifyContent="center" margin="20px">
        <Keyboard currentWordle={currentWordle} onChar={onChar} onDelete={onDelete} onEnter={onEnter} />
      </Flex>
      {isModalOpen ? (
        <Modal onDismiss={() => {}}>
          <ModalHeader>
            <ModalTitle>{isWinner ? 'WINNER' : 'LOSER'}</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <Flex flexDirection="column" justifyContent="center" alignItems="center" height="150px">
              {isWinner ? (
                <>
                  <Text as="p">The solution was:</Text>
                  <Text as="p">{currentWordle.solution?.toUpperCase()}</Text>
                </>
              ) : (
                <>
                  <Text as="p">The solution was:</Text>
                  <Text as="p">{currentWordle.solution?.toUpperCase()}</Text>
                </>
              )}
              <WordlePlayButton onClick={initialize}>PLAY</WordlePlayButton>
            </Flex>
          </ModalBody>
        </Modal>
      ) : null}
    </>
  )
}
