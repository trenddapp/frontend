import { useCallback } from 'react'
import styled from 'styled-components'
import { getChainParameters } from 'pkg/util/chain'
import { Text } from 'pkg/component/Toolkit'
import config from 'config'
import { MetaMask } from '@web3-react/metamask'

interface ConnectCardProps {
  connector?: MetaMask
  icon: () => JSX.Element
  onConnect: () => void
  title: string
}

const ConnectButton = styled.button`
  align-items: center;
  background-color: inherit;
  border-radius: 0.375rem;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 4px;
  padding: 12px 0px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.overlay};
    cursor: pointer;
  }
`

const ConnectCard = ({ connector, icon: ConnectButtonIcon, onConnect, title }: ConnectCardProps) => {
  const connectButtonHandler = useCallback(() => {
    connector
      ?.activate(getChainParameters(config.defaultChainId))
      .then(() => onConnect())
      .catch((error) => console.log(error))
  }, [connector])
  return (
    <ConnectButton onClick={connectButtonHandler}>
      <ConnectButtonIcon />
      <Text as="p" margin="8px 0 0 0">
        {title}
      </Text>
    </ConnectButton>
  )
}

export default ConnectCard
