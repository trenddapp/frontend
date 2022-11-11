'use client'

import { useContext, useEffect, useState } from 'react'
import { default as GraphmeSplitter } from 'grapheme-splitter'
import { AuthContext } from 'lib/context/Auth'
import { Board } from './component/Board'
import { createWordle, listWordles, updateWordle, Wordle, WordleStatus } from 'lib/api/wordle'
import { Flex } from 'lib/component/Toolkit'
import { Keyboard } from './component/Keyboard'
import { Modal, ModalBody, ModalHeader, ModalTitle } from 'lib/component/Modal'
import { unicodeLength } from 'lib/util/unicode'

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
        wordle.char_status = []
      }
      if (wordle.guesses === null) {
        wordle.guesses = []
      }
      setCurrentWordle(wordle)
    } catch (error) {
      console.log(error)
    }
    setCurrentGuess('')
  }
  // Set the `currentWordle` to the latest open wordle otherwise, create a new one and set it as the `currentWordle`.
  useEffect(() => {
    const initialize = async () => {
      try {
        const wordles = await listWordles(undefined, 1, WordleStatus.Open)
        if (wordles.length !== 0) {
          setCurrentWordle(wordles[0])
        }
      } catch (error: any) {
        if (error?.response?.data?.error?.code !== 404) {
          console.log(error)
          return
        }
        try {
          setCurrentWordle(await createWordle({ id: '', status: WordleStatus.Open, guesses: [], char_status: [] }))
        } catch (error: any) {
          console.log(error)
          return
        }
      }
    }
    if (userId !== null) {
      initialize()
    }
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
        <Modal onDismiss={() => setIsModalOpen(false)}>
          <ModalHeader>
            <ModalTitle>{isWinner ? 'You have won :)' : 'You have lost :('}</ModalTitle>
          </ModalHeader>
          <ModalBody>{isWinner ? '' : ''}</ModalBody>
        </Modal>
      ) : null}
    </>
  )
}
