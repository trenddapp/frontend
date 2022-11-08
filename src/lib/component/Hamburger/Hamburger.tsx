import styled from 'styled-components'
import { Box, Flex } from 'lib/component/Toolkit'

interface HamburgerProps {
  isOpen: boolean
}

const HamburgerContainer = styled(Box)`
  cursor: pointer;
  position: relative;
  width: 24px;
`

const HamburgerStickStraight = styled.span`
  background-color: rgb(81, 81, 106);
  border-radius: 9px;
  height: 3px;
  width: 24px;
`

const HamburgerStickDown = styled(HamburgerStickStraight)`
  position: absolute;
  transform: rotate(-45deg);
`

const HamburgerStickUp = styled(HamburgerStickStraight)`
  position: absolute;
  transform: rotate(45deg);
`

export default function Hamburger({ isOpen }: HamburgerProps) {
  return (
    <HamburgerContainer>
      {isOpen ? (
        <Flex alignItems="center" justifyContent="center">
          <HamburgerStickDown />
          <HamburgerStickUp />
        </Flex>
      ) : (
        <Flex flexDirection="column" height="15px" justifyContent="space-between">
          <HamburgerStickStraight />
          <HamburgerStickStraight />
          <HamburgerStickStraight />
        </Flex>
      )}
    </HamburgerContainer>
  )
}
