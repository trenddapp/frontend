import useSWR from 'swr'

import {
  LOTTERY_PRIZE_POOL_REFRESH_INTERVAL_MS,
  LOTTERY_STATUS_REFRESH_INTERVAL_MS,
  LOTTERY_COST_PER_TICKET_REFRESH_INTERVAL_MS,
} from '@/config/constants/lottery'
import { getCostPerTicket, getPrizePool, getStatus } from '@/api/lottery'
import { useContractLottery } from '@/hooks/lottery'
import LotteryContext from './Context'

const LotteryProvider = ({ children }) => {
  const { contract: contractLottery, error: contractLotteryError } = useContractLottery()

  const { data: costPerTicket, error: costPerTicketError } = useSWR(
    !contractLotteryError ? ['/lottery/cost-per-ticket', contractLottery] : null,
    (_, contract) => getCostPerTicket(contract),
    { refreshInterval: LOTTERY_COST_PER_TICKET_REFRESH_INTERVAL_MS },
  )

  const { data: prizePool, error: prizePoolError } = useSWR(
    !contractLotteryError ? ['/lottery/prize-pool', contractLottery] : null,
    (_, contract) => getPrizePool(contract),
    { refreshInterval: LOTTERY_PRIZE_POOL_REFRESH_INTERVAL_MS },
  )

  const { data: status, error: statusError } = useSWR(
    !contractLotteryError ? ['/lottery/status', contractLottery] : null,
    (_, contract) => getStatus(contract),
    { refreshInterval: LOTTERY_STATUS_REFRESH_INTERVAL_MS },
  )

  return (
    <LotteryContext.Provider
      value={{
        costPerTicket,
        costPerTicketError,
        costPerTicketIsLoading: !costPerTicketError && costPerTicket === undefined,
        prizePool,
        prizePoolError,
        prizePoolIsLoading: !prizePoolError && prizePool === undefined,
        status,
        statusError,
        statusIsLoading: !statusError && status === undefined,
      }}
    >
      {children}
    </LotteryContext.Provider>
  )
}

export default LotteryProvider
