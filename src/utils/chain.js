import chains from '@/config/constants/chains'

const getChainParameters = (chainId) => {
  const chainInformation = chains[chainId]

  if (chainInformation?.nativeCurrency !== undefined) {
    return {
      chainId,
      chainName: chainInformation.name,
      nativeCurrency: chainInformation.nativeCurrency,
      rpcUrls: chainInformation.urls,
      blockExplorerUrls: chainInformation.blockExplorerUrls,
    }
  } else {
    return chainId
  }
}

export default getChainParameters
