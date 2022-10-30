import useConnector from './useConnector'

export default function useSigner() {
  const { usePriorityProvider } = useConnector()
  const provider = usePriorityProvider()
  if (provider === undefined) {
    return null
  }
  return provider.getSigner()
}
