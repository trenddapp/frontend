import { createContext } from 'react'
import { ethers } from 'ethers'

interface Lottery {
  costPerTicket?: ethers.BigNumber
  costPerTicketError?: any
  prizePool?: ethers.BigNumber
  prizePoolError?: any
  status?: number
  statusError?: any
}

const Context = createContext<Lottery>({})

export default Context
