import { useMemo } from 'react'
import { ethers } from 'ethers'
import useConnector from 'pkg/hook/useConnector'

export default function useContract(abi: any, address: string) {
  const { provider } = useConnector()
  return useMemo(() => {
    try {
      return new ethers.Contract(address, abi, provider)
    } catch (error) {
      return null
    }
  }, [abi, address, provider])
}
