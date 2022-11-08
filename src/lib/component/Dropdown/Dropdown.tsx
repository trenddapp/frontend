import styled from 'styled-components'
import { Box } from 'lib/component/Toolkit'

interface DropdownProps {
  children: React.ReactNode
  isOpen: boolean
  offsetLeft: number
  offsetTop: number
}

interface DropdownContainerProps {
  isOpen: boolean
  offsetLeft: number
  offsetTop: number
}

const DropdownContainer = styled(Box)<DropdownContainerProps>`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.menu};
  left: ${({ offsetLeft: leftOffset }) => leftOffset}px;
  min-width: 150px;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  padding: 12px 0px;
  position: absolute;
  top: ${({ offsetTop: topOffset }) => topOffset}px;
  transition: 0.1s ease opacity;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  z-index: ${({ theme }) => theme.zIndices.menu};
`

export default function Dropdown({ children, isOpen, offsetLeft, offsetTop }: DropdownProps) {
  return (
    <DropdownContainer isOpen={isOpen} offsetLeft={offsetLeft} offsetTop={offsetTop}>
      {children}
    </DropdownContainer>
  )
}
