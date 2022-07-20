import { useMemo } from 'react'

import { ethers } from 'ethers'

import { defaultChainId } from '@/config/constants'
import { useWeb3Provider, useWeb3Signer } from '@/hooks'
import abi from '@/config/abi/auction.json'
import addresses from '@/config/constants/addresses'

const useContractAuction = () => {
  const provider = useWeb3Provider()
  const signer = useWeb3Signer()

  return useMemo(() => {
    try {
      const contract = new ethers.Contract(addresses.auction[defaultChainId], abi, signer ?? provider)
      return {
        contract: contract,
        error: undefined,
      }
    } catch (err) {
      return {
        contract: undefined,
        error: err,
      }
    }
  }, [provider, signer])
}

export default useContractAuction
