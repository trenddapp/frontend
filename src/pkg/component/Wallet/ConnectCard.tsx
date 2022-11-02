import { useCallback } from 'react'
import { MetaMask } from '@web3-react/metamask'
import { WalletConnect } from '@web3-react/walletconnect'
import styled from 'styled-components'
import { Text } from 'pkg/component/Toolkit'
import constants from 'config/constants'

interface ConnectCardProps {
  connector: MetaMask | WalletConnect
  icon: () => JSX.Element
  onConnect: () => void
  title: string
}

const ConnectCardContainer = styled.button`
  align-items: center;
  background-color: inherit;
  border-radius: 0.375rem;
  border: 1px solid ${({ theme }) => theme.colors.borderAlt};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: space-between;
  margin: 4px;
  padding: 4px 12px;
  width: 100%;
  &:hover {
    background-color: ${({ theme }) => theme.colors.overlay};
    cursor: pointer;
  }
`

const ConnectCard = ({ connector, icon: ConnectButtonIcon, onConnect, title }: ConnectCardProps) => {
  const connectButtonHandler = useCallback(() => {
    connector
      ?.activate(constants.defaultChainId)
      .then(onConnect)
      .catch((error) => console.log('activate:', error))
  }, [connector])
  return (
    <ConnectCardContainer onClick={connectButtonHandler}>
      <ConnectButtonIcon />
      <Text as="p">{title}</Text>
    </ConnectCardContainer>
  )
}

export default ConnectCard
