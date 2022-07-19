import useWeb3Connector from './useWeb3Connector'

const useWeb3Signer = () => {
  const { usePriorityProvider } = useWeb3Connector()
  const provider = usePriorityProvider()

  if (provider === undefined) {
    return undefined
  }

  return provider.getSigner()
}

export default useWeb3Signer
