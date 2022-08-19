import styled from 'styled-components'

import { Flex } from '@/components/Core/Toolkit'
import { SvgEnd, SvgNext, SvgPrevious } from '@/components/Svg'

const Button = styled(Flex)`
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

const Container = styled(Flex)`
  justify-content: space-between;
`

const Heading = styled.h4`
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

const HistoryNavigation = ({ currentLotteryId, id, isLoading, setId }) => {
  const handleInputChange = (event) => {
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
    <Container>
      <Flex>
        <Heading>Round</Heading>
        <Input
          disabled={false}
          onChange={handleInputChange}
          pattern="^[0-9]+$"
          type="text"
          value={id === -1 || id === -2 ? '' : id}
        />
      </Flex>
      <Flex>
        <Button disabled={isLoading || id === 0} onClick={handleLeftClick}>
          <SvgPrevious />
        </Button>
        <Button disabled={isLoading || id === currentLotteryId - 1} onClick={handleRightClick}>
          <SvgNext />
        </Button>
        <Button disabled={isLoading || id === currentLotteryId - 1} onClick={handleRightEndClick}>
          <SvgEnd />
        </Button>
      </Flex>
    </Container>
  )
}

export default HistoryNavigation