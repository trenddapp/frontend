import { getPriorityConnector } from '@web3-react/core'

import { metaMask, metaMaskHooks } from '../config/connectors/metaMask'

const useWeb3Connector = () => {
  return getPriorityConnector([metaMask, metaMaskHooks])
}

export default useWeb3Connector
