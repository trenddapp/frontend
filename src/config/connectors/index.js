import { initializeConnector } from '@web3-react/core'
import { MetaMask } from '@web3-react/metamask'

import {
  SvgMathWallet,
  SvgMetaMask,
  SvgSafePal,
  SvgTokenPocket,
  SvgTrustWallet,
  SvgWalletConnect,
} from '@/components/Svg'

export const ConnectionType = {
  INJECTED: 'INJECTED',
  NETWORK: 'NETWORK',
}

const onError = (error) => {
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
  {
    id: '3',
    title: 'Trust Wallet',
    icon: SvgTrustWallet,
    connector: null, // TODO: implement me!
  },
  {
    id: '4',
    title: 'Math Wallet',
    icon: SvgMathWallet,
    connector: null, // TODO: implement me!
  },
  {
    id: '5',
    title: 'SafePal',
    icon: SvgSafePal,
    connector: null, // TODO: implement me!
  },
  {
    id: '6',
    title: 'Token Pocket',
    icon: SvgTokenPocket,
    connector: null, // TODO: implement me!
  },
]
