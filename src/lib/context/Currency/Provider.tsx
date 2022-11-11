import useSWR from 'swr'
import { getRate } from 'lib/api/currency'
import constant from 'config'
import Context from './Context'

interface ProviderProps {
  children: React.ReactNode
}

export default function Provider({ children }: ProviderProps) {
  // prettier-ignore
  const { data: dataEthUsd, error: errorEthUsd } = useSWR(
    'eth-usd',
    (symbol: string) => getRate(symbol),
    { refreshInterval: constant.currencyRateRefreshIntervalMs },
  )

  return (
    <Context.Provider
      value={{
        'eth-usd': { rate: dataEthUsd, error: errorEthUsd },
      }}
    >
      {children}
    </Context.Provider>
  )
}
