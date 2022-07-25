import { useCallback } from 'react'

import styled from 'styled-components'

import { SvgMore } from '@/components/Svg'
import { defaultChainId } from '@/config/constants'
import getChainParameters from '@/utils/chain'

const ConnectButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4px;
  padding: 12px 0px;
  border: none;
  border-radius: 0.375rem;
  color: ${({ theme }) => theme.colors.text};
  background-color: inherit;
  &:hover {
    background-color: ${({ theme }) => theme.colors.overlay};
    cursor: pointer;
  }
`

const ConnectButtonText = styled.p`
  margin-top: 8px;
`

export const ConnectCardMore = (props) => {
  return (
    <ConnectButton {...props}>
      <SvgMore />
      <ConnectButtonText>More</ConnectButtonText>
    </ConnectButton>
  )
}

const ConnectCard = ({ connector, icon: ConnectButtonIcon, onConnect, title }) => {
  const connectButtonHandler = useCallback(() => {
    connector
      .activate(getChainParameters(defaultChainId))
      .then(() => onConnect())
      .catch((error) => console.debug(error))
  }, [connector])

  return (
    <ConnectButton onClick={connectButtonHandler}>
      <ConnectButtonIcon />
      <ConnectButtonText>{title}</ConnectButtonText>
    </ConnectButton>
  )
}

export default ConnectCard
