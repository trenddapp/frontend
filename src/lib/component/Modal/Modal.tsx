import { useEffect } from 'react'
import styled from 'styled-components'
import { Box } from 'lib/component/Toolkit'

interface ModalProps {
  children: React.ReactNode
  isScrollDisabled?: boolean
  onDismiss: () => void
}

const ModalContainer = styled(Box)`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 20px 0px;
  left: 50%;
  min-width: 320px;
  overflow: hidden;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: ${({ theme }) => theme.zIndices.modal + 10};
`

const ModalOverlay = styled(Box)`
  background-color: ${({ theme }) => `${theme.colors.overlay}`};
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndices.modal};
`

export default function Modal({ children, isScrollDisabled = false, onDismiss }: ModalProps) {
  useEffect(() => {
    if (!isScrollDisabled) {
      return
    }
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <Box>
      <ModalOverlay onClick={onDismiss} />
      <ModalContainer>{children}</ModalContainer>
    </Box>
  )
}
