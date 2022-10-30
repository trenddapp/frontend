import { getPriorityConnector } from '@web3-react/core'
import { metaMaskConnection } from 'config/connector'

export default function useConnector() {
  return getPriorityConnector([metaMaskConnection.connector, metaMaskConnection.hooks])
}
