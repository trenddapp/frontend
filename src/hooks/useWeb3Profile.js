import { defaultChainId } from '@/config/constants'
import useWeb3Connector from './useWeb3Connector'

const useWeb3Profile = () => {
  const { usePriorityAccount, usePriorityChainId, usePriorityIsActivating, usePriorityIsActive } = useWeb3Connector()

  const priorityAccount = usePriorityAccount()
  const priorityChainId = usePriorityChainId()
  const priorityIsActivating = usePriorityIsActivating()
  const priorityIsActive = usePriorityIsActive()

  let isWrongNetwork = false
  if (priorityChainId !== undefined) {
    isWrongNetwork = priorityIsActive && priorityChainId !== defaultChainId
  }

  return {
    account: priorityAccount,
    isActivating: priorityIsActivating,
    isActive: priorityIsActive,
    isWrongNetwork: isWrongNetwork,
  }
}

export default useWeb3Profile
