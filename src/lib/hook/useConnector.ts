import { useMemo } from 'react'
import { ethers } from 'ethers'
import { useAccount, useNetwork, useProvider, useSigner } from 'wagmi'
import constant from 'config'

interface Output {
  address?: string
  isConnected: boolean
  isConnecting: boolean
  isWrongNetwork: boolean
  provider?: ethers.providers.Provider
  signer?: ethers.Signer
}

export default function useConnector(): Output {
  const { address, isConnected, isConnecting } = useAccount()
  const { chain } = useNetwork()
  const { data: signer } = useSigner()
  const isWrongNetwork = chain?.id !== constant.defaultChainId
  const provider = useProvider()
  return useMemo(() => {
    return {
      address,
      isConnected,
      isConnecting,
      isWrongNetwork,
      provider: provider || new ethers.providers.StaticJsonRpcProvider(constant.defaultRpcUrl),
      signer: signer === null ? undefined : signer,
    }
  }, [address, isConnected, isConnecting, isWrongNetwork, provider, signer])
}
