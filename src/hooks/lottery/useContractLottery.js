import { useMemo } from 'react'

import { ethers } from 'ethers'

import { defaultChainId } from '@/config/constants'
import { useWeb3Provider } from '@/hooks'
import abi from '@/config/abi/lottery.json'
import addresses from '@/config/constants/addresses'

const useContractLottery = () => {
  const provider = useWeb3Provider()

  return useMemo(() => {
    try {
      const contract = new ethers.Contract(addresses.lottery[defaultChainId], abi, provider)
      return {
        contract: contract,
        error: undefined,
      }
    } catch (error) {
      return {
        contract: undefined,
        error: error,
      }
    }
  }, [provider])
}

export default useContractLottery
