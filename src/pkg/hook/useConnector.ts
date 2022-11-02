import { useMemo } from 'react'
import { ethers } from 'ethers'
import { getPriorityConnector } from '@web3-react/core'
import connection from 'config/connection'
import constants from 'config/constants'

export default function useConnector() {
  const { usePriorityAccount, usePriorityChainId, usePriorityIsActivating, usePriorityIsActive, usePriorityProvider } =
    getPriorityConnector(
      [connection.metaMask.connector, connection.metaMask.hooks],
      [connection.walletConnect.connector, connection.walletConnect.hooks],
    )

  const account = usePriorityAccount()
  const chainId = usePriorityChainId()
  const isActivating = usePriorityIsActivating()
  const isActive = usePriorityIsActive()
  const isWrongNetwork = chainId !== constants.defaultChainId
  const provider = usePriorityProvider()

  return useMemo(() => {
    return {
      account: account,
      chainId: chainId,
      isActivating: isActivating,
      isActive: isActive,
      isWrongNetwork: isWrongNetwork,
      provider: provider || new ethers.providers.StaticJsonRpcProvider(constants.defaultRpcUrl),
      signer: provider?.getSigner(),
    }
  }, [account, chainId, isActivating, isActive, isWrongNetwork, provider])
}
