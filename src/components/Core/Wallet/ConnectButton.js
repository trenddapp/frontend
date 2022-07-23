import { useState } from 'react'

import styled from 'styled-components'

import ConnectModal from './ConnectModal'

const StyledConnectButton = styled.a`
  background-color: rgb(78, 94, 228);
  border-radius: 6px;
  box-shadow: rgb(50 50 93 / 11%) 0px 4px 6px, rgb(0 0 0 / 8%) 0px 1px 3px;
  color: rgb(255, 255, 255);
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 11px 35px;
  transition: background-color 0.4s ease 0s, color 0.4s ease 0s, transform 0.4s ease 0s;

  &:hover {
    background-color: rgb(67, 81, 197);
    box-shadow: rgb(50 50 93 / 10%) 0px 7px 14px, rgb(0 0 0 / 8%) 0px 3px 6px;
    color: rgb(255, 255, 255);
  }
`

const ConnectButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <ConnectModal open={isOpen} onDismiss={() => setIsOpen(false)} />
      <StyledConnectButton onClick={() => setIsOpen(true)}>Connect Wallet</StyledConnectButton>
    </>
  )
}

export default ConnectButton
