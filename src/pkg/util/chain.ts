import config from 'config'

export function getChainParameters(chainId: number) {
  const chainInformation = config.chains[chainId]
  if (chainInformation === undefined) {
    return chainId
  }
  return chainInformation
}
