import styled from 'styled-components'

import { SvgMore } from '@/components/Svg'

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
  const connectButtonHandler = () => {
    connector
      .activate({
        chainId: 4,
        urls: [`https://rinkeby.infura.io/v3/5f06f41cca9140d78bdaeef7e07c9d94`],
        name: 'Rinkeby',
      })
      .then(() => onConnect())
      .catch((err) => console.log(err))
  }

  return (
    <ConnectButton onClick={connectButtonHandler}>
      <ConnectButtonIcon />
      <ConnectButtonText>{title}</ConnectButtonText>
    </ConnectButton>
  )
}

export default ConnectCard
