import { createContext } from 'react'

const LotteryContext = createContext({
  costPerTicket: undefined,
  costPerTicketError: undefined,
  costPerTicketIsLoading: true,
  prizePool: undefined,
  prizePoolError: undefined,
  prizePoolIsLoading: true,
  status: undefined,
  statusError: undefined,
  statusIsLoading: true,
})

export default LotteryContext
