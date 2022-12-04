import { useContext } from 'react'
import { CurrencyContext } from 'lib/context/Currency'

export default function useCurrency(symbol: string) {
  const currency = useContext(CurrencyContext)
  return {
    data: currency?.[symbol]?.rate,
    error: currency?.[symbol]?.error,
  }
}
