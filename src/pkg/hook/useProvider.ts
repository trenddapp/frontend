import { useMemo } from 'react'
import { ethers } from 'ethers'
import config from 'config'

export default function useProvider() {
  return useMemo(() => new ethers.providers.StaticJsonRpcProvider(config.defaultRpcUrl), [])
}
