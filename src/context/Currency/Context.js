import { createContext } from 'react'

const CurrencyContext = createContext({
  ethToUsdRate: undefined,
  ethToUsdRateError: undefined,
})

export default CurrencyContext
