import { useEffect } from 'react'

import styled from 'styled-components'

import { Box } from '@/components/Core/Toolkit'

const StyledModal = styled(Box)``

const StyledModalContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 20px 0px;
  left: 50%;
  min-width: 320px;
  overflow: hidden;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 110;
`

const StyledModalOverlay = styled.div`
  background-color: ${({ theme }) => `${theme.colors.overlay}`};
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`

const Modal = ({ children, onDismiss }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <StyledModal>
      <StyledModalOverlay onClick={onDismiss} />
      <StyledModalContainer>{children}</StyledModalContainer>
    </StyledModal>
  )
}

export default Modal
