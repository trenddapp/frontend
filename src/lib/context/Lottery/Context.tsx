import { createContext } from 'react'

interface Lottery {
  costPerTicket?: number
  costPerTicketError?: any
  prizePool?: number
  prizePoolError?: any
  status?: number
  statusError?: any
}

const Context = createContext<Lottery>({})

export default Context
