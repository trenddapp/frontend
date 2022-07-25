import { useMemo } from 'react'

import { ethers } from 'ethers'

import { defaultChainId } from '@/config/constants'
import { useWeb3Provider, useWeb3Signer } from '@/hooks'
import abi from '@/config/abi/lottery.json'
import addresses from '@/config/constants/addresses'

const useContractLottery = () => {
  const provider = useWeb3Provider()
  const signer = useWeb3Signer()

  return useMemo(() => {
    try {
      const contract = new ethers.Contract(addresses.lottery[defaultChainId], abi, signer ?? provider)
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
  }, [provider, signer])
}

export default useContractLottery
