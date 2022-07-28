import styled from 'styled-components'

import { Box, Flex } from '@/components/Core/Toolkit'

const StyledHamburger = styled(Box)`
  cursor: pointer;
  position: relative;
  width: 24px;
`

const StyledStickStraight = styled.span`
  background-color: rgb(81, 81, 106);
  border-radius: 9px;
  height: 3px;
  width: 24px;
`

const StyledStickDown = styled(StyledStickStraight)`
  position: absolute;
  transform: rotate(-45deg);
`

const StyledStickUp = styled(StyledStickStraight)`
  position: absolute;
  transform: rotate(45deg);
`

const Hamburger = ({ isOpen }) => {
  return (
    <StyledHamburger>
      {isOpen ? (
        <Flex alignItems="center" justifyContent="center">
          <StyledStickDown />
          <StyledStickUp />
        </Flex>
      ) : (
        <Flex flexDirection="column" height="15px" justifyContent="space-between">
          <StyledStickStraight />
          <StyledStickStraight />
          <StyledStickStraight />
        </Flex>
      )}
    </StyledHamburger>
  )
}

export default Hamburger
