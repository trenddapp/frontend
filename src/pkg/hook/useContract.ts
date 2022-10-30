import { useMemo } from 'react'
import { ethers } from 'ethers'
import useProvider from './useProvider'

export default function useContract(abi: any, address: string) {
  const provider = useProvider()
  return useMemo(() => {
    try {
      return new ethers.Contract(address, abi, provider)
    } catch (error) {
      return null
    }
  }, [abi, address, provider])
}
