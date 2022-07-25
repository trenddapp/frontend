import useSWR from 'swr'

import { CURRENCY_RATES_REFRESH_INTERVAL_MS } from '@/config/constants/currency'
import { getRate } from '@/api/currency'
import CurrencyContext from './Context'

const CurrencyProvider = ({ children }) => {
  const { data: ethToUsdRate, error: ethToUsdRateError } = useSWR('/currency/rates/eth-usd', () => getRate('eth-usd'), {
    refreshInterval: CURRENCY_RATES_REFRESH_INTERVAL_MS,
  })

  return (
    <CurrencyContext.Provider
      value={{
        ethToUsdRate,
        ethToUsdRateError,
        ethToUsdRateIsLoading: !ethToUsdRateError && ethToUsdRate === undefined,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  )
}

export default CurrencyProvider
