'use client'

import styled from 'styled-components'
import { Flex } from 'lib/component/Toolkit'
import { SvgEnd, SvgNext, SvgPrevious } from 'lib/component/Svg'

const HistoryNavigationButton = styled(Flex)<any>`
  align-items: center;
  cursor: pointer;
  margin: 0 10px;
  :disabled {
    color: ${({ theme }) => theme.colors.border};
    cursor: not-allowed;
  }
  &:hover {
    opacity: 0.65;
  }
`

const HistoryNavigationContainer = styled(Flex)`
  justify-content: space-between;
`

const HistoryNavigationHeading = styled.h4`
  color: ${({ theme }) => theme.colors.headline};
  margin: 0 10px 0 0;
`

const Input = styled.input`
  background-color: rgb(238, 234, 244);
  border-radius: ${({ theme }) => theme.radii.default};
  border: 1px solid rgb(215, 202, 236);
  box-shadow: rgb(74 74 104 / 10%) 0px 2px 2px -1px inset;
  color: rgb(40, 13, 95);
  display: block;
  font-size: 16px;
  height: 100%;
  outline: 0px;
  padding: 3px 16px;
  text-align: center;
  width: 60px;
`

export default function HistoryNavigation({ currentLotteryId, id, isLoading, setId }: any) {
  const handleInputChange = (event: any) => {
    if (!event.currentTarget.validity.valid) {
      return
    }
    if (event.target.value === '') {
      setId(-2)
      return
    }
    let id = parseInt(event.target.value, 10)
    if (id >= currentLotteryId - 1) {
      id = currentLotteryId - 1
    }

    setId(id)
  }
  const handleLeftClick = () => {
    if (id <= 0) {
      setId(0)
      return
    }
    setId(id - 1)
  }
  const handleRightClick = () => {
    if (id >= currentLotteryId - 1) {
      setId(currentLotteryId - 1)
      return
    }
    setId(id + 1)
  }
  const handleRightEndClick = () => {
    setId(currentLotteryId - 1)
  }
  return (
    <HistoryNavigationContainer>
      <Flex>
        <HistoryNavigationHeading>Round</HistoryNavigationHeading>
        <Input
          disabled={false}
          onChange={handleInputChange}
          pattern="^[0-9]+$"
          type="text"
          value={id === -1 || id === -2 ? '' : id}
        />
      </Flex>
      <Flex>
        <HistoryNavigationButton disabled={isLoading || id === 0} onClick={handleLeftClick}>
          <SvgPrevious />
        </HistoryNavigationButton>
        <HistoryNavigationButton disabled={isLoading || id === currentLotteryId - 1} onClick={handleRightClick}>
          <SvgNext />
        </HistoryNavigationButton>
        <HistoryNavigationButton disabled={isLoading || id === currentLotteryId - 1} onClick={handleRightEndClick}>
          <SvgEnd />
        </HistoryNavigationButton>
      </Flex>
    </HistoryNavigationContainer>
  )
}
