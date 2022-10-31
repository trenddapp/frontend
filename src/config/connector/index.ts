import { initializeConnector } from '@web3-react/core'
import { MetaMask } from '@web3-react/metamask'
import { SvgMetaMask, SvgWalletConnect } from 'pkg/component/Svg'

export const ConnectionType = {
  INJECTED: 'INJECTED',
  NETWORK: 'NETWORK',
}

const onError = (error: Error): void => {
  console.log(`web3-react error: ${error}`)
}

const [metaMask, metaMaskHooks] = initializeConnector((actions) => new MetaMask({ actions, onError }))
export const metaMaskConnection = {
  connector: metaMask,
  hooks: metaMaskHooks,
  type: ConnectionType.INJECTED,
}

export const connectorCards = [
  {
    id: '1',
    title: 'Meta Mask',
    icon: SvgMetaMask,
    connection: metaMaskConnection,
  },
  {
    id: '2',
    title: 'Wallet Connect',
    icon: SvgWalletConnect,
    connector: null, // TODO: implement me!
  },
]
