import { defaultChainId } from '@/config/constants'

import useWeb3Connector from './useWeb3Connector'

const useWeb3ChainId = () => {
  const { usePriorityChainId } = useWeb3Connector()
  return usePriorityChainId() ?? defaultChainId
}

export default useWeb3ChainId
