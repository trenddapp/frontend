import { createContext } from 'react'
import { Rate } from 'lib/api/currency'

export interface Currency {
  [key: string]: {
    rate?: Rate
    error?: any
  }
}

const Context = createContext<Currency>({})

export default Context
