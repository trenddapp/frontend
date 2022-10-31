import { AddEthereumChainParameter } from '@web3-react/types'

interface Config {
  chains: {
    [key: number]: AddEthereumChainParameter
  }
  defaultChainId: number
  defaultRpcUrl: string
}

const config: Config = {
  chains: {},
  defaultChainId: 5,
  defaultRpcUrl: 'https://eth-goerli.g.alchemy.com/v2/GjUP2SB2uZdWDqnEN3pq6Fe2k0jEAjWo',
}

export default config
