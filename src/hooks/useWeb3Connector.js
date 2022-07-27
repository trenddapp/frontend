import { getPriorityConnector } from '@web3-react/core'

import { metaMaskConnection } from '@/config/connectors'

const useWeb3Connector = () => {
  return getPriorityConnector([metaMaskConnection.connector, metaMaskConnection.hooks])
}

export default useWeb3Connector
