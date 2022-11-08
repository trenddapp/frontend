import { initializeConnector, Web3ReactHooks } from '@web3-react/core'
import { MetaMask } from '@web3-react/metamask'
import { WalletConnect } from '@web3-react/walletconnect'
import { SvgMetaMask, SvgWalletConnect } from 'lib/component/Svg'
import config from 'config/constants'

interface Connection {
  [key: string]: {
    connector: MetaMask | WalletConnect
    hooks: Web3ReactHooks
    icon: () => JSX.Element
    name: string
  }
}

function onError(error: Error) {
  console.error(`web3-react error: ${error}`)
}

const [metaMask, metaMaskHooks] = initializeConnector((actions) => new MetaMask({ actions, onError }))
const [walletConnect, walletConnectHooks] = initializeConnector<WalletConnect>(
  (actions) => new WalletConnect({ actions, options: { rpc: config.defaultRpcUrl }, onError }),
)

const connection: Connection = {
  metaMask: {
    connector: metaMask,
    hooks: metaMaskHooks,
    icon: SvgMetaMask,
    name: 'Meta Mask',
  },
  walletConnect: {
    connector: walletConnect,
    hooks: walletConnectHooks,
    icon: SvgWalletConnect,
    name: 'Wallet Connect',
  },
}

export default connection
